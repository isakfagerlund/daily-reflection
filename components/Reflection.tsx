import { currentReflectionInput } from "@/atoms/atoms";
import { Theme } from "@/constants/theme";
import { createBox, createText } from "@shopify/restyle";
import { useAtom } from "jotai";
import { format } from "date-fns";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const today = format(new Date(), "Qo MMM");

export const Reflection = () => {
  const [currentReflection] = useAtom(currentReflectionInput);

  return (
    <Box
      minHeight={200}
      borderRadius={8}
      borderWidth={4}
      width="100%"
      padding="m"
      borderColor="secondaryColor"
      gap="m"
    >
      <Text color="secondaryColor" fontWeight="bold" fontSize={16}>
        {today}
      </Text>
      <Text color="secondaryColor" fontSize={12}>
        {currentReflection}
      </Text>
    </Box>
  );
};
