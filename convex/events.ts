import { query, mutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";
// import { DURATIONS, WAITING_LIST_STATUS, TICKET_STATUS } from "./constants";
// import { components, internal } from "./_generated/api";
// import { processQueue } from "./waitingList";
// import { MINUTE, RateLimiter } from "@convex-dev/rate-limiter";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("is_cancelled"), undefined))
      .collect();
  },
});