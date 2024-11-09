import React from "react";
import { NewReflectionContent } from "./NewReflectionContent";
import { createBox } from "@shopify/restyle";
import { Theme } from "@/constants/theme";

const Box = createBox<Theme>();

export const AddNewReflection = ({
  handleSubmit,
}: {
  handleSubmit: (currentReflection: string) => void;
}) => {
  return (
    <React.Fragment>
      <Box backgroundColor="secondaryColor" borderRadius={16}>
        <NewReflectionContent handleSubmit={handleSubmit} />
      </Box>
    </React.Fragment>
  );
};
