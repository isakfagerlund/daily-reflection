import { Box } from "@/components/ui";
import { AddNewReflection } from "./AddNewReflection";

export const FloatingBottomBar = ({
  handleSubmit,
}: {
  handleSubmit: (value: string) => void;
}) => {
  return (
    <Box width="100%" paddingHorizontal="l" paddingTop="m" paddingBottom="xl">
      <Box width="100%" maxWidth={500} alignSelf="center">
        <AddNewReflection handleSubmit={handleSubmit} />
      </Box>
    </Box>
  );
};
