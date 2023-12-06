class Processor {
   static Process(data){
        let splitRows = data.split('\n')
        let rows = []

        splitRows.forEach(row =>{
         let arr = row.split(",")
         rows.push(arr)
        })
      return rows
   } 
}

module.exports = Processor