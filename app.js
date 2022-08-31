class Dato {
    constructor(descripccion, valor) {
        this._descripccion = descripccion;
        this._valor = valor;
    }
    get descripccion() {
        return this._descripccion;
    }
    set descripccion(val) {
        this._descripccion = val;
    }
    get valor() {
        return this._valor;
    }
    set valor(val) {
        this._valor = val;
    }
}
class Ingreso extends Dato {
    static contadorIngresos = 0;
    constructor(descripccion, valor) {
        super(descripccion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id() {
        return this._id;
    }
}
class Egreso extends Dato {
    static contadorEgreso = 0;
    constructor(descripccion, valor) {
        super(descripccion, valor);
        this._id = ++Egreso.contadorEgreso;
    }
    get id() {
        return this._id;
    }
}
