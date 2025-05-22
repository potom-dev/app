import { ConvexReactClient } from "convex/react";

const CONVEX_URL = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!CONVEX_URL) {
  throw new Error("Missing Convex URL");
}

export const convex = new ConvexReactClient(CONVEX_URL, {
  unsavedChangesWarning: false
});

