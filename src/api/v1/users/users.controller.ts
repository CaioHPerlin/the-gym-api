import usersService from "#src/api/v1/users/users.service.ts";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

const usersController: FastifyPluginAsyncZod = async (app) => {
    app.get("/", async (_, reply) => {
        const users = await usersService.findAll();

        return reply.status(200).send({ data: users });
    });
};

export default usersController;
