import { Box, Text } from "@/components/ui";
import { Theme } from "@/constants/theme";
import { createBox } from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  TouchableOpacity as RNButton,
} from "react-native";

const TextInput = createBox<Theme, React.ComponentProps<typeof RNTextInput>>(
  RNTextInput,
);
const Button = createBox<Theme, React.ComponentProps<typeof RNButton>>(
  RNButton,
);

export const NewReflectionContent = ({
  currentReflection,
  handleSubmit,
  setCurrentReflection,
}: {
  currentReflection: string;
  handleSubmit: (value: string) => void;
  setCurrentReflection: (value: string) => void;
}) => {
  return (
    <Box paddingVertical="xl" padding="xl" gap="m">
      <TextInput
        onChangeText={setCurrentReflection}
        borderRadius={8}
        borderWidth={2}
        width="100%"
        padding="s"
        multiline={true}
        value={currentReflection}
        textAlignVertical="top"
        height={150}
      />
      <Button
        onPress={() => handleSubmit(currentReflection)}
        borderWidth={2}
        borderRadius={100}
        padding="s"
        alignItems="center"
        width="100%"
      >
        <Text>Submit</Text>
      </Button>
    </Box>
  );
};
