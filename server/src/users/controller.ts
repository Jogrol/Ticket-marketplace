import {JsonController, Get,Body,Post} from "routing-controllers";
import User from "./entity";

@JsonController()

export default class UserController {
    @Get("/users")
    async allUsers() {
        const users = await User.find()
        return {users}
    }

    @Post('/users')
      async createUser(
        @Body() user: User
      ) {
        const {password, ...rest} = user
        const entity = User.create(rest)
        await entity.setPassword(password)
        console.log(user)
        return entity.save()
      }
}