function promedioBecasMayor(edad, prom) {
  if (edad > 18) {
    if (prom >= 9) {
      console.log('beca de $200.000')
    } else if (prom >= 7.5) {
      console.log('Beca de $100.000')
    } else if (prom >= 6.0) {
      console.log('Beca de $50.000')
    } else {
      console.log('Invitación a estudiar más en el próximo ciclo escolar')
    }
  } else {
    if (prom >= 9) {
      console.log('Beca de $300.000')
    } else if (prom < 8) {
      console.log('Beca de $200.000')
    } else if (prom < 8 && prom >= 6) {
      console.log('Beca de $100.000')
    } else {
      console.log('Invitación a estudiar más en el próximo ciclo escolar')
    }
  }
}

promedioBecasMayor(20, 9)
