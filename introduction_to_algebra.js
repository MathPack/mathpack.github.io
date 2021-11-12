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
    console.log(correct)
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
    let values = parent.children[2].value


}