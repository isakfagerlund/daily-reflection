import { Box, Text } from "@/components/ui";
import { Theme } from "@/constants/theme";
import { createBox } from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  TouchableOpacity as RNButton,
} from "react-native";
import { useAtom } from "jotai";
import { currentReflectionInput } from "@/atoms/atoms";
import { useCallback } from "react";

const TextInput = createBox<Theme, React.ComponentProps<typeof RNTextInput>>(
  RNTextInput,
);
const Button = createBox<Theme, React.ComponentProps<typeof RNButton>>(
  RNButton,
);

export const NewReflectionContent = ({
  handleSubmit,
}: {
  handleSubmit: (value: string) => void;
}) => {
  const [textInput, setTextInput] = useAtom(currentReflectionInput);

  const submitReflection = useCallback(() => {
    const trimmedReflection = textInput.trim();

    if (!trimmedReflection) {
      return;
    }

    handleSubmit(trimmedReflection);
    setTextInput("");
  }, [handleSubmit, setTextInput, textInput]);

  const handleKeyPress = useCallback(
    (event: {
      nativeEvent: { key: string; shiftKey?: boolean };
      preventDefault?: () => void;
    }) => {
      if (event.nativeEvent.key !== "Enter") {
        return;
      }

      if (!("shiftKey" in event.nativeEvent)) {
        return;
      }

      if (event.nativeEvent.shiftKey) {
        return;
      }

      event.preventDefault?.();
      submitReflection();
    },
    [submitReflection],
  );

  return (
    <Box paddingVertical="xl" padding="xl" gap="m">
      <TextInput
        testID="reflection-input"
        onChangeText={(text) => setTextInput(text)}
        onKeyPress={handleKeyPress}
        borderRadius={8}
        borderWidth={2}
        width="100%"
        padding="s"
        multiline={true}
        value={textInput}
        textAlignVertical="top"
        height={150}
      />
      <Button
        testID="reflection-submit"
        onPress={submitReflection}
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
