function quadratic_distance(){
    var parent = document.getElementById("quadratic_distance")

    let coor1 = parent.children[1].children
    let coor2 = parent.children[2].children

    let x = parseFloat(coor1[0].value) - parseFloat(coor2[0].value)
    let y = parseFloat(coor1[1].value) - parseFloat(coor2[1].value)

    if(!(isNaN(x) || isNaN(y))){
        let distance = Math.sqrt( x**2 + y**2)
        
        parent.children[3].innerHTML = distance +  '<span> or &radic;<span style="text-decoration:overline;">&nbsp;' + (x**2 + y**2) + '&nbsp;</span></span>'
    }


    console.log(x, y)
}


function slope_formula(){
    var parent = document.getElementById("slope_formula")

    let coor1 = parent.children[1].children
    let coor2 = parent.children[2].children

    let x = parseFloat(coor2[0].value) - parseFloat(coor1[0].value)
    let y = parseFloat(coor2[1].value) - parseFloat(coor1[1].value)

    if(!(isNaN(x) || isNaN(y))){
        let slope = y/x
        
        parent.children[3].innerHTML = slope 
    }


    console.log(x, y)
}


function slope_intercept(){
    var parent = document.getElementById("slope_intercept")

    let slope = parseFloat(parent.children[1].value)
    let x = parseFloat(parent.children[2].value)
    let y = parseFloat(parent.children[3].value)

    if (!(isNaN(slope) || isNaN(x) || isNaN(y))){
        let intercept = y - (slope * x)
        parent.children[4].innerHTML = "y" + "=" + slope + "x " + " + " + intercept 
    }
}


function midpoint_formula(){
    var parent = document.getElementById("midpoint_formula")

    let coor1 = parent.children[1].children
    let coor2 = parent.children[2].children

    let x = parseFloat(coor1[0].value) + parseFloat(coor2[0].value)
    let y = parseFloat(coor1[1].value) + parseFloat(coor2[1].value)

    if(!(isNaN(x) || isNaN(y))){
        
        parent.children[3].innerHTML = "(" +  x/2 + " , " + y/2 + ")"
    }


    console.log(x, y)
}
