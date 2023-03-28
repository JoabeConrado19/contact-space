import { hashSync } from "bcryptjs";
import {
    BeforeInsert, BeforeUpdate, Column,
    CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import Contacts from "./contacts.entity";

@Entity("user")
class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ length: 11 })
    telephone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;
    searchUserById: Contacts;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    };

    @OneToMany(() => Contacts, (contact) => contact.user)
  contacts: Contacts[];
};

export default Users;