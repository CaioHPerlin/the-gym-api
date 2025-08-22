import { UserDto } from "#src/api/v1/users/dto/users.dto.ts";
import usersRepository from "#src/api/v1/users/users.repository.ts";

const usersService = {
    repository: usersRepository,

    async findAll(): Promise<UserDto[]> {
        const result = await usersRepository.findAll();
        return result.map((user) => new UserDto(user));
    },
};

export default usersService;
