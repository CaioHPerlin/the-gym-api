import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import logger from "./config/logger.ts";
import v1Routes from "#src/api/v1/index.ts";

export default async function buildApp(): Promise<fastify.FastifyInstance> {
    const app = fastify({ logger });

    app.setValidatorCompiler(validatorCompiler);
    app.setSerializerCompiler(serializerCompiler);

    app.register(v1Routes, { prefix: "/api/v1" });

    return app;
}
