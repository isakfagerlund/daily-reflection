import { createBox } from "@shopify/restyle";
import theme, { Theme } from "@/constants/theme";
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
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground"
    >
      <Box width="100%" maxWidth={500} flex={1}>
        {children}
      </Box>
    </Box>
  );
};
