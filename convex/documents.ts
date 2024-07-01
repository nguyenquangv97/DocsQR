import { ConvexError, convexToJson, v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { Id } from './_generated/dataModel';
export const generateUploadUrl = mutation({
  args: {
    // ...
  },
  handler: async (ctx, args) => {
    // use `args` and/or `ctx.auth` to authorize the user
    // ...

    // Return an upload URL
    return await ctx.storage.generateUploadUrl();
  },
});

export const createDocument = mutation({
  // You can customize these as you like
  args: {
    documentName: v.string(),
    documentTitle: v.string(),
    documentStorageId: v.id('_storage'),
    documentUrl: v.string(),
    // other args...
  },
  handler: async (ctx, args) => {
    // Verify that user is authenticated
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError('unauthorized');
    }

    // get the user
    const user = await ctx.db
      .query('users')
      .filter((q) => q.eq(q.field('email'), identity.email))
      .collect();

    if (user.length === 0) {
      throw new ConvexError('user not found');
    }
    // Save the storageId to the database using `insert`
    await ctx.db.insert('documents', {
      user: user[0]._id,
      documentName: args.documentName,
      documentTitle: args.documentTitle,
      documentStorageId: args.documentStorageId,
      documentUrl: args.documentUrl,
    });
  },
});

export const getDocuments = query({
  handler: async (ctx) => {
    // Verify that user is authenticated
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError('unauthorized');
    }

    // get the user
    const user = await ctx.db
      .query('users')
      .filter((q) => q.eq(q.field('email'), identity.email))
      .collect();

    if (user.length === 0) {
      throw new ConvexError('user not found');
    }

    // Get all documents for the user
    const documents = await ctx.db
      .query('documents')
      .filter((q) => q.eq(q.field('user'), user[0]._id))
      .collect();

    for (let i = 0; i < documents.length; i++) {
      const documentUrl = await ctx.storage.getUrl(
        documents[i].documentStorageId
      );
      if (documentUrl) {
        documents[i] = { ...documents[i], documentUrl };
      }
    }
    return documents;
  },
});

export const getDocumentById = query({
  args: { documentId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError('unauthorized');
    }

    // get the user
    const user = await ctx.db
      .query('users')
      .filter((q) => q.eq(q.field('email'), identity.email))
      .collect();

    if (user.length === 0) {
      throw new ConvexError('user not found');
    }

    const documents = await ctx.db
      .query('documents')
      .filter((q) =>
        q.and(
          q.eq(q.field('_id'), args.documentId),
          q.eq(q.field('user'), user[0]._id)
        )
      )
      .collect();

    if (documents) {
      const documentUrl = await ctx.storage.getUrl(
        documents[0].documentStorageId
      );
      if (documentUrl) {
        documents[0] = { ...documents[0], documentUrl };
      }
    }
    console.log(documents);
    return documents[0];
  },
});
