import {
  TextInput as RNTextInput,
  TouchableOpacity as RNButton,
} from "react-native";
import { Container } from "@/components/Container";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { useState } from "react";
import { Link } from "expo-router";

const Box = createBox<Theme>();
const Text = createText<Theme>();
const TextInput = createBox<Theme, React.ComponentProps<typeof RNTextInput>>(
  RNTextInput,
);
const Button = createBox<Theme, React.ComponentProps<typeof RNButton>>(
  RNButton,
);

export default function HomeScreen() {
  const [currentReflection, setCurrentReflection] = useState("");
  const [reflections, setReflections] = useState<string[]>([
    "Some old reflection",
  ]);

  const handleSubmit = () => {
    let tempCurrentReflections = reflections;
    tempCurrentReflections.push(currentReflection);
    setReflections(tempCurrentReflections);
    setCurrentReflection("");
  };

  return (
    <Container>
      <Box flex={1} alignItems="center" justifyContent="center" gap="m">
        <Text>Main screen</Text>
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
          borderRadius={8}
          padding="s"
          alignItems="center"
          width="100%"
        >
          <Text>Submit</Text>
        </Button>
        <Link href={{ pathname: "./new" }}>Go to New Page</Link>
      </Box>
    </Container>
  );
}
