import { Container } from "@/components/Container";
import { Reflection } from "@/components/Reflection";
import { FloatingBottomBar } from "@/components/FloatingBottomBar";
import { Box, Text } from "@/components/ui";
import { createReflection, type Reflection as ReflectionModel } from "@/database/reflections";
import { useAddReflection, useReflections } from "@/features/reflections/queries";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { FlatList, Platform, StyleSheet } from "react-native";

export default function HomeScreen() {
  const { data } = useReflections();
  const addReflectionMutation = useAddReflection();
  const [currentReflection, setCurrentReflection] = useState("");
  const reflections = data ?? [];

  const handleSubmit = (currentReflection: string) => {
    addReflectionMutation.mutate(createReflection(currentReflection), {
      onSuccess: () => {
        setCurrentReflection((value) =>
          value === currentReflection ? "" : value,
        );
      },
    });
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
