"use client";

import Image from "next/image";
import { Play, Pause } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  thumbnail: string;
  video: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  isPlaying: boolean;
  onPlayClick: (member: TeamMember) => void;
  onVideoRef: (ref: HTMLVideoElement | null) => void;
  onVideoEnd: () => void;
}

export function TeamMemberCard({
  member,
  isPlaying,
  onPlayClick,
  onVideoRef,
  onVideoEnd,
}: TeamMemberCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer"
      onClick={() => onPlayClick(member)}
    >
      {/* Video or Image */}
      <video
        ref={onVideoRef}
        src={member.video}
        className={`w-full h-80 lg:h-[430px] object-cover object-top transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "opacity-0 absolute"
        }`}
        autoPlay={isPlaying}
        onEnded={onVideoEnd}
        muted={false} // ensure sound works
      />

      {!isPlaying && (
        <Image
          width={500}
          height={500}
          src={member.thumbnail || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-80 lg:h-[430px] object-cover object-top"
        />
      )}

      {/* Overlay Play/Pause Icon */}
      <div
        className={`absolute inset-0 bg-black/10 flex items-center justify-center opacity-100 transition-opacity duration-300 pointer-events-none ${
          isPlaying ? "hidden" : ""
        }`}
      >
        {isPlaying ? (
          <Pause size={28} className="text-white" />
        ) : (
          <Play size={28} className="text-white" />
        )}
      </div>

      {/* Team Member Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 pointer-events-none">
        <h3 className="text-white font-semibold text-lg">{member.name}</h3>
        <p className="text-gray-300 text-sm">{member.title}</p>
      </div>
    </div>
  );
}
