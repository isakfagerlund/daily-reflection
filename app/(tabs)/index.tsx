import { Container } from "@/components/Container";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { AddNewReflection } from "@/components/AddNewReflection";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function HomeScreen() {
  return (
    <Container>
      <Box flex={1} alignItems="center" justifyContent="center" gap="m">
        <Text>Main screen</Text>
        <AddNewReflection />
      </Box>
    </Container>
  );
}
