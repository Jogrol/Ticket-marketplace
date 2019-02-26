import {Controller, Get, Post, HttpCode, Body, Param} from 'routing-controllers'
import Ticket from './entity'

@Controller()
export default class TicketsController {

    @Get('/tickets')
    async allEvents() {
        const tickets = await Ticket.find();
        return { tickets };

    }
    
    @Get("/ticket/:id")
    getAd(@Param("id") id: number) {
      return Ticket.findOne(id);
    }

    @Post("/ticket")
    @HttpCode(201)
    createPage(@Body() ticket: Ticket) {
      return ticket.save();
    }

}