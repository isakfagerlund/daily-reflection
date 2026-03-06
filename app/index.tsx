import { Container } from "@/components/Container";
import { Reflection } from "@/components/Reflection";
import { FloatingBottomBar } from "@/components/FloatingBottomBar";
import { Box, Text } from "@/components/ui";
import { createReflection, type Reflection as ReflectionModel } from "@/database/reflections";
import { useAddReflection, useReflections } from "@/features/reflections/queries";
import { debugLog } from "@/lib/debugLog";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { FlatList, Platform, StyleSheet } from "react-native";

export default function HomeScreen() {
  const { data, status, error } = useReflections();
  const addReflectionMutation = useAddReflection();
  const [currentReflection, setCurrentReflection] = useState("");
  const reflections = data ?? [];

  // #region agent log
  debugLog({
    hypothesisId: "A",
    location: "app/index.tsx:18",
    message: "HomeScreen render state",
    data: {
      platform: Platform.OS,
      status,
      dataLength: reflections.length,
      hasError: Boolean(error),
      firstId: reflections[0]?.id ?? null,
    },
  });
  // #endregion

  const handleSubmit = (currentReflection: string) => {
    // #region agent log
    debugLog({
      hypothesisId: "D",
      location: "app/index.tsx:32",
      message: "HomeScreen handleSubmit invoked",
      data: {
        platform: Platform.OS,
        textLength: currentReflection.length,
        mutationPending: addReflectionMutation.isPending,
      },
    });
    // #endregion
    setCurrentReflection(currentReflection);
    addReflectionMutation.mutate(createReflection(currentReflection));
  };

  const renderItem = ({ item }: { item: ReflectionModel }) => (
    <Reflection reflection={item.reflection} date={item.createdAt} />
  );

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
            {Platform.OS === "web" ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={reflections}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <Box height={20} />}
                contentContainerStyle={{
                  paddingBottom: 200,
                }}
              />
            ) : (
              <FlashList
                showsVerticalScrollIndicator={false}
                data={reflections}
                renderItem={renderItem}
                estimatedItemSize={200}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <Box height={20} />}
                contentContainerStyle={{
                  paddingBottom: 200,
                }}
              />
            )}
          </Box>
          <FloatingBottomBar
            currentReflection={currentReflection}
            handleSubmit={handleSubmit}
            setCurrentReflection={setCurrentReflection}
          />
        </Box>
      </Box>
    </Container>
  );
}
