import React from 'react';

// Import your actual vector PNGs — adjust paths to match your project structure
import Vector1 from '../assets/Simcurabar/Vector1.png'; // right side asterisk
import Vector  from '../assets/Simcurabar/Vector.png';      // left side asterisk

const SimcuraBar = () => {
  return (
    <div className="w-full relative bg-white overflow-visible">
      <div className="relative w-full py-20 flex flex-col items-center justify-center text-center">

        {/* Top-right large circle arc */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '280px',
            height: '280px',
            top: '-50px',
            right: '-90px',
            borderRadius: '50%',
            border: '50px solid #c4b5fd',
            opacity: 0.55,
          }}
        />

        {/* LEFT VECTOR PNG — asterisk, partially off-screen left, between the two sections */}
        <div
          className="absolute pointer-events-none"
          style={{
            left:   '-93px',
            bottom: '-97px',        /* sits straddling the section boundary / bar top */
            width:  '200.65px',
            height: '195.23px',
            transform: 'rotate(-10.2deg)',
            opacity: 1,
            zIndex: 30,
            filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
          }}
        >
          <img src={Vector} alt="vector-left" className="w-full h-full object-contain" />
        </div>

      </div>

      {/* ═══════════════════════════════════════
          FULL-WIDTH PURPLE BAR  (1440 × 166)
      ═══════════════════════════════════════ */}
      <div
        className="relative w-full flex items-center justify-center overflow-visible"
        style={{
          height: '166px',
          background: 'linear-gradient(90deg, #7743ED 0%, #9D77F2 50%, #7743ED 100%)',
        }}
      >
        {/* Color-burn tint overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'rgba(119,67,237,0.15)',
            mixBlendMode: 'color-burn',
            opacity: 0.15,
          }}
        />

        {/* Bar copy — centred */}
        <div className="relative z-10 text-center px-6">
          <p className="text-white text-xl sm:text-2xl font-normal leading-snug">
            Simcura RX is a technology and digital marketing company
          </p>
          <p className="text-white text-xl sm:text-2xl font-bold leading-snug mt-1">
            delivering innovative solutions to help businesses succeed online.
          </p>
        </div>

        {/* RIGHT VECTOR PNG — asterisk at bottom-right, partly outside bar */}
        <div
          className="absolute pointer-events-none"
          style={{
            right:  '-30px',          /* left: 1326 / 1440 ≈ near right edge */
            bottom: '-28px',          /* overlaps bar bottom */
            width:  '200.65px',
            height: '195.23px',
            transform: 'rotate(-0.48deg)',
            opacity: 1,
            zIndex: 20,
            filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
          }}
        >
          <img src={Vector1} alt="vector-right" className="w-full h-full object-contain" />
        </div>
      </div>

    </div>
  );
};

export default SimcuraBar;