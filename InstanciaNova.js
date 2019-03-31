// Uma factory retorna um nov objeto
 module.exports = () => {
     return {
         valor: 1,
         inc() {
             this.valor++
         }
     }
 }