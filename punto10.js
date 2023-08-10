// function operacionesBasicas(a, b) {
//   console.log('Suma:', a + b)
//   console.log('Resta:', a - b)
//   console.log('Multiplicacion:', a * b)
//   console.log('Division:', a / b)
// }

// operacionesBasicas(10, 2)

function operacionesBasicas(a, b) {
  console.log('1.Suma')
  console.log('2.Resta')
  console.log('3.Multiplicación')
  console.log('4.División')
  const opcion = Number(prompt('¿Qué operación desea realizar?'))

  switch (opcion) {
    case 1:
      console.log('la suma es:', a + b)
      break
    case 2:
      console.log('La resta es:', a - b)
      break
    case 3:
      console.log('La multiplicación es:', a * b)
      break
    case 4:
      console.log('La división es:', a / b)
    default:
      console.log('Opción incorrecta')
  }
}

operacionesBasicas(10, 5)
