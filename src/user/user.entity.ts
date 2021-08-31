import bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({
        nullable: true
    })
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column({
        nullable: true
    })
    taxCode: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column({
        unique: true,
    })
    phone: string;

    @Column({ nullable: true })
    twitter: number;

    @Column({ nullable: true })
    facebook: number;

    @Column({ nullable: true })
    apple: number;

    @Column({
        nullable: true,
    })
    roleId: number;


    @Column({ nullable: true })
    usefulNumberId: number;

    @Column({ type: 'timestamptz' })
    createdAt: Date;

    @Column({ type: 'timestamptz' })
    updatedAt: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfPasswordMatch(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

    setCreated() {
        this.createdAt = new Date();
    }

    setUpdated() {
        this.updatedAt = new Date();
    }

}