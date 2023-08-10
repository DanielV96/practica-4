function huevos(a) {
  i = [0.3, 0.5, 0.8, 0.1]
  const precioUnitario = 250
  const totalHuevos = precioUnitario * a

  if (a > 1 && a < 100) {
    console.log('Valor de huevos:', totalHuevos)
    console.log('Con descuento del 3%:', totalHuevos * i[0])
    console.log('valor a pagar:', (totalHuevos -= totalHuevos * i[0]))
  } else if (a > 101 && a < 200) {
    console.log('Valor de huevos:', totalHuevos)
    console.log('Valor descuento 5%:', totalHuevos * i[1])
    console.log('Valor de huevos:', (totalHuevos -= totalHuevos * i[1]))
  } else if (a > 201 && a < 300) {
    console.log('Valor de huevos:', totalHuevos)
    console.log('Valor descuento 8%:', totalHuevos * i[2])
    console.log('valor a pagar:', totalHuevos - totalHuevos * [2])
  } else {
    console.log('Valor de huevos:', totalHuevos)
    console.log('Valor de huevos:', totalHuevos * i[3])
    console.log('Valor pagar:', totalHuevos - totalHuevos * i[3])
  }
}

huevos(4)
