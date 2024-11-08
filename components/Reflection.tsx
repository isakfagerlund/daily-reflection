import { Theme } from "@/constants/theme";
import { createBox, createText } from "@shopify/restyle";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export const Reflection = ({ reflection }: { reflection: string }) => {
  return (
    <Box
      minHeight={200}
      borderRadius={8}
      borderWidth={4}
      width="100%"
      padding="m"
      borderColor="secondaryColor"
    >
      <Text color="secondaryColor" fontSize={12}>
        {reflection}
      </Text>
    </Box>
  );
};
