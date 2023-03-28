import { hashSync } from "bcryptjs";
import {
    BeforeInsert, BeforeUpdate, Column,
    CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import Users from "./users.entity";

@Entity("contact")
class Contacts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 11 })
    telephone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;

    @ManyToOne(() => Users, (user) => user.contacts)
  user: Users;

};

export default Contacts;