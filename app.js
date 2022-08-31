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
const ingresos = [new Ingreso("Salario", 3500.0), new Ingreso("Tinka", 100.0)];
const egresos = [
    new Egreso("Renta", 1000.0),
    new Egreso("Reparacion pc", 300.0),
];
function totalIngresos() {
    let totalIngresos = 0;
    for (let i of ingresos) {
        totalIngresos += i.valor;
    }
    return totalIngresos;
}
function totalEgresos() {
    let totalEgresos = 0;
    for (let i of egresos) {
        totalEgresos += i.valor;
    }
    return totalEgresos;
}
function cargarCabecero() {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = `${Math.round(
        (totalEgresos() / totalIngresos()) * 100
    )}%`;
    document.getElementById("presupuesto").innerHTML =
        formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
    document.getElementById("ingresos").innerHTML = formatoMoneda(
        totalIngresos()
    );
    document.getElementById("egresos").innerHTML = formatoMoneda(
        totalEgresos()
    );
}
function cargarApp() {
    cargarCabecero();
    cargarIngresos();
}
function formatoMoneda(value) {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimunFractionsDigits: 2,
    });
}
function cargarIngresos() {
    let ingresosHTML = "";
    for (let i of ingresos) {
        ingresosHTML += crearIngresoHtml(i);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}
function crearIngresoHtml(value) {
    let ingresoHtml = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${value.descripccion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(value.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return ingresoHtml;
}
