import { useAuthActions } from "@convex-dev/auth/react";
import { makeRedirectUri } from "expo-auth-session";
import { openAuthSessionAsync } from "expo-web-browser";
import { Button, Platform } from "react-native";

const redirectTo = makeRedirectUri();

export function SignIn() {
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

  return <Button onPress={handleSignIn} title="Sign in with GitHub" />;
}