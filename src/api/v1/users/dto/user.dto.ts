import type { User } from "#src/database/types.ts";

export class UserDto {
    id: string;
    email: string;
    username: string;

    constructor(user: User) {
        const { id, email, username } = user;
        this.id = id;
        this.email = email;
        this.username = username;
    }
}
