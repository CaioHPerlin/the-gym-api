import db from "#src/database/client.ts";
import { rooms } from "#src/database/schema.ts";
import type { InsertRoom, Room } from "#src/database/types.ts";

const roomsRepository = {
    async create(room: InsertRoom): Promise<Room> {
        const { title, ownerId } = room;
        const result = await db.insert(rooms).values({ title, ownerId }).returning();
        return result[0];
    },

    async findAll() {
        return db.select().from(rooms);
    },
};

export default roomsRepository;

