import { Button, ButtonText } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { makeRedirectUri } from "expo-auth-session";
import { Redirect } from "expo-router";
import { openAuthSessionAsync } from "expo-web-browser";
import { Platform, View } from "react-native";

const redirectTo = makeRedirectUri();

export default function Login() {
  const { isAuthenticated } = useConvexAuth();

  const { signIn } = useAuthActions();

  const handleSignIn = async () => {
    const { redirect } = await signIn("github", { redirectTo });
    if (Platform.OS === "web") {
      return;
    }
    const result = await openAuthSessionAsync(redirect!.toString(), redirectTo);
    if (result.type === "success") {
      const { url } = result;
      const code = new URL(url).searchParams.get("code")!;
      await signIn("github", { code });
    }
  };

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <View>
      <Button onPress={handleSignIn}>
        <ButtonText>
          Sign in with GitHub
        </ButtonText>
      </Button>
    </View>
  )
}