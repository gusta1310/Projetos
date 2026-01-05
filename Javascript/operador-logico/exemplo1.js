
    let num1 = parseFloat(prompt("Digite a primeira nota: "))
    let num2 = parseFloat(prompt("Digite a segunda nota: "))

    let media = (num1 + num2 ) / 2      // false && true && true = false
                                        // true && true && true = true

                                                                                             

    alert("a media apresentada é maior que 4? " + (media >= 4 && num1 >=0 && num2 >=0)) // true ou false, dependendo do valor da média

    // && operador lógico "E" (AND), se todas as condições forem verdadeiras, retorna true...senão retorna false
    // || operador lógico "OU" (OR), se uma das condições for verdadeira, retorna true ...senão retorna false
    // ! operador lógico "NÃO" (NOT), inverte o valor lógico, se for true, retorna false e vice-versa

    