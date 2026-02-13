"use client";

import { useState, useRef } from "react";

export default function ValentinePage() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [isNoDisappearing, setIsNoDisappearing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleYesClick = () => {
    setButtonsVisible(false);
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 300);
  };

  const handleNoClick = () => {
    if (noClickCount >= 3) {
      // Disappear after 3 clicks
      setIsNoDisappearing(true);
      setTimeout(() => {
        setNoClickCount(noClickCount + 1);
      }, 600);
    } else {
      // Fly to random position
      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 100;
      const randomX = Math.random() * maxX - maxX / 2;
      const randomY = Math.random() * maxY - maxY / 2;

      setNoButtonPosition({ x: randomX, y: randomY });
      setNoClickCount(noClickCount + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-purple-300 flex items-center justify-center overflow-hidden relative">
      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      {!showVideo ? (
        <div className="relative z-10 text-center px-4">
          {/* Main content */}
          <div className="mb-12 animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg animate-heartbeat">
              💝
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Will you be my Valentine?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow">
              There's only one right answer... 💕
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 items-center justify-center relative">
            {/* Yes Button */}
            <button
              onClick={handleYesClick}
              className={`
                px-12 py-6 text-2xl font-bold rounded-full
                bg-gradient-to-r from-pink-500 to-red-500
                hover:from-pink-600 hover:to-red-600
                text-white shadow-2xl
                transform hover:scale-110 active:scale-95
                transition-all duration-300
                ${!buttonsVisible ? "opacity-0 scale-0" : "opacity-100 scale-100"}
              `}
              style={{ transition: "all 0.5s ease" }}
            >
              Yes!
            </button>

            {/* No Button */}
            {noClickCount <= 3 && (
              <button
                onClick={handleNoClick}
                className={`
                  px-12 py-6 text-2xl font-bold rounded-full
                  bg-gradient-to-r from-gray-400 to-gray-500
                  hover:from-gray-500 hover:to-gray-600
                  text-white shadow-2xl
                  transform hover:scale-110 active:scale-95
                  ${!buttonsVisible ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                  ${isNoDisappearing ? "animate-fadeOut" : ""}
                `}
                style={{
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) ${
                    !buttonsVisible ? "scale(0)" : "scale(1)"
                  }`,
                }}
              >
                No
              </button>
            )}
          </div>

          {noClickCount > 0 && noClickCount <= 3 && (
            <p className="mt-8 text-lg text-white/80 animate-fadeIn">
              {noClickCount === 1 && "Are you sure? Try clicking yes! 👉👈"}
              {noClickCount === 2 && "The button is running away! Maybe that's a sign? 💭"}
              {noClickCount === 3 && "One more click and it'll disappear forever! 🥺"}
            </p>
          )}
        </div>
      ) : (
        <div className="relative z-10 text-center px-4 max-w-4xl animate-fadeIn">
          {/* Message */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="animate-heartbeat">💕</span>
              <span>Thank You!</span>
              <span className="animate-heartbeat">💕</span>
            </h3>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              I'm sad that we can't be together on the 14th, but I promise I will make it good for you next weekend, after my birthday
            </p>
            <div className="mt-6 text-6xl animate-float">
              💖
            </div>
            
            {/* Dirt Patch with Blooming Flowers */}
            <div className="mt-8 relative pt-16">
              {/* Flowers growing from dirt */}
              <div className="absolute top-0 left-0 right-0 flex justify-center items-end gap-6 px-8">
                {/* Tulip 1 */}
                <div className="animate-bloom animate-sway" style={{ animationDelay: "0.3s" }}>
                  <div className="text-5xl">🌷</div>
                </div>
                
                {/* Daisy */}
                <div className="animate-bloom animate-sway" style={{ animationDelay: "0.6s" }}>
                  <div className="text-5xl">🌼</div>
                </div>
                
                {/* Sunflower */}
                <div className="animate-bloom animate-sway" style={{ animationDelay: "0.9s" }}>
                  <div className="text-5xl">🌻</div>
                </div>
                
                {/* Hibiscus */}
                <div className="animate-bloom animate-sway" style={{ animationDelay: "1.2s" }}>
                  <div className="text-5xl">🌺</div>
                </div>
                
                {/* Tulip 2 */}
                <div className="animate-bloom animate-sway" style={{ animationDelay: "1.5s" }}>
                  <div className="text-5xl">🌷</div>
                </div>
              </div>
              
              {/* Dirt Patch */}
              <div className="h-16 bg-gradient-to-b from-amber-800 to-amber-950 rounded-lg relative">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute w-2 h-2 bg-amber-900 rounded-full top-2 left-4"></div>
                  <div className="absolute w-1 h-1 bg-amber-950 rounded-full top-4 left-8"></div>
                  <div className="absolute w-2 h-2 bg-amber-900 rounded-full top-6 left-12"></div>
                  <div className="absolute w-1 h-1 bg-amber-950 rounded-full top-3 right-8"></div>
                  <div className="absolute w-2 h-2 bg-amber-900 rounded-full top-5 right-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
