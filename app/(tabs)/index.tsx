import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedView className="header"></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "static",
    width: 375,
    height: 96.25,
    /* 自动布局 */
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10.5,
    paddingRight: 14,
    paddingBottom: 10.5,
    paddingLeft: 14,

    /* Inside Auto Layout */
    flex: undefined,
    /* Removed invalid property */
    flexGrow: 0,
    margin: 0,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: "rgb(255, 255, 255)",
  },
});
