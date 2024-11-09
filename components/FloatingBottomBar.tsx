import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { easeGradient } from "react-native-easing-gradient";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { AddNewReflection } from "./AddNewReflection";

const { colors, locations } = easeGradient({
  colorStops: {
    0: { color: "transparent" },
    0.42: { color: "rgba(0,0,0, 1)" },
    1: { color: "black" },
  },
});

export const FloatingBottomBar = ({
  handleSubmit,
}: {
  handleSubmit: (value: string) => void;
}) => {
  return (
    <MaskedView
      maskElement={
        <LinearGradient
          locations={locations}
          colors={colors}
          style={StyleSheet.absoluteFill}
        />
      }
      style={{ width: "100%" }}
    >
      <BlurView
        intensity={40}
        style={{
          width: "100%",
          height: 180,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddNewReflection handleSubmit={handleSubmit} />
      </BlurView>
    </MaskedView>
  );
};
