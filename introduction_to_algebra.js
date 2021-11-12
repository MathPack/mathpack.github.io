function algebra_simplify() {
    var parent = document.getElementById("algebra_simplify")
    let equation = parent.children[1].value
    let previous = ""
    let correct = ""
    for (i = 0; i < equation.length; i++) {
        //check if the previous and current character are letters

        if (previous.match(/[a-z]/i) && equation[i].match(/[a-z]/i)) {
            //check if the two letters are the same
            correct += "*" + equation[i]
        }else{
            correct += equation[i]
        }
        previous = equation[i]

    }
    equation = correct
    let simplified = math.rationalize(math.simplify(equation))
    let result = simplified.toString()

    while (result.includes(" * ")) {
        //replace all instances of * 
        result = result.replace(" * ", "")
    }


    parent.children[2].innerHTML = result
}


function algebra_evaluate() {
    var parent = document.getElementById("algebra_evaluate")
    let equation = parent.children[1].value
    let previous = ""
    let correct = ""
    for (i = 0; i < equation.length; i++) {
        //check if the previous and current character are letters

        if (previous.match(/[a-z]/i) && equation[i].match(/[a-z]/i)) {
            //check if the two letters are the same
            correct += "*" + equation[i]
        }else{
            correct += equation[i]
        }
        previous = equation[i]

    }
    equation = correct
    let simplified = math.rationalize(math.simplify(equation))
    let values = parent.children[2].value
    // remove spaces of value
    while (values.includes(" ")) {
        values = values.replace(" ", "")
    }
    // convert values into an objectlet values_object = {}
    let values_object = {}
    let values_array = values.split(",")
    for (i = 0; i < values_array.length; i++) {
        values_object[values_array[i].split("=")[0]] = parseFloat(values_array[i].split("=")[1])
    }
    console.log(simplified.toString(), values_object)

    // evaluate the equation
    let result = math.evaluate(simplified.toString(), values_object)
    parent.children[3].innerHTML = result.toString()
}