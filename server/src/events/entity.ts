import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  @Column('text', {nullable:false})
  name: string
  @Column('text', {nullable:false})
  image: string
  @Column('text', {nullable:false})
  description: string
  @Column('text', {nullable:false})
  start_date: Date
  @Column('text', {nullable:false})
  end_date: Date

}