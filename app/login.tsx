import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { makeRedirectUri } from "expo-auth-session";
import { Redirect, router } from "expo-router";
import { openAuthSessionAsync } from "expo-web-browser";
import { Platform } from "react-native";

const redirectTo = makeRedirectUri();

/**
 * Renders the login screen, allowing users to authenticate via GitHub OAuth or email and password.
 *
 * Redirects authenticated users to the home page. Presents branding, two sign-in options, and a terms of service notice for unauthenticated users.
 */
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

  const handleSignInPassword = async () => {
    router.push("/account-init");
  };

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <VStack className="h-full items-center bg-bg justify-end px-8" space="lg">
      <Logo className="pt-10 mb-auto" />
      <VStack className="w-full" space="0">
        <Heading className="text-center">
          forget the friction
        </Heading>
        <Heading className="text-center">
          remember connections
        </Heading>
      </VStack>
      <VStack className="w-full" space="sm">
        <Button
          full
          onPress={handleSignIn}
          action="flat"
          size='md'
          variant="solid"
        >
          <ButtonText>
            use google
          </ButtonText>
        </Button>
        <Button
          full
          onPress={handleSignInPassword}
          action="flat"
          size='md'
          variant="solid"
        >
          <ButtonText>
            use email and password
          </ButtonText>
        </Button>
      </VStack>
      <Text className="text-center" size="sm">
        by using <Text size="sm" bold>potom</Text>, you agree to accept our <Text size="sm" bold>terms of service</Text> and <Text size="sm" bold>privacy policy</Text>
      </Text>
    </VStack>
  )
}