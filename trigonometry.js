function sine(){
    var parent = document.getElementById("sine")

    let opposite = parseFloat(parent.children[1].value)
    let hypotenuse = parseFloat(parent.children[2].value)

    let result = opposite/hypotenuse

    if(!(isNaN(opposite) || isNaN(hypotenuse))){
        parent.children[3].innerHTML = result
    }

}


function cosine(){
    var parent = document.getElementById("cosine")

    let adjacent = parseFloat(parent.children[1].value)
    let hypotenuse = parseFloat(parent.children[2].value)

    let result = adjacent/hypotenuse

    if(!(isNaN(adjacent) || isNaN(hypotenuse))){
        parent.children[3].innerHTML = result
    }
}

function tangent(){
    var parent = document.getElementById("tangent")

    let opposite = parseFloat(parent.children[1].value)
    let adjacent = parseFloat(parent.children[2].value)

    let result = opposite/adjacent

    if(!(isNaN(opposite) || isNaN(adjacent))){
        parent.children[3].innerHTML = result
    }
}