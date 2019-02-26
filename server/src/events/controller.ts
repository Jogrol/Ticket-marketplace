import {Controller, Get, Post, HttpCode, Body} from 'routing-controllers'
import Event from './entity'
import * as moment from 'moment'

@Controller()
export default class EventsController {

    @Get('/events')
    async allEvents() {
        const events = await Event.find();
        const today = moment().format('L');
        const upCommingEvents = await events.filter(event =>  moment(event.end_date).format('L') > today)
        return { upCommingEvents };

    }
    @Post("/events")
    @HttpCode(201)
    createPage(@Body() event: Event) {
      return event.save();
    }

}