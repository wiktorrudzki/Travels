import React from "react";
import { Circle, ClipPath, Defs, G, Path, Svg } from "react-native-svg";

const User = () => (
  <Svg width={62} height={62} viewBox="0 0 62 62" fill="none">
    <Circle cx={31} cy={31} r={28} fill="#fff" stroke="#fff" strokeWidth={6} />
    <G clipPath="url(#clip0_56_146)">
      <Path
        d="M31 32.736c4.313 0 7.813-3.5 7.813-7.812 0-4.314-3.5-7.813-7.813-7.813a7.814 7.814 0 00-7.813 7.813c0 4.313 3.5 7.812 7.813 7.812zm6.944 1.736h-2.989A9.455 9.455 0 0131 35.34a9.473 9.473 0 01-3.955-.868h-2.99a6.944 6.944 0 00-6.944 6.945v.868a2.605 2.605 0 002.604 2.604h22.57a2.605 2.605 0 002.604-2.604v-.868a6.944 6.944 0 00-6.945-6.945z"
        fill="#A3A3A3"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_56_146">
        <Path
          fill="#fff"
          transform="translate(17.111 17.111)"
          d="M0 0H27.7778V27.7778H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default User;
