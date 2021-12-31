class ContaBancaria {
    constructor (agencia, numero, tipo, saldo) {
        this.agencia = agencia
        this.numero = numero
        this._tipo = tipo
        this._saldo = saldo
    }

    get saldo() {
        return this._saldo
    }

    set saldo(saldo) {
        this._saldo = saldo
    }

    get tipo() {
        return this._tipo
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return "Saldo Insuficiente"
        } else {
            this._saldo -= valor
            return `Saldo Atual: R$ ${this._saldo}`
        }
    }

    depositar(valor) {
        this._saldo += valor
        return `Saldo Atual: R$ ${this._saldo}`
    }
}

export {ContaBancaria}