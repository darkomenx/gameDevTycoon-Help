import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Theme {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column({length: 100})
    identifier: string;

    @Column({length: 100})
    logo: string;

    @Column()
    isActivate: boolean
}
