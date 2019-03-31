const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor)


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)