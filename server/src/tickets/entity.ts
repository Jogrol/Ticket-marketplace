import { Entity, PrimaryGeneratedColumn, Column , ManyToOne} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Event from '../events/entity'
import User from '../users/entity'

@Entity()
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  @Column('text', {nullable:false})
  name: string
  @Column('text', {nullable:false})
  image: string
  @Column('text', {nullable:false})
  description: string
  @Column('text', {nullable:false})
  price: number
  @ManyToOne(() => Event, (event) => event.tickets,{ nullable: false })
  event: Event
  @ManyToOne(() => User, (user) => user.tickets, { nullable: false })
  user: User
}