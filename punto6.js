function porcentajeAlumnos(m, h) {
  let totalAlumnos = m + h
  console.log('Cantidad mujeres:', m)
  console.log('Cantidad hombres:', h)
  console.log('Total alumnos:', totalAlumnos)

  porcnthombre = (h * 100) / totalAlumnos
  porcntMujer = (m * 100) / totalAlumnos

  console.log('Porcentaje mujeres:', porcntMujer)
  console.log('Porcentaje hombres:', porcnthombre)
}

porcentajeAlumnos(25, 5)
