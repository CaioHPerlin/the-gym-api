import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    email: text().notNull().unique(),
    username: text().notNull().unique(),
    password: text().notNull(),
});

export const rooms = pgTable("rooms", {
    id: uuid().primaryKey().defaultRandom(),

    ownerId: uuid()
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
});

export const roomUsers = pgTable("room_users", {
    userId: uuid()
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    roomId: uuid()
        .notNull()
        .references(() => rooms.id, { onDelete: "cascade" }),
});

export const usersRelations = relations(users, ({ many }) => ({
    ownedRooms: many(rooms),
    memberRooms: many(roomUsers),
}));

export const roomsRelations = relations(rooms, ({ one, many }) => ({
    owner: one(users, {
        fields: [rooms.ownerId],
        references: [users.id],
    }),
    members: many(roomUsers),
}));

export const roomUsersRelations = relations(roomUsers, ({ one }) => ({
    user: one(users, {
        fields: [roomUsers.userId],
        references: [users.id],
    }),
    room: one(rooms, {
        fields: [roomUsers.roomId],
        references: [rooms.id],
    }),
}));
