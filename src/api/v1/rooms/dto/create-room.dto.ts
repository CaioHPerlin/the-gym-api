import { z } from "zod";

export const createRoomDtoSchema = z.object({
    title: z.string().min(4),
    ownerId: z.uuid().min(1),
});

export type CreateRoomDto = z.infer<typeof createRoomDtoSchema>;