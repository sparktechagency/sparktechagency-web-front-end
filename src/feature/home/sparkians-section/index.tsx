"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SparklansHeader } from "./SparklansHeader";
import { SparklansNavigation } from "./SparklansNavigation";
import { TeamMemberCard } from "./TeamMemberCard";
import { TEAM_MEMBERS, TeamMember } from "@/constants/sparkians";

export function SparklansSection() {
  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handlePrevClick = () => {
    console.log("[v0] Sliding to previous");
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    console.log("[v0] Sliding to next");
    swiperRef.current?.swiper.slideNext();
  };

  const handlePlayClick = (member: TeamMember) => {
    const currentVideo = videoRefs.current[member.id];
    if (!currentVideo) return;

    if (playingVideoId === member.id) {
      // toggle pause/play
      if (currentVideo.paused) {
        currentVideo.play();
      } else {
        currentVideo.pause();
      }
    } else {
      // pause previously playing video
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        videoRefs.current[playingVideoId].pause();
      }
      currentVideo.play();
      setPlayingVideoId(member.id);
    }
  };

  const handleVideoEnd = () => {
    setPlayingVideoId(null); // reset when video ends
  };
  const handleSlideChange = () => {
    // Pause any playing video when slide changes
    if (playingVideoId && videoRefs.current[playingVideoId]) {
      videoRefs.current[playingVideoId].pause();
      setPlayingVideoId(null);
    }
  };

  return (
    <section className="pb-24 pt-36 bg-spark">
      <div className="container">
        <div className="flex justify-between items-end">
          <SparklansHeader />

          <SparklansNavigation
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          onSlideChange={handleSlideChange}
          className="swiper-container"
        >
          {TEAM_MEMBERS?.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamMemberCard
                member={member}
                isPlaying={playingVideoId === member.id}
                onPlayClick={handlePlayClick}
                onVideoRef={(ref) => {
                  if (ref) videoRefs.current[member.id] = ref;
                }}
                onVideoEnd={handleVideoEnd}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
