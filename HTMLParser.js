const ejs = require('ejs')

class HTMLParser {
    static async Parse(table){
        return await ejs.renderFile("./table.ejs",{header: table.header, row: table.row})
    }
}

module.exports = HTMLParser
