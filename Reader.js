const fs = require('fs')
const util = require("util")
const csv = require('csv-parser')

class Reader {

    constructor(){
        this.read = util.promisify(fs.readFile)
    }

    async Read(file_path){
        try{
            const data = await this.read(file_path,'utf8')
            return data
        }
        catch(err){
            console.error('Erro na leitura do arquivo', err)
            return undefined
        }
    }
}
  
module.exports = Reader;