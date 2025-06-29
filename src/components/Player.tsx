"use client";

import Image from "next/image";
import { useState } from "react";
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

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState([30]);
  const [volume, setVolume] = useState([70]);

  return (
    <div className="fixed z-50 bottom-0 left-0 w-full bg-[#111217] backdrop-blur-lg shadow-xl">
      <div className="flex items-center justify-between px-6 py-2">
        {/* CURRENT TRACK */}
        <div className="flex items-center gap-4 w-1/3 min-w-[200px]">
          <div className="relative h-[65px] w-[65px] rounded-md overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/11/9f/28/119f28ce28fdf6fc5c02c8ab4ba6f425.jpg"
              width={80}
              height={80}
              alt="artwork"
              className="object-cover"
            />
          </div>
          <div className="text-white text-sm">
            <div className="font-medium">Song Title</div>
            <div className="text-xs text-gray-400">Artist Name</div>
          </div>
        </div>

        {/* PLAYER CONTROLS */}
        <div className="flex flex-col items-center justify-center w-1/3">
          <div className="flex items-center gap-4 mb-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <SkipBack size={20} />
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <SkipForward size={20} />
            </Button>
          </div>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            className="w-[300px] h-4 relative flex items-center group

    [&_[data-slot=slider-track]]:bg-neutral-800
    [&_[data-slot=slider-track]]:h-1.5
    [&_[data-slot=slider-track]]:rounded-full

    [&_[data-slot=slider-range]]:bg-emerald-500

    [&_[data-slot=slider-thumb]]:bg-emerald-700
    [&_[data-slot=slider-thumb]]:w-4
    [&_[data-slot=slider-thumb]]:h-4
    [&_[data-slot=slider-thumb]]:rounded-full
    [&_[data-slot=slider-thumb]]:shadow-md
    [&_[data-slot=slider-thumb]]:ring-2
    [&_[data-slot=slider-thumb]]:ring-emerald-700
  "
          />
        </div>

        {/* VOLUME CONTROL */}
        <div className="flex items-center justify-end gap-2 w-1/3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            {volume[0] === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </Button>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            className="w-[100px] h-4 relative flex items-center group

    [&_[data-slot=slider-track]]:bg-neutral-800
    [&_[data-slot=slider-track]]:h-1.5
    [&_[data-slot=slider-track]]:rounded-full

    [&_[data-slot=slider-range]]:bg-emerald-500

    [&_[data-slot=slider-thumb]]:bg-emerald-700
    [&_[data-slot=slider-thumb]]:w-4
    [&_[data-slot=slider-thumb]]:h-4
    [&_[data-slot=slider-thumb]]:rounded-full
    [&_[data-slot=slider-thumb]]:shadow-md
    [&_[data-slot=slider-thumb]]:ring-2
    [&_[data-slot=slider-thumb]]:ring-emerald-700
  "
          />
        </div>
      </div>
    </div>
  );
}
