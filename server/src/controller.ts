import {Controller, Get, HttpCode, Body, Post} from 'routing-controllers'
import Event from './events/entity'

@Controller()
export default class MainController {

    @Get('/events')
    async allEvents() {
        const events = await Event.find();
        return { events };
    }
    @Post("/events")
    @HttpCode(201)
    createPage(@Body() event: Event) {
      return event.save();
    }

}