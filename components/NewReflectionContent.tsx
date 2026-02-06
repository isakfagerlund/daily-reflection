import { Box, Text } from "@/components/ui";
import { Theme } from "@/constants/theme";
import { createBox } from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  TouchableOpacity as RNButton,
} from "react-native";
import { useAtom } from "jotai";
import { currentReflectionInput } from "@/atoms/atoms";

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
  const [currentReflection, setCurrentReflection] = useAtom(
    currentReflectionInput,
  );

  return (
    <Box paddingVertical="xl" padding="xl" gap="m">
      <TextInput
        onChangeText={(text) => setCurrentReflection(text)}
        borderRadius={8}
        borderWidth={2}
        width="100%"
        padding="s"
        multiline={true}
        blurOnSubmit={false}
        submitBehavior="newline"
        value={currentReflection}
        textAlignVertical="top"
        height={150}
      />
      <Button
        onPress={() => {
          handleSubmit(currentReflection);
          setCurrentReflection("");
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
