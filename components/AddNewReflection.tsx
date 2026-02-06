import React from "react";
import { Box } from "@/components/ui";
import { Theme } from "@/constants/theme";
import { createBox } from "@shopify/restyle";
import { PlusIcon } from "lucide-react-native";
import { TouchableOpacity as RNButton } from "react-native";

import { NewReflectionContent } from "./NewReflectionContent";

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
