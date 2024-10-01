import { ICON_SHADOW } from "@/constants/styles";
import React from "react";
import { StyleSheet } from "react-native";
import { Circle, ClipPath, Defs, G, Path, Svg } from "react-native-svg";

const UserChecked = () => (
  <Svg
    style={styles.icon}
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
  >
    <G filter="url(#filter0_d_112_219)">
      <Circle cx={32} cy={33} r={25} fill="#38D9C6" />
      <Circle cx={32} cy={33} r={28} stroke="#fff" strokeWidth={6} />
    </G>
    <G clipPath="url(#clip0_112_219)">
      <Path
        d="M32 34.736c4.313 0 7.813-3.5 7.813-7.812 0-4.314-3.5-7.813-7.813-7.813a7.814 7.814 0 00-7.813 7.813c0 4.313 3.5 7.812 7.813 7.812zm6.944 1.736h-2.989A9.455 9.455 0 0132 37.34a9.473 9.473 0 01-3.955-.868h-2.99a6.944 6.944 0 00-6.944 6.945v.868a2.605 2.605 0 002.604 2.604h22.57a2.605 2.605 0 002.604-2.604v-.868a6.944 6.944 0 00-6.945-6.945z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_112_219">
        <Path
          fill="#fff"
          transform="translate(18.111 19.111)"
          d="M0 0H27.7778V27.7778H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

const styles = StyleSheet.create({
  icon: ICON_SHADOW,
});

export default UserChecked;
