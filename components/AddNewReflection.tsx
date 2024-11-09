import React from "react";
import { NewReflectionContent } from "./NewReflectionContent";
import { createBox } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { PlusIcon } from "lucide-react-native";
import { TouchableOpacity as RNButton } from "react-native";

const Box = createBox<Theme>();

const Button = createBox<Theme, React.ComponentProps<typeof RNButton>>(
  RNButton,
);

export const AddNewReflection = ({
  handleSubmit,
}: {
  handleSubmit: (currentReflection: string) => void;
}) => {
  return (
    <React.Fragment>
      <Box backgroundColor="secondaryColor" borderRadius={16}>
        <Button
          borderRadius={12}
          padding="s"
          alignItems="center"
          width={50}
          height={50}
          backgroundColor="secondaryColor"
          justifyContent="center"
        >
          <PlusIcon />
        </Button>
        <NewReflectionContent handleSubmit={handleSubmit} />
      </Box>
    </React.Fragment>
  );
};
