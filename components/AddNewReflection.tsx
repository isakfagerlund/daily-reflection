import { Theme } from "@/constants/theme";
import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { useState } from "react";
import {
  TouchableOpacity as RNButton,
  TextInput as RNTextInput,
} from "react-native";

const TextInput = createBox<Theme, React.ComponentProps<typeof RNTextInput>>(
  RNTextInput,
);
const Button = createBox<Theme, React.ComponentProps<typeof RNButton>>(
  RNButton,
);

const Text = createText<Theme>();
const Box = createBox<Theme>();

export const AddNewReflection = ({
  handleSubmit,
  reflection,
}: {
  handleSubmit: (currentReflection: string) => void;
  reflection: string;
}) => {
  const [currentReflection, setCurrentReflection] = useState(reflection);

  return (
    <React.Fragment>
      <Box paddingVertical="xl" padding="xl" gap="m">
        <TextInput
          onChangeText={(text) => setCurrentReflection(text)}
          borderRadius={8}
          borderWidth={2}
          width="100%"
          padding="s"
          value={currentReflection}
        />
        <Button
          onPress={() => {
            handleSubmit(currentReflection);
          }}
          borderWidth={2}
          borderRadius={100}
          padding="s"
          alignItems="center"
          width="100%"
        >
          <Text>Submit</Text>
        </Button>
        <Button
          borderWidth={2}
          borderRadius={8}
          padding="s"
          alignItems="center"
          width="100%"
        >
          <Text>Dismiss</Text>
        </Button>
      </Box>
    </React.Fragment>
  );
};
