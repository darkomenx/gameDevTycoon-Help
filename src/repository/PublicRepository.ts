import {EntityRepository, Repository} from "typeorm";
import {Public} from "../entity/Public";

@EntityRepository(Public)
export class PublicRepository extends Repository<Public>
{

}
