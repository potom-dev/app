import { useConvexAuth } from "convex/react";
import { Redirect, Stack } from "expo-router";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(test)" options={{ headerShown: false }} />
    </Stack>
  );
}