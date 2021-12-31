import {ContaCorrente} from './ContaCorrente.mjs'
import { ContaUniversitaria } from './ContaUniversitaria.mjs'

const contaCorrente = new ContaCorrente('928', '8790-6', 300, '343434343')
console.log(contaCorrente.tipo)
console.log(contaCorrente.depositar(500))
console.log(contaCorrente.sacar(600))

const contaUni = new ContaUniversitaria('928', '3212-9', 0, '12121212')
console.log(contaUni.tipo)
console.log(contaUni.depositar(1500))
console.log(contaUni.sacar(400))


