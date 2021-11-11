function pictograph_maker() {
    var parent = document.getElementById("pictograph_maker")

    let container = parent.children[1]
    let rows = parseInt(parent.children[2].value)

    let table = document.createElement("table")
    for (i = 0; i <= rows; i++) {
        let tr = document.createElement("tr")
        if (i == 0) {
            let th1 = document.createElement("th")
            th1.innerHTML = "Name"
            th1.contentEditable = "True"
            let th2 = document.createElement("th")
            th2.innerHTML = "Data"
            th2.contentEditable = "True"
            tr.appendChild(th1)
            tr.appendChild(th2)
        } else {
            for (j = 0; j < 2; j++) {
                let td = document.createElement("td")
                td.contentEditable = "true"
                tr.appendChild(td)
            }
        }
        console.log(tr)
        table.appendChild(tr)
    }
    container.appendChild(table)

    console.log(container.children)
}


function table_maker() {
    var parent = document.getElementById("pie_graph_maker")

    let container = parent.children[1]
    let rows = parseInt(parent.children[2].value)

    let table = document.createElement("table")
    for (i = 0; i <= rows; i++) {
        let tr = document.createElement("tr")
        if (i == 0) {
            let th1 = document.createElement("th")
            th1.innerHTML = "Name"
            th1.contentEditable = "True"
            let th2 = document.createElement("th")
            th2.innerHTML = "Data"
            th2.contentEditable = "True"
            let th3 = document.createElement("th")
            th3.innerHTML = "Color"
            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
        } else {
            for (j = 0; j < 3; j++) {
                let td = document.createElement("td")
                if(j != 2){
                    td.contentEditable = "true"
                }
                tr.appendChild(td)
            }
        }
        console.log(tr)
        table.appendChild(tr)
    }
    container.appendChild(table)

    console.log(container.children)
}
function pie_graph_maker() {
    var parent = document.getElementById("pie_graph_maker")

    let container = parent.children[1]

    let data = get_data(container.children[0],1)
    let names = get_data(container.children[0],0)
    //convert data into numbers
    for (i = 0; i < data.length; i++) {
        data[i] = parseFloat(data[i])
    }
    var total = 0
    for (i = 0; i < data.length; i++) {
        total += data[i]
    }

    if(container.children.length > 1){
        for(i = 1; i < container.children.length; i++){
            container.children[i].remove()
        }
    }

    //make a pie graph
    var canvas = document.createElement("canvas")
    canvas.width = 300
    canvas.height = 300
    parent.clientWidth = 300
    parent.clientHeight = 300
    console.log(parent.clientWidth)
    container.appendChild(canvas)

    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 300, 300)
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.moveTo(150, 150)
    ctx.arc(150, 150, 150, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()

    var start_angle = 0
    var end_angle = 0

    for (i = 0; i < data.length; i++) {
        end_angle = start_angle + (data[i] / total) * 2 * Math.PI
        ctx.beginPath()
        ctx.moveTo(150, 150)
        ctx.arc(150, 150, 150, start_angle, end_angle)
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")"
        ctx.stroke()
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")"
        ctx.fill()
        start_angle = end_angle

        let color = document.createElement("div")
        color.style.width = "10px"
        color.style.height = "10px"
        color.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
        container.children[0].rows[i+1].cells[2].appendChild(color)
    }
}


// get the data from the 2nd column of the table
function get_data(table,column) {
    let data = []
    for (i = 1; i < table.rows.length; i++) { //for removing unwanted elements
        if (table.rows[i].cells[column].innerHTML.includes("<br>")) {
            table.rows[i].cells[column].innerHTML = table.rows[i].cells[column].innerHTML.replace("<br>", "")
        }
    }
    for (i = 1; i < table.rows.length; i++) { //pushes the data into an array
        data.push(table.rows[i].cells[column].innerHTML)
    }
    return data
}


