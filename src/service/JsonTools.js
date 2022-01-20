import * as fs from 'fs'
import * as typeorm from 'typeorm'
import {Public} from './../entity/Public'

export default class jsonTools
{
  getObjectsToJson (jsonPath)
  {
    let file = fs.readFileSync(jsonPath, 'utf8')
    let json = JSON.parse(file)

    return json
  }

  findEntityKey (json)
  {

  }
}
