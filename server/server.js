const cpfName = require('../utils/cpf_name');

(async () => {
  console.log(await cpfName.cpfName()); // Exemplo: 156.924.282-88 - Eduardo Finotti
  console.log(cpfName.soma(3, 5));      // Exemplo: 8
})();

