import { api } from "@/convex/_generated/api";
// import { useQuery } from "convex/react";


import { useQuery } from "convex/react";
import { Text } from "./ui/text";

export default function UserName() {
  const user = useQuery(api.users.user)
  return <Text>Hello {user?.name}</Text>;
}
