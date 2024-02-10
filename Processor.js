class Processor {
   static Process(data){
        let splitRows = data.split('\n')
        let rows = []

        splitRows.forEach(row =>{
      let arr = row.split(",").map(value => value.replace(/"/g,'')) //a func map retira "" do conteudo
         rows.push(arr)
        })
      return rows
   } 
}

module.exports = Processor