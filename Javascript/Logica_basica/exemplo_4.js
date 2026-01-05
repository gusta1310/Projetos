<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let num1 = prompt("Digite um numero: ")
        let num2 = prompt("Digite outro numero: ")

        alert(( "o primeiro numero é maior que o segundo ? " + Boolean(num1 >= num2)))



        8 == "8" // true, pois compara só o valor
        8 === "8" // false, pois compara o tipo também
            8 != "8" // false, pois compara o valor
            8 !== "8" // true, pois compara o valor e o tipo
            8 != 5 // true, pois compara o valor


            // = atribuição, ex: let a = 8
            // == comparação de valor, ex: 8 == "8"
            // === comparação de valor e tipo, ex: 8 === "8"
            // != diferente (valor), ex: 8 != "8"
            // !== diferente (valor e tipo), ex: 8 !== "8"


    </script>
</body>
</html>