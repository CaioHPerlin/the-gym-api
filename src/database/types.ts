import { rooms, roomUsers, users } from "#src/database/schema.ts";

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type Room = typeof rooms.$inferSelect;
export type InsertRoom = typeof rooms.$inferInsert;
