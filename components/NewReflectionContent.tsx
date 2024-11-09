import { Theme } from "@/constants/theme";
import { createBox, createText } from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  TouchableOpacity as RNButton,
} from "react-native";
import { useAtom } from "jotai";
import { currentReflectionInput } from "@/atoms/atoms";
import { useState } from "react";

const TextInput = createBox<Theme, React.ComponentProps<typeof RNTextInput>>(
  RNTextInput,
);
const Text = createText<Theme>();
const Box = createBox<Theme>();

const Button = createBox<Theme, React.ComponentProps<typeof RNButton>>(
  RNButton,
);

export const NewReflectionContent = ({
  handleSubmit,
}: {
  handleSubmit: (value: string) => void;
}) => {
  const [currentReflection] = useAtom(currentReflectionInput);
  const [textInput, setTextInput] = useState(currentReflection);

  return (
    <Box paddingVertical="xl" padding="xl" gap="m">
      <TextInput
        onChangeText={(text) => setTextInput(text)}
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
        onPress={() => {
          handleSubmit(textInput);
        }}
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
