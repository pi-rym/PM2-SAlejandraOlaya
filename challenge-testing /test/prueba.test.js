// carrito de compra deberia ser una clase
// carritoDeCompra deberia ser una instancia de la clase compra
// deberia guardar productos en una lista 
// deberia tener un metodo llamado agregarProducto 
// deberia tener un metodo llamado calcularTotal 
// deberia tener un metodo llamado aplicarDescuento 
// el metodo agregarProducto deberia poder agregar un producto a la lista
// el metodo calcularTotal deberia poder calcular total de la compra, sumando los precios de los productos del carrito 
// el metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra 

const cliente = require("../index");
const { CarritoCompra, Producto } = cliente;

describe('carrito compra', () => {
    let compra;

    beforeEach(() => {
        compra = new CarritoCompra();
    });


    describe('sobre el constructor de la clase compra', () => {

        it('compra deberia ser una instancia de la clase compra', () => {
            expect(compra instanceof CarritoCompra).toBe(true)
        })
        it('deberia guardar productos en una lista', () => {
            expect(compra.carrito).toEqual([])
        })
        it('deberia tener un metodo llamado agregarProducto', () => {
            expect(typeof compra.agregarProducto).toBe('function');
        })
        it('deberia tener un metodo llamado  calcularTotal', () => {
            expect(typeof compra.calcularTotal).toBe('function');
        })
        it('deberia tener un metodo llamado  aplicarDescuento', () => {
            expect(typeof compra.aplicarDescuento).toBe('function');
        })
        it('el metodo agregarProducto deberia poder agregar un producto a la lista', () => {
            const producto3 = new Producto("airpods", 250);
            compra.agregarProducto(producto3);
            expect(compra.carrito.length).toBe(1);
        })
        it('el metodo calcularTotal deberia poder calcular total de la compra, sumando los precios de los productos del carrito', () => {
            const producto3 = new Producto("airpods", 250);
            compra.agregarProducto(producto3);
            const producto4 = new Producto("cable", 30);
            compra.agregarProducto(producto4);
            expect(compra.calcularTotal()).toBe(280);
        })
        it('el metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra', () => {
            const producto3 = new Producto("airpods", 30);
            compra.agregarProducto(producto3);
            const producto4 = new Producto("cable", 20);
            compra.agregarProducto(producto4);

            expect(compra.aplicarDescuento(10)).toBe(45);
        })
    })
})


