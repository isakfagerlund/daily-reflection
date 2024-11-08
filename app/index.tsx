import { Container } from "@/components/Container";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { AddNewReflection } from "@/components/AddNewReflection";
import { useState } from "react";
import { Reflection } from "@/components/Reflection";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function HomeScreen() {
  const [reflection, setReflection] = useState<string>("Some old reflection");

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
          <Reflection reflection={reflection} />
        </Box>
        <AddNewReflection reflection={reflection} handleSubmit={handleSubmit} />
      </Box>
    </Container>
  );
}
