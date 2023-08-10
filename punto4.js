class Producto {
  constructor(nombre, precio, IVA) {
    this.nombre = nombre
    this.precio = precio
    this.IVA = IVA
  }
  get iva() {
    return this.precio * this.IVA
  }
  get total() {
    return this.precio + this.iva
  }
}

const producto1 = new Producto('Laptop', 1000, 0.19)
producto1.total
console.log(
  `El producto ${producto1.nombre}, con precio ${producto1.precio} tiene un porcentaje de IVA de: ${producto1.iva}, con valor final de:${producto1.total}`
)
