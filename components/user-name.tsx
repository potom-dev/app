import { api } from "@/convex/_generated/api";
// import { useQuery } from "convex/react";


import { ThemedText } from "./ThemedText";
import { useQuery } from "convex/react";

export default function UserName() {
  const user = useQuery(api.users.user)
  return <ThemedText>Hello {user?.name}</ThemedText>;
}
