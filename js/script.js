    const NumeroRomanoMap = {
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

    // Define a função que converte o número romano em decimal
    function converterRomanoEmDecimal() {
      const NumeroRomano = document.getElementById("NumeroRomano").value.toUpperCase();
      let RomanoDecifrado = 0;
      let i = 0;
      while (i < NumeroRomano.length) {
        const currentChar = NumeroRomano[i];
        const currentValue = NumeroRomanoMap[currentChar];
        const nextChar = NumeroRomano[i + 1];
        const nextValue = NumeroRomanoMap[nextChar];
        if (nextValue && nextValue > currentValue) {
          RomanoDecifrado += (nextValue - currentValue);
          i += 2;
        } else {
          RomanoDecifrado += currentValue;
          i++;
        }
      }
      document.getElementById("RomanoDecifrado").innerHTML = RomanoDecifrado;
    }

    // Adiciona o event listener ao botão
    const converterBtn = document.getElementById("converterBtn");
    converterBtn.addEventListener("click", converterRomanoEmDecimal);
