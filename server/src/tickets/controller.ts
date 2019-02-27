import { Get, Param, Post, HttpCode, Body,} from 'routing-controllers'
import Ticket from './entity'



export default class TicketsController {

    @Get('/tickets')
    async allEvents() {
        const tickets = await Ticket.find();
        return { tickets };

    }
    
    @Get("/ticket/:id")
    getTicketByEvent(@Param("id") id: number) {
      console.log(id)
      return Ticket.findOne(id);
    }

    @Post("/ticket")
    @HttpCode(201)
    createTicket(@Body() ticket: Ticket) { 
      console.log(ticket.event)
      return ticket.save();
    }



    // @Post('/ticket')
    // @HttpCode(201)
    // async createTicket(
    //   @CurrentUser() user: User, event: Event
    // ) {
    //   console.log('User', user)
    //   console.log('Event', event)
    //   // const entity = await Ticket.create().save()
  
    //   return Ticket.create({
    //     user,
    //     event
    //   }).save()


  }