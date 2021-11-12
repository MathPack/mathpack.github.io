function algebra_simplify(){
    var parent = document.getElementById("algebra_simplify")
    let equation = parent.children[1].value
    console.log(equation)
    let simplified = math.simplify(math.rationalize(equation))
    let result = simplified.toString()

    while(result.includes(" * ")){
        //replace all instances of * 
        result = result.replace(" * ", "")
    }


    parent.children[2].innerHTML = result
}