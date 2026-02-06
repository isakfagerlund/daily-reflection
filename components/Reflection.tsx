import { Box, Text } from "@/components/ui";
import { format } from "date-fns";

export const Reflection = ({
  reflection,
  date,
}: {
  reflection: string;
  date: Date;
}) => {
  const day = format(date, "do MMM");

  return (
    <Box
      minHeight={100}
      borderRadius={8}
      borderWidth={4}
      width="100%"
      padding="m"
      borderColor="secondaryColor"
      gap="m"
    >
      <Text color="secondaryColor" fontWeight="bold" fontSize={16}>
        {day}
      </Text>
      <Text color="secondaryColor" fontSize={12}>
        {reflection}
      </Text>
    </Box>
  );
};
