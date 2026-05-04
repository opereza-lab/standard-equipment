"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group/vid">
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-500 [transform:perspective(1000px)_rotateY(-4deg)] group-hover/vid:[transform:perspective(1000px)_rotateY(0deg)_translateY(-6px)] group-hover/vid:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_8px_48px_rgba(224,120,32,0.25)]"
        style={{
          aspectRatio: "21/9",
          boxShadow: "0 8px 48px rgba(224,120,32,0.18), 0 2px 24px rgba(0,0,0,0.4)",
          border: "1px solid rgba(224,120,32,0.25)",
        }}
      >
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          className="w-full h-full object-cover"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Overlay + Play — desaparecen al dar play */}
        {!playing && (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(0,0,0,0.5)" }}
            />
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={handlePlay}
            >
              <div
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "2px" }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}

        {/* Esquinas naranjas */}
        <div className="absolute top-0 right-0 w-12 h-[2px]" style={{ background: "#e07820" }} />
        <div className="absolute top-0 right-0 w-[2px] h-12" style={{ background: "#e07820" }} />
      </div>
    </div>
  );
}
