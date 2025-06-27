import { Button, ButtonText } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useConvexAuth } from "convex/react";
import { Redirect } from "expo-router";
import React from "react";

/**
 * Displays the onboarding screen for unauthenticated users to create or join a group.
 *
 * If the user is already authenticated, redirects to the home page. Otherwise, presents options to create a group, scan a QR code, or enter a code manually.
 */
export default function AccountInit() {
  const { isAuthenticated } = useConvexAuth();

  function createGroup() {}
  function showQrScanner() {}

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <VStack className="h-full items-center bg-bg justify-end px-8" space="lg">
      <Logo className="pt-10 mb-auto" />
      <VStack className="w-full" space="0">
        <Text className="text-center">
          you need to create
        </Text>
        <Text className="text-center">
          a group or join existing one
        </Text>
      </VStack>
      <VStack className="w-full pb-[19px]" space="sm">
        <Button
          onPress={createGroup}
          action="primary"
        >
          <ButtonText>
            create a group
          </ButtonText>
        </Button>
        <Button
          onPress={showQrScanner}
          action="flat"
        >
          <ButtonText>
            scan qr code
          </ButtonText>
        </Button>
        <Button
          onPress={showQrScanner}
          action="flat"
        >
          <ButtonText>
            type code manually
          </ButtonText>
        </Button>
      </VStack>
    </VStack>
  )
}