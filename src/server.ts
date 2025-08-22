import buildApp from "#src/app.ts";
import env from "#src/config/env.ts";

async function bootstrap() {
    const app = await buildApp();

    try {
        app.listen({ port: env.PORT });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

bootstrap();
