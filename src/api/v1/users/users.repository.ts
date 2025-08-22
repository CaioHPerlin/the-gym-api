import db from "#src/database/client.ts";
import { users } from "#src/database/schema.ts";

const usersRepository = {
    async findAll() {
        return db.select().from(users);
    },
};

export default usersRepository;
