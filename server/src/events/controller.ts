import {Authorized, Controller, Get, Post, HttpCode, Body, Param} from 'routing-controllers'
import Event from './entity'
// import * as moment from 'moment'
import {MoreThanOrEqual} from "typeorm"

@Controller()
export default class EventsController {
  
  
  @Get('/events')
  async allEvents() {
    const today = new Date()
    const events = await Event.find({where: {end_date: MoreThanOrEqual(today)}, order: {
      start_date: "ASC",
  }})
    return {events}
  }

    @Authorized()
    @Post("/events")
    @HttpCode(201)
    createPage(@Body() event: Event) {
      return event.save();
    }

    @Get('/event/:id')
    getEventbyId(@Param('id') id: number) {
      return Event.findOne(id);
    }
    }