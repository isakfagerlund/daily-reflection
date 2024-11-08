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

export const AddNewReflection = ({
  handleSubmit,
  reflection,
}: {
  handleSubmit: (currentReflection: string) => void;
  reflection: string;
}) => {
  const sheet = useRef<TrueSheet>(null);
  const [currentReflection, setCurrentReflection] = useState(reflection);

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

  return (
    <React.Fragment>
      <Button
        onPress={present}
        borderRadius={12}
        padding="s"
        alignItems="center"
        width={50}
        height={50}
        backgroundColor="secondaryColor"
        justifyContent="center"
      >
        <PlusIcon />
      </Button>

      <TrueSheet
        blurTint="prominent"
        ref={sheet}
        sizes={["auto", "large"]}
        cornerRadius={24}
      >
        <Box paddingVertical="xl" padding="xl" gap="m">
          <TextInput
            onChangeText={(text) => setCurrentReflection(text)}
            borderRadius={8}
            borderWidth={2}
            width="100%"
            padding="s"
            multiline={true}
            value={currentReflection}
          />
          <Button
            onPress={() => {
              handleSubmit(currentReflection);
              dismiss();
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
