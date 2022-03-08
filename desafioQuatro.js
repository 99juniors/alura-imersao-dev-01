function converteRealParaDolar(real, taxaCambio) {
  return real * taxaCambio;
}

const taxaCambio = 0.20

console.log(converteRealParaDolar(10, taxaCambio))