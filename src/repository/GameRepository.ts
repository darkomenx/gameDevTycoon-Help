import {EntityRepository, Repository} from "typeorm";
import {Game} from "../entity/Game";

@EntityRepository(Game)
export class GameRepository extends Repository<Game>
{

}
