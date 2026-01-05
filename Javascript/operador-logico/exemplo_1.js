
    let num1 = parseFloat(prompt("Digite a primeira nota: "))
    let num2 = parseFloat(prompt("Digite a segunda nota: "))

    let media = (num1 + num2 ) / 2

    alert((media <= 4 || num1 == 0 || num2 == 0 )) // operador lógico "OU" (OR), se uma das condições for verdadeira, retorna true
    