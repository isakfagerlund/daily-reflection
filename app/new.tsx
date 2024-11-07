import { Container } from "@/components/Container";
import { createText } from "@shopify/restyle";
import { Theme } from "@/constants/theme";

const Text = createText<Theme>();

export default function NewScreen() {
  return (
    <Container>
      <Text>New screen</Text>
    </Container>
  );
}
