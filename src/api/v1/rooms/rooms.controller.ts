import { createRoomDtoSchema } from "#src/api/v1/rooms/dto/create-room.dto.ts";
import roomsService from "#src/api/v1/rooms/rooms.service.ts";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

const roomsController: FastifyPluginAsyncZod = async (app) => {
    app.post("/", { schema: { body: createRoomDtoSchema } }, async (request, reply) => {
        const room = await roomsService.create(request.body);
        return reply.status(201).send({ data: room });
    });

    app.get("/", async (_, reply) => {
        const rooms = await roomsService.findAll();
        return reply.status(200).send({ data: rooms });
    });
};

export default roomsController;
