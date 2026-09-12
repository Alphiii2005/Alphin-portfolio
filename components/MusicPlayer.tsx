"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiPause,
  FiPlay,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi";

const tracks = [
  {
    name: "Interstellar 🌌",
    src: "/music/int.mp4",
  },
  {
    name: "Oppenheimer ⚛️",
    src: "/music/opn.mp4",
  },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const track = tracks[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const previousTrack = () => {
    const previous =
      currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentTrack(previous);
    setProgress(0);
    setPlaying(false);
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentTrack(next);
    setProgress(0);
    setPlaying(false);
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[260px] -translate-x-1/2">
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
      />

      <div className="rounded-[22px] border border-white/40 bg-white/25 px-5 py-4 shadow-[0_20px_60px_rgba(23,21,24,0.10)] backdrop-blur-[28px] backdrop-saturate-150 transition-all duration-300 hover:bg-white/30">
        {/* Track name */}
        <div className="flex items-center justify-center">
          <p className="truncate text-center text-xs font-semibold tracking-tight text-[#171518]">
            {track.name}
          </p>

          {playing && (
            <div className="ml-2 flex items-end gap-[2px]">
              <span className="h-2 w-[2px] animate-pulse rounded-full bg-[#C98F65]" />
              <span className="h-3 w-[2px] animate-pulse rounded-full bg-[#C98F65] [animation-delay:150ms]" />
              <span className="h-1.5 w-[2px] animate-pulse rounded-full bg-[#C98F65] [animation-delay:300ms]" />
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-[#171518]/10">
          <div
            className="h-full rounded-full bg-[#171518]/60 transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-center gap-5">
          <button
            onClick={previousTrack}
            aria-label="Previous track"
            className="text-[#625A52] transition-all duration-300 hover:-translate-x-0.5 hover:text-[#171518]"
          >
            <FiSkipBack size={15} />
          </button>

          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#171518] shadow-[0_5px_20px_rgba(23,21,24,0.08)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/90"
          >
            {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
          </button>

          <button
            onClick={nextTrack}
            aria-label="Next track"
            className="text-[#625A52] transition-all duration-300 hover:translate-x-0.5 hover:text-[#171518]"
          >
            <FiSkipForward size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}