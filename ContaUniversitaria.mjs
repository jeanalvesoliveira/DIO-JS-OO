import {ContaCorrente} from './ContaCorrente.mjs'

class ContaUniversitaria extends ContaCorrente {
    constructor (agencia, numero, saldo, cartaoCredito, tipo = 'conta universitária') {
        super(agencia, numero, saldo, cartaoCredito, tipo)
    }

    sacar(valor) {
        if (valor >= 500) {
            return "Operação Inválida: O valor não pode ser maior do que 500 reais"
        }
        if (this._saldo < valor) {
            return "Saldo Insuficiente"
        } else {
            this._saldo -= valor
            return `Saldo Atual: R$ ${this._saldo}`
        }
    }
}

export {ContaUniversitaria}