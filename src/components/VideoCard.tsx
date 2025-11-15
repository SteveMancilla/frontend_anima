// src/components/VideoCard.tsx
import React, { useRef, useEffect } from "react";

interface Props {
  src: string;
  active: boolean;
}

const VideoCard: React.FC<Props> = ({ src, active }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (active) videoRef.current.play();
    else videoRef.current.pause();
  }, [active]);

  return (
    <div className="w-[360px] sm:w-[420px] md:w-[460px] h-[640px] rounded-2xl overflow-hidden bg-black shadow-xl border border-white/10">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoCard;