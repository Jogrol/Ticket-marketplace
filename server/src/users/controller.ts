import {JsonController, Get,Put,Body,Param,NotFoundError,Post, HttpCode} from "routing-controllers";
import User from "./entity";

@JsonController()

export default class UserController {
    @Get("/users")
    async allUsers() {
        const users = await User.find()
        return {users}
    }

    @Get("/users/:id")
    getUser(@Param("id") id: number) {
        return User.findOne(id);
      }

    @Put("/user/:id")
      async updateUser(@Param("id") id: number, @Body() update: Partial<User>) {
        const user = await User.findOne(id);
        if (!user) throw new NotFoundError("Cannot find page");
    
        return User.merge(user, update).save();
      }

      @Post("/users")
      @HttpCode(201)
      createPage(@Body() User: User) {
        return User.save();
      }

  


}