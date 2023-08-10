function diaSemana() {
  let dia = parseInt(prompt('Ingrese número del 1 - 7'))
  switch (dia) {
    case 1:
      console.log(' Lunes')
      break
    case 2:
      console.log('Martes')
      break
    case 3:
      console.log('Miercoles')
      break
    case 4:
      console.log('Jueves')
      break
    case 5:
      console.log('Viernes')
      break
    case 6:
      console.log('Sábado')
      break
    case 7:
      console.log('Domingo')
    default:
      console.log('Día no válido')
  }
}

diaSemana()

// class DiaSemana {
//   constructor(dia) {
//     this.dia = dia
//   }
// }

// const diaSemana = new DiaSemana('Lunes')

// console.log(`El día de la semana es:${diaSemana.dia}`)
