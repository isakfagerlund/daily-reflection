import { Theme } from "@/constants/theme";
import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { createBox, createText } from "@shopify/restyle";
import { PlusIcon } from "lucide-react-native";
import React from "react";
import { useRef, useState } from "react";
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

export const AddNewReflection = () => {
  const sheet = useRef<TrueSheet>(null);

  const [currentReflection, setCurrentReflection] = useState("");
  const [reflections, setReflections] = useState<string[]>([
    "Some old reflection",
  ]);

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present();
    console.log("horray! sheet has been presented 💩");
  };

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss();
    console.log("Bye bye 👋");
  };

  const handleSubmit = () => {
    let tempCurrentReflections = reflections;
    tempCurrentReflections.push(currentReflection);
    setReflections(tempCurrentReflections);
    setCurrentReflection("");
    dismiss();
  };

  return (
    <React.Fragment>
      <Box
        minHeight={200}
        alignItems="center"
        borderRadius={8}
        borderWidth={2}
        width="100%"
        padding="s"
      >
        {reflections.map((r, i) => (
          <Text key={r} fontSize={12}>
            {i + 1}: {r}
          </Text>
        ))}
      </Box>
      <Button
        onPress={present}
        borderWidth={2}
        borderRadius={8}
        padding="s"
        alignItems="center"
      >
        <PlusIcon />
      </Button>

      <TrueSheet ref={sheet} sizes={["auto", "large"]} cornerRadius={24}>
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
            onPress={handleSubmit}
            borderWidth={2}
            borderRadius={100}
            padding="s"
            alignItems="center"
            width="100%"
          >
            <Text>Submit</Text>
          </Button>
          <Button
            onPress={dismiss}
            borderWidth={2}
            borderRadius={8}
            padding="s"
            alignItems="center"
            width="100%"
          >
            <Text>Dismiss</Text>
          </Button>
        </Box>
      </TrueSheet>
    </React.Fragment>
  );
};
