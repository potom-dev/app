import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { ThemedText } from "./ThemedText";
console.log(useQuery)
useQuery(api.users.user, {})
export function UserName() {
  console.log('test',useQuery)
  return <ThemedText>Hir</ThemedText>;
}
