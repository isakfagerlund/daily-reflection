import { Container } from "@/components/Container";
import { Reflection } from "@/components/Reflection";
import { FloatingBottomBar } from "@/components/FloatingBottomBar";
import { Box, Text } from "@/components/ui";
import { currentReflectionInput } from "@/atoms/atoms";
import { createReflection } from "@/database/reflections";
import { useAddReflection, useReflections } from "@/features/reflections/queries";
import { FlashList } from "@shopify/flash-list";
import { useAtom } from "jotai";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const { data } = useReflections();
  const addReflectionMutation = useAddReflection();
  const [, setReflection] = useAtom(currentReflectionInput);

  const handleSubmit = (currentReflection: string) => {
    setReflection(currentReflection);
    addReflectionMutation.mutate(createReflection(currentReflection));
  };

  return (
    <Container>
      <Box flex={1} alignItems="center" paddingTop="xl2">
        <Text style={{ color: "white" }} variant="header">
          TODAY
        </Text>
        <Box
          flex={1}
          width="100%"
          gap="xl"
          alignItems="center"
          justifyContent="flex-end"
          marginTop="l"
        >
          <Box
            paddingHorizontal="l"
            flex={1}
            width="100%"
            style={{ ...StyleSheet.absoluteFillObject }}
          >
            <FlashList
              showsVerticalScrollIndicator={false}
              data={data ?? []}
              renderItem={({ item }) => (
                <Reflection
                  reflection={item.reflection}
                  date={item.createdAt}
                />
              )}
              estimatedItemSize={200}
              ItemSeparatorComponent={() => <Box height={20} />}
              contentContainerStyle={{
                paddingBottom: 200,
              }}
            />
          </Box>
          <FloatingBottomBar handleSubmit={handleSubmit} />
        </Box>
      </Box>
    </Container>
  );
}
