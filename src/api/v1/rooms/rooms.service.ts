import type { InsertRoom, Room } from "#src/database/types.ts";
import roomsRepository from "./rooms.repository.ts";

const roomsService = {
    async create(room: InsertRoom): Promise<Room> {
        return roomsRepository.create(room);
    }
}

export default roomsService;