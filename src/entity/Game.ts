import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column({length: 100})
    identifier: string;

    @Column()
    public: number;

    @Column()
    platform: number;

    @Column()
    genre: number;

    @Column()
    theme: number;
}

