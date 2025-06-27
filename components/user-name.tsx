import { api } from "@/convex/_generated/api";
// import { useQuery } from "convex/react";


import { useQuery } from "convex/react";
import { Text } from "./ui/text";

/**
 * Displays a greeting with the current user's name.
 *
 * Fetches user data and renders "Hello" followed by the user's name if available.
 */
export default function UserName() {
  const user = useQuery(api.users.user)
  return <Text>Hello {user?.name}</Text>;
}
