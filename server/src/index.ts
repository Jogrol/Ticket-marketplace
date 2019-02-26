import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import EventsController from "./events/controller"
import UsersController from "./users/controller"
import LoginsController from './logins/controller'
import setupDb from './db'

const port = process.env.PORT || 4000

const app = createKoaServer({
   cors: true,
   controllers: [EventsController, UsersController, LoginsController]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))