import { Theme } from "@/constants/theme";
import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { createBox } from "@shopify/restyle";
import { PlusIcon } from "lucide-react-native";
import React from "react";
import { useRef } from "react";
import { TouchableOpacity as RNButton } from "react-native";
import { NewReflectionContent } from "./NewReflectionContent";

const Button = createBox<Theme, React.ComponentProps<typeof RNButton>>(
  RNButton,
);

export const AddNewReflection = ({
  handleSubmit,
}: {
  handleSubmit: (currentReflection: string) => void;
}) => {
  const sheet = useRef<TrueSheet>(null);

  const present = async () => {
    await sheet.current?.present();
  };

  const dismiss = async () => {
    await sheet.current?.dismiss();
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
        <NewReflectionContent
          handleSubmit={(text: string) => {
            handleSubmit(text);
            dismiss();
          }}
        />
      </TrueSheet>
    </React.Fragment>
  );
};
