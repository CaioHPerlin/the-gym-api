import type { Room } from "#src/database/types.ts";
import type { CreateRoomDto } from "./dto/create-room.dto.ts";
import roomsRepository from "./rooms.repository.ts";

const roomsService = {
    async create(room: CreateRoomDto): Promise<Room> {
        return roomsRepository.create({
            title: room.title,
            ownerId: room.ownerId,
        });
    },

    async findAll(): Promise<Room[]> {
        return roomsRepository.findAll();
    },
};

export default roomsService;
