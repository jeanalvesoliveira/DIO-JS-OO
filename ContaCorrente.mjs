import {ContaBancaria} from './ContaBancaria.mjs'

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, saldo, cartaoCredito, tipo = 'conta corrente') {
        super(agencia, numero, tipo, saldo)
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(cartaoCredito) {
        this._cartaoCredito = cartaoCredito
    }
}

export {ContaCorrente}