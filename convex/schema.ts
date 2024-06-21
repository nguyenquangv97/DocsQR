import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  documents: defineTable({
    documentTitle: v.string(),
    user: v.id('users'),
    documentStorageId: v.id('_storage'),
    documentUrl: v.string(),

    // TODO : add QR Code functionality
    // QRCodeStorageId: v.id('_storage'),
    // QRCodeUrl: v.string(),

    // TODO : add subscription functionality
    // subscriptionId: v.optional(v.string()),
    // endsOn: v.optional(v.number()),
    // credits: v.number(),
  }).searchIndex('by_document_title', { searchField: 'documentTitle' }),

  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  }),
  // .index("by_subscriptionId", ["subscriptionId"]),
});
