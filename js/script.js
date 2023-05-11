

// Função que converte um número romano em decimal
function convertRomanToDecimal() {
    // Obtem o número romano a ser convertido a partir do input na página
    const romanNumber = document.getElementById("romanNumber").value.toUpperCase();
  
    // Mapa dos algarismos romanos e seus valores em decimal
    const romanNumeralMap = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1
    };
  
    // Variável que irá armazenar o resultado da conversão
    let result = 0;
  
    // Variável de controle para percorrer o número romano
    let i = 0;
  
    // Laço para percorrer o número romano e realizar a conversão para decimal
    while (i < romanNumber.length) {
      // Obtem o caractere atual do número romano
      const currentChar = romanNumber[i];
      // Obtem o valor decimal correspondente ao caractere atual
      const currentValue = romanNumeralMap[currentChar];
  
      // Obtem o próximo caractere do número romano
      const nextChar = romanNumber[i + 1];
      // Obtem o valor decimal correspondente ao próximo caractere, se existir
      const nextValue = romanNumeralMap[nextChar];
  
      // Se o próximo valor existir e for maior que o valor atual, então o valor atual é subtraído do próximo valor
      if (nextValue && nextValue > currentValue) {
        result += (nextValue - currentValue);
        // Incrementa o índice em 2 para pular o próximo caractere
        i += 2;
      } else {
        // Caso contrário, apenas adiciona o valor atual ao resultado
        result += currentValue;
        // Incrementa o índice em 1
        i++;
      }
    }
  
    // Exibe o resultado da conversão na página
    document.getElementById("result").innerHTML = result;
  }
  