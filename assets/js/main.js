
    const form = document.querySelector('form');
    const result = document.querySelector('.result');

    const EPeso = form.querySelector('#input-peso');
    const EAltura = form.querySelector('#input-altura');

    form.addEventListener('submit', formSubmit);

    function formSubmit(event) {
        event.preventDefault();

        const peso = Number(EPeso.value);
        const altura = Number(EAltura.value);

        const error = triesError(peso, altura);
        if(error) {
            result.innerHTML = error;
            result.classList.add('error');
            return;
        }

       getsIMC(peso, altura);
    }

    function triesError(peso, altura) {
        if (!peso || isNaN(peso)) {
            return "Peso invalido"
        }

        if (!altura || isNaN(altura)) {
            return "Altura invalida"
        }

        return false;
    }

    function getsIMC(peso, altura) {
        
        const IMC = peso / altura ** 2;
        function getsPhraseIMC(imc) {
            const IMC_ABAIXO = imc < 18.5;
            const IMC_NORMAL = imc >= 18.5;
            const IMC_SOBREPESO = imc >= 25;
            const IMC_OB1 = imc >= 30;
            const IMC_OB2 = imc >= 35;
            const IMC_OB3 = imc >= 40;
            const imcPhrases = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

            if (IMC_OB3) return imcPhrases[5]; 
            if (IMC_OB2) return imcPhrases[4]; 
            if (IMC_OB1) return imcPhrases[3]; 
            if (IMC_SOBREPESO) return imcPhrases[2]; 
            if (IMC_NORMAL) return imcPhrases[1];
            if (IMC_ABAIXO) return imcPhrases[0];

        }

        result.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (${getsPhraseIMC(IMC)})`;
        result.classList.add('final-IMC');
    }
