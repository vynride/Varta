"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";

interface PlayerProps {
  audioUrl?: string;
  title?: string;
  author?: string;
  coverUrl?: string;
}

export default function Player({
  audioUrl,
  title = "Play a Story!",
  author = "",
  coverUrl,
}: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audioUrl || !audio) return;
    audio.src = audioUrl;
    audio.load();
    audio.volume = volume / 100;
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
      setProgress(0);
      audio.play().then(() => setIsPlaying(true));
    };
    audio.ontimeupdate = () => {
      setProgress(audio.currentTime);
    };
    audio.onended = () => {
      setIsPlaying(false);
    };
  }, [volume, audioUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const onSeek = (val: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = val[0];
    setProgress(val[0]);
  };

  const onVolumeChange = (val: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    setVolume(val[0]);
    audio.volume = val[0] / 100;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#111217]/90 backdrop-blur-lg shadow-xl z-150">
      <div className="flex items-center justify-between px-6 py-3">
        {/* LEFT - CURRENT TRACK INFO */}
        <div className="flex items-center gap-4 w-1/3 min-w-[200px]">
          {coverUrl ? (
            <div className="relative h-[65px] w-[65px] rounded-md overflow-hidden">
              <Image
                src={coverUrl}
                fill
                alt={title}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="h-[65px] w-[65px] bg-zinc-700 rounded-md" />
          )}
          <div className="text-white text-sm">
            <div className="font-medium truncate">{title}</div>
            <div className="text-xs text-gray-400 truncate">{author}</div>
          </div>
        </div>

        {/* CENTER - CONTROLS */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4 mb-1">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600/20">
              <SkipBack size={20} />
            </Button>
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-blue-600/20"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600/20">
              <SkipForward size={20} />
            </Button>
          </div>
          <Slider
            value={[progress]}
            onValueChange={onSeek}
            max={duration || 0}
            className="w-[300px] h-4 relative flex items-center group
              [&_[data-slot=slider-track]]:bg-neutral-800
              [&_[data-slot=slider-track]]:h-1.5
              [&_[data-slot=slider-track]]:rounded-full

              [&_[data-slot=slider-range]]:bg-blue-500

              [&_[data-slot=slider-thumb]]:bg-blue-700
              [&_[data-slot=slider-thumb]]:w-4
              [&_[data-slot=slider-thumb]]:h-4
              [&_[data-slot=slider-thumb]]:rounded-full
              [&_[data-slot=slider-thumb]]:shadow-md
              [&_[data-slot=slider-thumb]]:ring-2
              [&_[data-slot=slider-thumb]]:ring-blue-700
            "
          />
        </div>

        {/* RIGHT - VOLUME */}
        <div className="flex items-center justify-end gap-2 w-1/3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600/20">
            {volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </Button>
          <Slider
            value={[volume]}
            onValueChange={onVolumeChange}
            max={100}
            className="w-[100px] h-4 relative flex items-center group
              [&_[data-slot=slider-track]]:bg-neutral-800
              [&_[data-slot=slider-track]]:h-1.5
              [&_[data-slot=slider-track]]:rounded-full

              [&_[data-slot=slider-range]]:bg-blue-500

              [&_[data-slot=slider-thumb]]:bg-blue-700
              [&_[data-slot=slider-thumb]]:w-4
              [&_[data-slot=slider-thumb]]:h-4
              [&_[data-slot=slider-thumb]]:rounded-full
              [&_[data-slot=slider-thumb]]:shadow-md
              [&_[data-slot=slider-thumb]]:ring-2
              [&_[data-slot=slider-thumb]]:ring-blue-700
            "
          />
        </div>
      </div>

      <audio ref={audioRef} />
    </div>
  );
}
