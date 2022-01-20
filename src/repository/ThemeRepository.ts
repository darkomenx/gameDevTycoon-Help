import {EntityRepository, Repository} from "typeorm";
import {Theme} from "../entity/Theme";

@EntityRepository(Theme)
export class ThemeRepository extends Repository<Theme>
{

}
