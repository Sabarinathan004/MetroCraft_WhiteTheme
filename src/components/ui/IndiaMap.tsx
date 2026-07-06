"use client";

export function IndiaMap() {
  const markers = [
    { cx: 180, cy: 120, r: 6 },
    { cx: 150, cy: 180, r: 5 },
    { cx: 200, cy: 200, r: 5 },
    { cx: 170, cy: 250, r: 6 },
    { cx: 220, cy: 160, r: 4 },
    { cx: 130, cy: 220, r: 5 },
    { cx: 190, cy: 280, r: 4 },
    { cx: 160, cy: 300, r: 5 },
  ];

  return (
    <svg
      viewBox="0 0 280 380"
      className="mx-auto h-auto w-full max-w-[220px]"
      aria-label="Map of India showing project locations"
    >
      <path
        d="M140 20 C160 25, 175 35, 185 55 C195 70, 200 90, 205 110 C210 130, 215 150, 220 170 C225 190, 230 210, 225 230 C220 250, 210 270, 200 285 C190 300, 175 315, 160 325 C145 335, 130 345, 120 355 C110 365, 100 370, 95 360 C90 350, 85 335, 80 320 C75 305, 70 290, 68 275 C66 260, 65 245, 70 230 C75 215, 85 200, 95 185 C105 170, 115 155, 125 140 C130 125, 135 110, 135 95 C135 80, 130 65, 125 50 C120 35, 125 25, 140 20 Z"
        fill="#0B2D5C"
        opacity="0.9"
      />
      <path
        d="M200 100 C210 105, 218 115, 222 128 C226 141, 224 155, 218 168 C212 181, 200 192, 188 198 C176 204, 162 206, 150 200 C138 194, 128 182, 124 168 C120 154, 122 140, 130 128 C138 116, 150 108, 165 104 C176 101, 188 98, 200 100 Z"
        fill="#0B2D5C"
        opacity="0.85"
      />
      {markers.map((marker, i) => (
        <g key={i}>
          <circle
            cx={marker.cx}
            cy={marker.cy}
            r={marker.r + 4}
            fill="#D69A2D"
            opacity="0.3"
          />
          <circle
            cx={marker.cx}
            cy={marker.cy}
            r={marker.r}
            fill="#D69A2D"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        </g>
      ))}
    </svg>
  );
}
