import {ContaCorrente} from './ContaCorrente.mjs'

class ContaPoupanca extends ContaCorrente {
    constructor (agencia, numero, saldo, cartaoCredito, tipo = 'conta poupança') {
        super(agencia, numero, saldo, cartaoCredito, tipo)
    }
}

export {ContaPoupanca}