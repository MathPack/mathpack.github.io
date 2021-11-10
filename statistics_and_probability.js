function pictograph_maker(){
    var parent = document.getElementById("pictograph_maker")

    let container = parent.children[1]
    let rows = parseInt(parent.children[2].value)

    let table = document.createElement("table")
    for(i = 0; i <= rows; i++){
        let tr = document.createElement("tr")
        if(i == 0){
            let th1 = document.createElement("th")
            th1.innerHTML = "Name"
            th1.contentEditable = "True"
            let th2 = document.createElement("th")
            th2.innerHTML = "Data"
            th2.contentEditable = "True"
            tr.appendChild(th1)
            tr.appendChild(th2)
        }else{
            for(j = 0; j < 2; j++){
                let td = document.createElement("td")
                td.contentEditable="true"
                tr.appendChild(td)
            }
        }
        console.log(tr)
        table.appendChild(tr)
    }
    container.appendChild(table)

    console.log(container.children)
}