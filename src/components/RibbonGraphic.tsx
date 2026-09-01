export function RibbonGraphic() {
  return (
    <svg
      viewBox="0 0 900 560"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ribbon-warm" x1="60" y1="420" x2="620" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8c1d40" />
          <stop offset="0.55" stopColor="#ff7f32" />
          <stop offset="1" stopColor="#ffc627" />
        </linearGradient>
        <linearGradient id="ribbon-cool" x1="520" y1="480" x2="880" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#78be20" />
          <stop offset="0.5" stopColor="#00a3e0" />
          <stop offset="1" stopColor="#272f42" />
        </linearGradient>
        <linearGradient id="ribbon-base" x1="0" y1="300" x2="700" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#272f42" stopOpacity="0" />
          <stop offset="0.5" stopColor="#747474" stopOpacity="0.55" />
          <stop offset="1" stopColor="#272f42" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M -20 330 C 90 300, 150 380, 260 350 C 370 320, 400 260, 520 280 C 640 300, 660 350, 780 320"
        stroke="url(#ribbon-base)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M 120 420
           C 160 320, 260 300, 320 360
           C 380 420, 300 470, 380 500
           C 460 530, 520 460, 470 390
           C 430 335, 350 340, 340 260
           C 332 195, 400 150, 470 175"
        stroke="url(#ribbon-warm)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      <path
        d="M 560 150
           C 610 110, 700 120, 720 190
           C 740 260, 660 290, 690 350
           C 720 410, 800 400, 820 330
           C 838 270, 790 220, 830 160
           C 860 115, 850 60, 800 45"
        stroke="url(#ribbon-cool)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      <circle cx="470" cy="175" r="4" fill="#ffc627" opacity="0.8" />
      <circle cx="800" cy="45" r="4" fill="#00a3e0" opacity="0.8" />
    </svg>
  );
}
