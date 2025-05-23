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

  groups: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    createdBy: v.id("users"),
    createdAt: v.number(),
    totalBalance: v.number(),
    lastActivityAt: v.number(),
  }).index("by_created_by", ["createdBy"])
    .index("by_last_activity", ["lastActivityAt"]),

  groupMembers: defineTable({
    groupId: v.id("groups"),
    userId: v.id("users"),
    role: v.union(v.literal("admin"), v.literal("member")),
    joinedAt: v.number(),
    balance: v.number(),
  }).index("by_group", ["groupId"])
    .index("by_user", ["userId"])
    .index("by_group_and_user", ["groupId", "userId"]),

  expenses: defineTable({
    groupId: v.id("groups"),
    title: v.string(),
    description: v.optional(v.string()),
    totalAmount: v.number(),
    currency: v.string(),
    paidBy: v.id("users"),
    createdAt: v.number(),
    status: v.union(v.literal("pending"), v.literal("settled")),
    settledAt: v.optional(v.number()),
    splitType: v.union(v.literal("equal"), v.literal("exact"), v.literal("percentage")),
    // Simplified receipt handling
    receiptUrl: v.optional(v.string()), // UploadThing URL
    receiptStatus: v.union(
      v.literal("pending"),
      v.literal("processed"),
      v.literal("failed")
    ),
    // Tax and fees - only storing rates
    taxRate: v.optional(v.number()), // e.g., 0.15 for 15%
    serviceFee: v.optional(v.number()), // e.g., 0.10 for 10%
  }).index("by_group", ["groupId"])
    .index("by_paid_by", ["paidBy"])
    .index("by_group_and_status", ["groupId", "status"])
    .index("by_created_at", ["createdAt"]),

  expenseItems: defineTable({
    expenseId: v.id("expenses"),
    userId: v.id("users"),
    amount: v.number(),
    description: v.optional(v.string()),
    status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),
    createdAt: v.number(),
    settledAt: v.optional(v.number()),
    // Tax and fees - only storing rates
    taxRate: v.optional(v.number()),
    serviceFee: v.optional(v.number()),
  }).index("by_expense", ["expenseId"])
    .index("by_user", ["userId"])
    .index("by_expense_and_user", ["expenseId", "userId"])
    .index("by_status", ["status"]),

  receiptItems: defineTable({
    expenseId: v.id("expenses"),
    name: v.string(),
    amount: v.number(),
    quantity: v.number(),
    assignedTo: v.optional(v.id("users")),
    category: v.optional(v.string()),
    isSelected: v.boolean(),
    // Tax and fees - only storing rates
    taxRate: v.optional(v.number()),
    serviceFee: v.optional(v.number()),
  }).index("by_expense", ["expenseId"])
    .index("by_assigned_to", ["assignedTo"])
    .index("by_category", ["category"]),

  // New table for handling file uploads
  uploads: defineTable({
    expenseId: v.id("expenses"),
    fileKey: v.string(), // UploadThing file key
    fileName: v.string(),
    fileSize: v.number(),
    fileType: v.string(),
    uploadUrl: v.string(), // UploadThing URL
    status: v.union(
      v.literal("pending"),
      v.literal("processing"),
      v.literal("completed"),
      v.literal("failed")
    ),
    processingError: v.optional(v.string()),
    metadata: v.optional(v.object({
      width: v.optional(v.number()),
      height: v.optional(v.number()),
      mimeType: v.optional(v.string()),
      uploadedAt: v.number(),
    })),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_expense", ["expenseId"])
    .index("by_status", ["status"])
    .index("by_file_key", ["fileKey"]),
});

export default schema;