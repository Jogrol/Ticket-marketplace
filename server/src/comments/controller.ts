import {JsonController, Authorized, Post, HttpCode, Body} from 'routing-controllers'
import Comment from './entity'
import Ticket from '../tickets/entity'

@JsonController()

export default class CommentsController {
  
    @Authorized()
    @Post("/comments/")
    @HttpCode(201)
    async createTicket(@Body() comment: Comment) {
      await comment.save();
      return Ticket.findOne(comment.ticket)
    } 
 }