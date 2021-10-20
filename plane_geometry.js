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
        parent.children[4].innerHTML = Math.sqrt(a) + '<span> or &radic;<span style="text-decoration:overline;">&nbsp;' + a + '&nbsp;</span></span>'
    }
    else if (isNaN(b) && !(isNaN(a) && isNaN(c))) {
        let b = -(a ** 2) + (c ** 2)
        parent.children[4].innerHTML = Math.sqrt(b) + '<span> or &radic;<span style="text-decoration:overline;">&nbsp;' + b + '&nbsp;</span></span>'

    }
    else if (isNaN(c) && !(isNaN(a) && isNaN(b))) {
        let c = (a ** 2) + (b ** 2)
        parent.children[4].innerHTML = Math.sqrt(c) + '<span> or &radic;<span style="text-decoration:overline;">&nbsp;' + c + '&nbsp;</span></span>'

    }
}

function box_plot() {
    var parent = document.getElementById("box_plot")
    let str_arr = parent.children[1].value.split(",")
    let f_arr = []
    for (const s of str_arr) {
        f_arr.push(parseFloat(s))
    }
    f_arr.sort(function (a, b) {
        return a - b;
    });
    let n = f_arr.length
    let nh = 0
    let q1 = 0
    let q2 = 0
    let q3 = 0
    let iqr = 0
    let range = [0, 0]
    let min = 0
    let max = 0
    let outliers = []
    if (n % 2 == 0) {
        q2 = (f_arr[n / 2 - 1] + f_arr[n / 2]) / 2
        nh = n / 2
        if (nh % 2 == 0) {
            q1 = (f_arr[nh / 2 - 1] + f_arr[nh / 2]) / 2
            q3 = (f_arr[nh / 2 - 1 + nh] + f_arr[nh / 2 + nh]) / 2
        } else {
            q1 = f_arr[(nh - 1) / 2]
            q3 = f_arr[(nh - 1) / 2 + nh]

        }

    } else {
        q2 = f_arr[(n - 1) / 2]
        nh = (n - 1) / 2

        if (nh % 2 == 0) {
            q1 = (f_arr[nh / 2 - 1] + f_arr[nh / 2]) / 2
            q3 = (f_arr[nh+nh/2] + f_arr[nh+nh/2+1 ]) / 2
        } else {
            q1 = f_arr[(nh - 1) / 2]
            q3 = f_arr[(nh - 1) / 2 + nh + 1]
        }
    }

    iqr = q3 - q1
    range[0] = q1 - (1.5 * iqr)
    range[1] = q3 + (1.5 * iqr)

    for (i = 0; i < n; i++) {
        console.log(f_arr[i], range[0])
        if (f_arr[i] >= range[0]) {
            min = f_arr[i]
            break;
        } else {
            outliers.push(f_arr[i])
        }
    }

    for (i = 0; i < n; i++) {
        console.log(f_arr[n-1-i], range[1])
        if (f_arr[n-1-i] <= range[1]) {
            max = f_arr[n-1-i]
            break;
        } else {
            
            console.log(outliers.push(f_arr[n-1-i]))
        }
    }

   
    console.log(f_arr)

    parent.children[2].innerHTML = "q2/median = " + q2
    parent.children[2].innerHTML += "<br/> q1/lower quartile = " + q1
    parent.children[2].innerHTML += "<br/> q3/upper quartile = " + q3
    parent.children[2].innerHTML += "<br/> min = " + min
    parent.children[2].innerHTML += "<br/> max = " + max
    parent.children[2].innerHTML += "<br/> IQR = " + iqr
    parent.children[2].innerHTML += "<br/> range = [" + range + "]"
    parent.children[2].innerHTML += "<br/> outliers = " + outliers



}