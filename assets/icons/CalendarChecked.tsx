import { ICON_SHADOW } from "@/constants/styles";
import React from "react";
import { StyleSheet } from "react-native";
import { Circle, ClipPath, Defs, G, Path, Svg } from "react-native-svg";

const CalendarChecked = () => (
  <Svg
    style={styles.icon}
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
  >
    <G filter="url(#filter0_d_112_175)">
      <Circle cx={32} cy={33} r={25} fill="#38D9C6" />
      <Circle cx={32} cy={33} r={28} stroke="#fff" strokeWidth={6} />
    </G>
    <G clipPath="url(#clip0_112_175)">
      <Path
        d="M19.847 44.285a2.605 2.605 0 002.604 2.604H41.55a2.605 2.605 0 002.604-2.604V29.528H19.847v14.757zM37.208 33.65c0-.358.293-.651.651-.651h2.17c.358 0 .651.293.651.651v2.17a.653.653 0 01-.65.651h-2.17a.653.653 0 01-.652-.65V33.65zm0 6.944c0-.358.293-.65.651-.65h2.17c.358 0 .651.292.651.65v2.17a.653.653 0 01-.65.652h-2.17a.653.653 0 01-.652-.651v-2.17zm-6.944-6.944c0-.358.293-.651.65-.651h2.171c.358 0 .651.293.651.651v2.17a.653.653 0 01-.651.651h-2.17a.653.653 0 01-.651-.65V33.65zm0 6.944c0-.358.293-.65.65-.65h2.171c.358 0 .651.292.651.65v2.17a.653.653 0 01-.651.652h-2.17a.653.653 0 01-.651-.651v-2.17zm-6.945-6.944c0-.358.293-.651.651-.651h2.17c.359 0 .652.293.652.651v2.17a.653.653 0 01-.651.651h-2.17a.653.653 0 01-.652-.65V33.65zm0 6.944c0-.358.293-.65.651-.65h2.17c.359 0 .652.292.652.65v2.17a.653.653 0 01-.651.652h-2.17a.653.653 0 01-.652-.651v-2.17zm18.23-18.012h-2.605V19.98a.87.87 0 00-.868-.868H36.34a.87.87 0 00-.868.868v2.604h-6.944V19.98a.87.87 0 00-.868-.868h-1.736a.87.87 0 00-.869.868v2.604h-2.604a2.605 2.605 0 00-2.604 2.605v2.604h24.306v-2.605a2.605 2.605 0 00-2.604-2.604z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_112_175">
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

export default CalendarChecked;
