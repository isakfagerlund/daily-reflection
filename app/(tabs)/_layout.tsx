import { Tabs } from "expo-router";
import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Platform } from "react-native";

import { useTheme } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { House, UserRound } from "lucide-react-native";

export default function TabLayout() {
  const theme = useTheme<Theme>();
  const { primaryColor, grey } = theme.colors;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          marginBottom: Platform.OS === "web" ? 10 : undefined,
        },
        tabBarBackground: () =>
          Platform.OS !== "android" ? (
            <BlurView
              tint="light"
              intensity={20}
              style={StyleSheet.absoluteFill}
            />
          ) : undefined,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <House color={focused ? primaryColor : grey} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <UserRound color={focused ? primaryColor : grey} />
          ),
        }}
      />
    </Tabs>
  );
}
