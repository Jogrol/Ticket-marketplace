import {JsonController, Get, Param, Post, HttpCode, Body,Put, NotFoundError} from 'routing-controllers'
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

    @Put("/tickets/:id")
    async updateTicket(@Param("id") id: number, @Body() update: Partial<Ticket>) {
    const ticket = await Ticket.findOne(id);
    if (!ticket) throw new NotFoundError("Cannot find ticket");
    return Ticket.merge(ticket, update).save();
  }

    @Post("/tickets")
    @HttpCode(201)
    createTicket(@Body() ticket: Ticket) {
      return ticket.save();
    }
    
 }