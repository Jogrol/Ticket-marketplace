import {JsonController,  Authorized, Get, Param, Post, HttpCode, Body,Put, NotFoundError} from 'routing-controllers'
import Ticket from './entity'

@JsonController()

export default class TicketsController {

    @Get("/tickets")
    async allEvents() {
        const tickets = await Ticket.find();
        return { tickets };
    }
    
    @Get("/tickets/:id")
    getTicket(@Param("id") id: number) {
      return Ticket.findOne(id);
    }

    // @Get('/tickets/:id')
    // getCommentbyId(@Param('id') id: number) {
    //   return Comment.find({ where: {ticket : id}});
    // }
    
    
    @Authorized()
    @Put("/tickets/:id")
    async updateTicket(@Param("id") id: number, @Body() update: Partial<Ticket>) {
    const ticket = await Ticket.findOne(id);
    if (!ticket) throw new NotFoundError("Cannot find ticket");
    return Ticket.merge(ticket, update).save();
    }

    @Authorized()
    @Post("/tickets")
    @HttpCode(201)
    async createTicket(@Body() ticket: Ticket) {
      await ticket.save();
      const tickets = await Ticket.find();
      return { tickets };
    }
    
 }