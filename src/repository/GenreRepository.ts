import {EntityRepository, Repository} from "typeorm";
import {Genre} from "../entity/Genre";

@EntityRepository(Genre)
export class GenreRepository extends Repository<Genre>
{

}
