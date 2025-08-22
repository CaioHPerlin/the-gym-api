import usersController from "#src/api/v1/users/users.controller.ts";
import type { FastifyPluginAsync } from "fastify";

const v1Routes: FastifyPluginAsync = async (app) => {
    app.register(usersController, { prefix: "/users" });
};

export default v1Routes;
