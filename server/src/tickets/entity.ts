import { Entity, PrimaryGeneratedColumn, Column , ManyToOne, OneToMany, Timestamp} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Event from '../events/entity'
import User from '../users/entity'
import Comment from '../comments/entity'

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
  @Column('decimal', {nullable:false})
  price: number
  @Column({ type: 'time with time zone', default: () => 'CURRENT_TIMESTAMP'})
  created_on: Timestamp
  @ManyToOne(() => Event, (event) => event.tickets,{eager: true})
  event: Event
  @ManyToOne(() => User, (user) => user.tickets, {eager: true})
  user: User
  @OneToMany(() => Comment, (comment) => comment.ticket, {eager: true})
  comments: Comment[];
}