import {JsonController, Get, Param, Post, HttpCode, Body,} from 'routing-controllers'
import Ticket from './entity'

@JsonController()

export default class TicketsController {

    @Get("/tickets")
    async allEvents() {
        const tickets = await Ticket.find();
        return { tickets };
    }
    
    @Get("/ticket/:id")
    getTicket(@Param("id") id: number) {
      return Ticket.findOne(id);
    }

    @Post("/tickets")
    @HttpCode(201)
    createTicket(@Body() ticket: Ticket) {
      console.log(ticket)
      return ticket.save();
    }
 }