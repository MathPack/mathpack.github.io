
function arithmetic_mean() {
    var parent = document.getElementById("arithmetic_mean")

    var sum = parseFloat(parent.children[1].value)
    var n = parseInt(parent.children[2].value)

    var index = 3
    if (!parent.children[3].hasChildNodes()) {
        index = 4
    }

    is_arithmetic = parent.children[index].children[0].checked

    if (is_arithmetic) {
        if (parent.children[3].hasChildNodes()) {
            change_arithmetic()
        }
        let a1 = parseFloat(parent.children[1].value)
        let n = parseInt(parent.children[2].value)
        let d = parseInt(parent.children[3].value)
        sum = (n / 2) * ((2 * a1) + ((n - 1) * d))
        console.log(sum)

    } else {
        parent.children[1].placeholder = "sum of values"
        parent.children[2].placeholder = "num of values"
        if (!parent.children[3].hasChildNodes()) {
            parent.removeChild(parent.children[3])
        }

    }

    if (!isNaN(sum / n) && !is_arithmetic) {
        parent.children[4].innerHTML = sum / n
    } else if (!isNaN(sum / n) && is_arithmetic) {
        parent.children[5].innerHTML = sum / n
    }
}

function change_arithmetic() {
    var parent = document.getElementById("arithmetic_mean")
    parent.children[1].placeholder = "a1"
    parent.children[2].placeholder = "n"
    var input = document.createElement("input")
    input.placeholder = "d"
    parent.insertBefore(input, parent.children[3])
}


function probability() {
    var parent = document.getElementById("probability")
    let target = parseFloat(parent.children[1].value)
    let total = parseFloat(parent.children[2].value)

    var sum = target/total

    if(!isNaN(sum)){
        parent.children[3].innerHTML = sum*100 + "%"
    }
}

function quadratic_formula(){
    var parent = document.getElementById("quadratic_formula")
    let a = parseInt(parent.children[1].value)
    let b = parseInt(parent.children[2].value)
    let c = parseInt(parent.children[3].value)

    var x1 = (-b + (Math.sqrt(b**2 - (4 * a * c))))/(2 * a)
    var x2 = (-b - (Math.sqrt(b**2 - (4 * a * c))))/(2 * a)

    if(!isNaN(x1) || !isNaN(x2)){
        parent.children[4].innerHTML = "x = " + x1  + "<br/>" + "x = " + x2
        if(x1 == x2){
            parent.children[4].innerHTML = "x = " + x1
        }
    }else if(!isNaN(x1) && isNaN(x2)){
        parent.children[4].innerHTML = "x = " + x1
    }else if(isNaN(x1) && !isNaN(x2)){
        parent.children[4].innerHTML = "x = " + x2
    }else{
        parent.children[4].innerHTML = "No real solutions"

    }
    
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(x1)
}