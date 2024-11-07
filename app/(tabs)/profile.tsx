import { createText } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { Container } from "@/components/Container";

const Text = createText<Theme>();

export default function ProfileScreen() {
  return (
    <Container>
      <Text variant="header">Profile Page</Text>
    </Container>
  );
}
