"use strict";
var iceshop;
(function (iceshop) {
    function hndlformular() {
        // trash.addEventListener("click", trshbtn);
        edit.addEventListener("click", editbtn);
        document.querySelector("#add").addEventListener("click", addbtn);
        // document.querySelector("#new")!.addEventListener("click", newbtn);
        iceshop.submit.addEventListener("click", sendTask);
    }
    iceshop.hndlformular = hndlformular;
    ;
    // let trash = document.createElement("button"); // delet button erstellen
    // trash.setAttribute("id", "trash");
    // trash.innerHTML = "Delete";
    let edit = document.createElement("button"); // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div"); // div element für to do erstellen
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p"); // p element für to do erstellen
    newP.setAttribute("id", "newp");
    let form = document.querySelector('#myform');
    let divcontainer = document.querySelector("#div2");
    iceshop.taskArray = [];
    // aufruf bei order button
    function getData() {
        let todoArray;
        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('Anzahl_Kugeln');
        let input1 = formData.get('Sort');
        let input2 = formData.get('Souce');
        let input3 = formData.get('Streusel');
        let input4 = formData.get('radio1');
        todoArray = [input0, input1, input2, input3, input4];
        console.log("getData: " + todoArray);
        iceshop.taskArray = todoArray;
        return iceshop.taskArray;
    }
    iceshop.getData = getData;
    ;
    console.log(getData);
    iceshop.formData = new FormData(form);
    iceshop.json = {};
    for (let key of iceshop.formData.keys())
        if (!iceshop.json[key]) {
            let values = iceshop.formData.getAll(key);
            iceshop.json[key] = values.length > 1 ? values : values[0];
        }
    iceshop.submit = document.querySelector("#add");
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "insert");
        query.set("collection", "Orders");
        query.set("data", JSON.stringify(iceshop.json));
        await fetch("https://webuser.hs-furtwangen.de/~kupfersl/EIA2/Endabgabe/Database/?" + query.toString());
        //  alert("Task Submited!");
    }
    iceshop.sendTask = sendTask;
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);
        // gotdata is empty, offer is a string, cant read the stuff out
        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1").innerHTML = "Anzahl Kugeln: " + offer + " Sorte : " + gotdata["Sorte"] + "  Souce: " + gotdata["Souce"] + "  Sahne: " + gotdata["radio1"];
    }
    iceshop.communicate = communicate;
    communicate("data.json");
    function addbtn(e) {
        divcontainer.classList.add("hidden");
        getData();
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Anzahl Kugeln: " + iceshop.taskArray[0] + ", <br> Sorte: " + iceshop.taskArray[1] + ", <br>Souce: " + iceshop.taskArray[2] + ", <br>Streusel: " + iceshop.taskArray[3] + "  <br>Sahne: " + iceshop.taskArray[4];
        e.preventDefault();
        // newP.appendChild(trash);
        newP.appendChild(edit);
    }
    iceshop.addbtn = addbtn;
    // new cutomer orders
    // function newbtn(){
    //     divcontainer.style.setProperty("visibility", "visible");
    // }
    function editbtn() {
        divcontainer.classList.remove("hidden");
        document.getElementById("div1").removeChild(newdiv);
        document.querySelector("#div1").removeChild(newP);
    }
})(iceshop || (iceshop = {}));
//# sourceMappingURL=client.js.map