import {Controller, Get, HttpCode, Body, Post} from 'routing-controllers'
import Event from './entity'
import * as moment from 'moment'

@Controller()
export default class MainController {

    @Get('/events')
    async allEvents() {
        const events = await Event.find();
        const today = moment().format('L');
        const filteredEvents = await events.filter(event =>  moment(event.end_date).format('L') > today)
        console.log(filteredEvents)
        return { filteredEvents };

    }
    @Post("/events")
    @HttpCode(201)
    createPage(@Body() event: Event) {
      return event.save();
    }

}