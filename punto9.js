function menu() {
  console.log('Bienvenido al menú'),
    console.log('1- Carro o Moto'),
    console.log('2- Bicicleta o Patineta '),
    console.log('3- Escooter Eléctrico')

  const tipoVehiculo = parseInt(prompt('Ingrese # de produto seleccionar'))

  switch (tipoVehiculo) {
    case 1:
      alert('Obtiene descuento de 15%')
      break
    case 2:
      alert('Obtiene descuento de 10%')
      break
    case 3:
      alert('Obtiene descuento de 5%')
      break
    default:
      alert('Tipo de vehiculo no válido')
  }
}

function main() {
  menu()
}

main()
