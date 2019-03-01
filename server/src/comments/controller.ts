import {JsonController, Authorized, Get, Post, HttpCode, Body, Param} from 'routing-controllers'
import Comment from './entity'
import Ticket from '../tickets/entity'

@JsonController()

export default class CommentsController {

  
    @Get("/comments")
    async allEvents() {
        const comments = await Comment.find();
        return { comments };
    } 

    @Get('/comments/:id')
    getCommentbyId(@Param('id') id: number) {
      return Comment.find({ where: {ticket : id}});
    }
    
    @Authorized()
    @Post("/comments/")
    @HttpCode(201)
    async createTicket(@Body() comment: Comment) {
      await comment.save();
      return Ticket.findOne(comment.ticket)
    } 
 }