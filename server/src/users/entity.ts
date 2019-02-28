import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsEmail, IsString, MinLength } from "class-validator";
import { Exclude } from "class-transformer";
import Ticket from '../tickets/entity'
import Comment from '../comments/entity'
import * as bcrypt from "bcrypt";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("text", { nullable: false })
  @IsString()
  @MinLength(2)
  userName: string;

  @Column("text", { nullable: false })
  @IsString()
  @IsEmail()
  email: string;

  @Column("text", { nullable: true })
  @IsString()
  @MinLength(8)
  @Exclude({ toPlainOnly: true })
  password: string;
  
  @OneToMany(() => Ticket, (ticket) => ticket.user)
  tickets: Ticket[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10);
    this.password = hash;
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password);
  }
  
}
