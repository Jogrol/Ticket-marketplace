import {JsonController, Get, Post, HttpCode, Body} from 'routing-controllers'
import Comment from './entity'

@JsonController()

export default class CommentsController {

    @Get("/comments")
    async allEvents() {
        const comments = await Comment.find();
        return { comments };
    } 
    @Post("/comments")
    @HttpCode(201)
    createTicket(@Body() comment: Comment) {
      console.log(comment)
      return comment.save();
    }  
 }