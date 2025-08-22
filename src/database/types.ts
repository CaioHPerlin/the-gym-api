import { users } from "#src/database/schema.ts";

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
