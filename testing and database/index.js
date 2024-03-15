class Producto {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;

    }
}

class CarritoCompra {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }
    calcularTotal() {
        let total = 0;
        for (let producto of this.carrito) {
            total += producto.valor
        }
        return total;

    }
    aplicarDescuento(porcentaje) {
        let descuento = (porcentaje/100) * this.calcularTotal();
        return this.calcularTotal() - descuento; 
    }
}
const newCarrito = new CarritoCompra();

const producto1 = new Producto("mac", 2500);
const producto2 = new Producto("iphone", 1000);

newCarrito.agregarProducto(producto1);
newCarrito.agregarProducto(producto2);
console.log(newCarrito.aplicarDescuento())


module.exports = { CarritoCompra, Producto }