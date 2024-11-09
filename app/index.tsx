import { Container } from "@/components/Container";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { AddNewReflection } from "@/components/AddNewReflection";
import { Reflection } from "@/components/Reflection";
import { useAtom } from "jotai";
import { currentReflectionInput } from "@/atoms/atoms";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function HomeScreen() {
  const [, setReflection] = useAtom(currentReflectionInput);

  const handleSubmit = (currentReflection: string) => {
    setReflection(currentReflection);
  };

  return (
    <Container>
      <Box flex={1} alignItems="center" justifyContent="space-between" gap="m">
        <Box flex={1} width="100%" gap="xl" alignItems="center" marginTop="xl2">
          <Text style={{ color: "white" }} variant="header">
            TODAY
          </Text>
          <Reflection />
        </Box>
        <AddNewReflection handleSubmit={handleSubmit} />
      </Box>
    </Container>
  );
}
