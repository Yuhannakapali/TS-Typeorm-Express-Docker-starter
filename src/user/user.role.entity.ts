import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export default class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true, nullable: true })
    label: string;

    @Column({ type: 'timestamptz' })
    createdAt: Date;

    @Column({ type: 'timestamptz' })
    updatedAt: Date;

}