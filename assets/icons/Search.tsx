import React from "react";
import { Circle, ClipPath, Defs, G, Path, Svg } from "react-native-svg";

const Search = () => (
  <Svg width={62} height={62} viewBox="0 0 62 62" fill="none">
    <Circle cx={31} cy={31} r={28} fill="#fff" stroke="#fff" strokeWidth={6} />
    <G clipPath="url(#clip0_112_223)">
      <Path
        d="M44.398 41.018l-5.41-5.41a1.301 1.301 0 00-.921-.379h-.885a11.23 11.23 0 002.387-6.944C39.57 22.05 34.52 17 28.285 17 22.05 17 17 22.051 17 28.285c0 6.233 5.051 11.284 11.285 11.284 2.62 0 5.029-.89 6.944-2.387v.885c0 .347.136.678.38.922l5.409 5.409c.51.51 1.335.51 1.84 0l1.535-1.535c.51-.51.51-1.335.005-1.845zm-16.113-5.789a6.94 6.94 0 01-6.945-6.944 6.94 6.94 0 016.945-6.945 6.94 6.94 0 016.944 6.945 6.94 6.94 0 01-6.944 6.944z"
        fill="#A1A1AA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_112_223">
        <Path
          fill="#fff"
          transform="translate(17 17)"
          d="M0 0H27.7778V27.7778H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Search;
