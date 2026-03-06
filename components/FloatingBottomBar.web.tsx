import { Box } from "@/components/ui";
import { AddNewReflection } from "./AddNewReflection";

export const FloatingBottomBar = ({
  currentReflection,
  handleSubmit,
  setCurrentReflection,
}: {
  currentReflection: string;
  handleSubmit: (value: string) => void;
  setCurrentReflection: (value: string) => void;
}) => {
  return (
    <Box width="100%" paddingHorizontal="l" paddingTop="m" paddingBottom="xl">
      <Box width="100%" maxWidth={500} alignSelf="center">
        <AddNewReflection
          currentReflection={currentReflection}
          handleSubmit={handleSubmit}
          setCurrentReflection={setCurrentReflection}
        />
      </Box>
    </Box>
  );
};
