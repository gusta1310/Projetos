
        !!"" // false, pois nega o valor vazio
        Boolean("") // seria a mesma coisa que acima, retorna false
        !"" // true, nega o valor vazio

        // uma exclamação nega o valor, duas exclamações convertem para booleano
        // !!true = true
        // !!false = false
        // !true = false
        // !false = true 


        // != diferente (valor), ex: 8 != "8" 
        // !== diferente (valor e tipo), ex: 8 !== "8"


        let isValid = true
        alert("esse campo é válido ? " + isValid) // true 

        alert("esse campo é válido ? " + !isValid)  // false, nega o valor de isValid
    