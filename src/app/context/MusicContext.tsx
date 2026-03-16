import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  togglePlayPause: () => void;
  toggleMute: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const safePlay = (audio: HTMLAudioElement) => {
    return audio.play().catch((err: unknown) => {
      if (err instanceof DOMException && err.name === 'AbortError') {
        // Expected when play() is interrupted by a quick pause().
        return;
      }
      console.error(err);
    });
  };

  useEffect(() => {
    let audio: HTMLAudioElement | null = null;

    const onTimeUpdate = () => audio && setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => audio && setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);
    const onError = (e: any) => console.error('Audio failed to load:', e);

    // If blocked, wait for ANY user interaction
    const unlock = () => {
      if (!audio) {
        audio = new Audio('/audio/avatar-love.mp3');
        audio.loop = true;
        audio.volume = 0.3;
        audio.preload = "none";
        audioRef.current = audio;

        audio.addEventListener('timeupdate', onTimeUpdate);
        audio.addEventListener('loadedmetadata', onLoadedMetadata);
        audio.addEventListener('ended', onEnded);
        audio.addEventListener('error', onError);
      }

      safePlay(audio).then(() => {
        setIsPlaying(true);
      }).catch(console.error);
      
      document.removeEventListener('click', unlock);
      document.removeEventListener('scroll', unlock);
      document.removeEventListener('mousemove', unlock);
      document.removeEventListener('keydown', unlock);
      document.removeEventListener('touchstart', unlock);
    };
    
    document.addEventListener('click', unlock);
    document.addEventListener('scroll', unlock);
    document.addEventListener('mousemove', unlock);
    document.addEventListener('keydown', unlock);
    document.addEventListener('touchstart', unlock);

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
        audio.removeEventListener('timeupdate', onTimeUpdate);
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
        audio.removeEventListener('ended', onEnded);
        audio.removeEventListener('error', onError);
      }
      document.removeEventListener('click', unlock);
      document.removeEventListener('scroll', unlock);
      document.removeEventListener('mousemove', unlock);
      document.removeEventListener('keydown', unlock);
      document.removeEventListener('touchstart', unlock);
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        safePlay(audioRef.current).then(() => {
          setIsPlaying(true);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <MusicContext.Provider value={{ 
      isPlaying, 
      isMuted, 
      currentTime, 
      duration, 
      togglePlayPause, 
      toggleMute,
      audioRef 
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
