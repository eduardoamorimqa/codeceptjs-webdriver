async function cpfName() {
  const { generate } = await import('gerador-validador-cpf');
  const cpf = generate({ format: true });
  return `${cpf} - Eduardo Finotti`;
}

function soma(num1, num2) {
  return num1 + num2;
}

module.exports = {
  cpfName,
  soma  
};



