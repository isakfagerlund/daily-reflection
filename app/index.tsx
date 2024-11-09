import { Container } from "@/components/Container";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/constants/theme";
import { Reflection } from "@/components/Reflection";
import { useAtom } from "jotai";
import { currentReflectionInput } from "@/atoms/atoms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addReflection, getReflections } from "@/database/reflections";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet } from "react-native";
import { easeGradient } from "react-native-easing-gradient";
import { FloatingBottomBar } from "@/components/FloatingBottomBar";
import { BlurView } from "expo-blur";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function HomeScreen() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["reflections"],
    queryFn: getReflections,
  });
  const { mutate } = useMutation({
    mutationFn: addReflection,
    onSuccess: () => queryClient.fetchQuery({ queryKey: ["reflections"] }),
  });
  const [, setReflection] = useAtom(currentReflectionInput);

  const handleSubmit = (currentReflection: string) => {
    setReflection(currentReflection);
    mutate({
      id: new Date().getTime(),
      createdAt: new Date(),
      updatedAt: new Date(),
      reflection: currentReflection,
    });
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
              data={data?.sort(
                (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
              )}
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
