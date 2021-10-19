function area_of_triangle() {
    var parent = document.getElementById("area_of_triangle")

    let base = parseFloat(parent.children[1].value)
    let height = parseFloat(parent.children[2].value)

    if (!(isNaN(base) || isNaN(height))) {
        let area = (base * height) / 2

        parent.children[3].innerHTML = area + "(any)&sup2;"
    }
}


function pythagorean_theorem() {
    var parent = document.getElementById("pythagorean_theorem")

    let a = parseFloat(parent.children[1].value)
    let b = parseFloat(parent.children[2].value)
    let c = parseFloat(parent.children[3].value)


    if (isNaN(a) && !(isNaN(b) && isNaN(c))) {
        let a = -(b ** 2) + (c ** 2)
        parent.children[4].innerHTML = Math.sqrt(a)  + '<span> or &radic;<span style="text-decoration:overline;">&nbsp;' + a + '&nbsp;</span></span>'
    }
    else if (isNaN(b) && !(isNaN(a) && isNaN(c))) {
        let b = -(a ** 2) + (c ** 2)
        parent.children[4].innerHTML = Math.sqrt(b)  + '<span> or &radic;<span style="text-decoration:overline;">&nbsp;' + b + '&nbsp;</span></span>'

    }
    else if (isNaN(c) && !(isNaN(a) && isNaN(b))) {
        let c = (a ** 2) + (b ** 2)
        parent.children[4].innerHTML = Math.sqrt(c)  + '<span> or &radic;<span style="text-decoration:overline;">&nbsp;' + c + '&nbsp;</span></span>'

    }
}