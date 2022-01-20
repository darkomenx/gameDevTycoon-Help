import {EntityRepository, Repository} from "typeorm";
import {Platform} from "../entity/Platform";

@EntityRepository(Platform)
export class PlatformRepository extends Repository<Platform>
{

}
