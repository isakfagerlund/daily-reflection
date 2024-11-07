import { createBox } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { ReactNode } from "react";
import { Platform } from "react-native";

const Box = createBox<Theme>();

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box
      flex={1}
      paddingVertical={`${Platform.OS === "web" ? "s" : "xl2"}`}
      paddingHorizontal="m"
    >
      {children}
    </Box>
  );
};
