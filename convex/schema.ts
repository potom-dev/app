import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.union(v.string(), v.null()),
    email: v.union(v.string(), v.null()),
    image: v.union(v.string(), v.null()),
    emailVerificationTime: v.optional(v.number()),
    githubId: v.string(),
  }).index("email", ["email"]).index("githubId", ["githubId"]),
  // Your other tables...
});

export default schema;