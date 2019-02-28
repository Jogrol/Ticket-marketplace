import { IsString } from 'class-validator'
import { JsonController, Post, Body, BadRequestError } from 'routing-controllers'
import { sign } from '../jwt'
import User from '../users/entity'

class AuthenticatePayload {
  @IsString()
  userName: string

  @IsString()
  password: string
}

@JsonController()
export default class LoginController {

  @Post('/logins')
  async authenticate(
    @Body() { userName, password }: AuthenticatePayload
  ) {
    const user = await User.findOne({ where: { userName } })
    if (!user || !user.id) throw new BadRequestError('User does not exist')

    if (!await user.checkPassword(password)) throw new BadRequestError('The password is not correct')

    const jwt = sign({ id: user.id })
    return { user , jwt }
  }
}