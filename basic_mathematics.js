function fractions_addition(){
    var parent = document.getElementById("fractions_addition")

    var a = parent.children[1].value.split("/")
    var b = parent.children[2].value.split("/")
    console.log(a.length, b.length)

    if(a.length == 2 && b.length == 2){
        for(i = 0; i < 2; i++){
            a[i] = parseInt(a[i])
            b[i] = parseInt(b[i])
        }
        let lcd = LCD(a[1],b[1])
        a = convert_fractions(a,lcd)
        b = convert_fractions(b,lcd)
        parent.children[3].innerHTML = [a[0] + b[0], lcd].join("/")
    }
   
}

function fractions_subraction(){
    var parent = document.getElementById("fractions_subraction")

    var a = parent.children[1].value.split("/")
    var b = parent.children[2].value.split("/")
    console.log(a.length, b.length)

    if(a.length == 2 && b.length == 2){
        for(i = 0; i < 2; i++){
            a[i] = parseInt(a[i])
            b[i] = parseInt(b[i])
        }
        let lcd = LCD(a[1],b[1])
        a = convert_fractions(a,lcd)
        b = convert_fractions(b,lcd)
        parent.children[3].innerHTML = [a[0] - b[0], lcd].join("/")
    }
}

function fractions_multiplication(){
    var parent = document.getElementById("fractions_multiplication")

    var a = parent.children[1].value.split("/")
    var b = parent.children[2].value.split("/")
    console.log(a.length, b.length)

    if(a.length == 2 && b.length == 2){
        result = [a[0] * b[0], a[1] * b[1]]
        let gcd = GCD(result[0], result[1])
        result[0] /= gcd
        result[1] /= gcd

        parent.children[3].innerHTML = result.join("/")
    }
}
function fractions_division(){
    var parent = document.getElementById("fractions_division")

    var a = parent.children[1].value.split("/")
    var b = parent.children[2].value.split("/")
    console.log(a.length, b.length)

    if(a.length == 2 && b.length == 2){
        result = [a[0] * b[1], a[1] * b[0]]
        let gcd = GCD(result[0], result[1])
        result[0] /= gcd
        result[1] /= gcd

        parent.children[3].innerHTML = result.join("/")
    }
}

function fraction_to_decimal(){
    var parent = document.getElementById("fraction_to_decimal")
    var a = parent.children[1].value.split("/")
    parent.children[2].innerHTML = a[0]/a[1]
}

function decimal_to_fraction(){
    var parent = document.getElementById("decimal_to_fraction")
    let a = parent.children[1].value
    let fraction = a.split(".")
    let length = fraction[1].length
    let result = [parseInt(a * 10 ** length),10 ** length]
    let gcd = GCD(result[0], result[1])
    result[0] /= gcd
    result[1] /= gcd
    parent.children[2].innerHTML = result.join("/")
}

function decimal_to_percent(){
    var parent = document.getElementById("decimal_to_percent")
    let decimal = parent.children[1].value

    parent.children[2].innerHTML = decimal * 100 + "%"
}

function percent_to_decimal(){
    var parent = document.getElementById("percent_to_decimal")
    let percent = parent.children[1].value

    parent.children[2].innerHTML = percent / 100
}

function ratio_distribution(){
    var parent = document.getElementById("ratio_distribution")
    var total = parent.children[1].value
    var ratio = parent.children[2].value.split(":")
    var rtotal = 0
    for(i = 0; i < ratio.length; i++){
        rtotal += parseInt(ratio[i])
    }
    var x = total/rtotal
    var result = ratio
    for(i = 0; i < result.length; i++){
        result[i] = result[i] * x
    }
    parent.children[3].innerHTML = result.join(":")
}

function LCD(a,b){
    let final = a*b
    let result = 0
    let an = []
    let bn = []
    let length = 0
    for(i = 1; a*i <= final || b*i <= final; i++){
        an.push(a*i)
        bn.push(b*i)
        length = i
        for(i = 0; i < length; i++){
            if(bn.includes(an[i])){
                return an[i]
            }
        }
    }
    return 0
}

function convert_fractions(x,d){
    x[0] = d/x[1] * x[0]
    x[1] = d
    return x
}

function GCD(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }