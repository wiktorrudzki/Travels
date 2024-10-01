import { ICON_SHADOW } from "@/constants/styles";
import React from "react";
import { StyleSheet } from "react-native";
import { Circle, ClipPath, Defs, G, Path, Svg } from "react-native-svg";

const SearchChecked = () => (
  <Svg
    style={styles.icon}
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
  >
    <G filter="url(#filter0_d_56_153)">
      <Circle cx={32} cy={33} r={25} fill="#38D9C6" />
      <Circle cx={32} cy={33} r={28} stroke="#fff" strokeWidth={6} />
    </G>
    <G clipPath="url(#clip0_56_153)">
      <Path
        d="M45.398 43.018l-5.41-5.41a1.301 1.301 0 00-.921-.379h-.885a11.23 11.23 0 002.387-6.944C40.57 24.05 35.52 19 29.285 19 23.05 19 18 24.051 18 30.285c0 6.233 5.051 11.284 11.285 11.284 2.62 0 5.029-.89 6.944-2.387v.885c0 .347.136.678.38.922l5.409 5.409c.51.51 1.335.51 1.84 0l1.535-1.535c.51-.51.51-1.335.005-1.845zm-16.113-5.789a6.94 6.94 0 01-6.945-6.944 6.94 6.94 0 016.945-6.945 6.94 6.94 0 016.944 6.945 6.94 6.94 0 01-6.944 6.944z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_56_153">
        <Path
          fill="#fff"
          transform="translate(18 19)"
          d="M0 0H27.7778V27.7778H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

const styles = StyleSheet.create({
  icon: ICON_SHADOW,
});

export default SearchChecked;
