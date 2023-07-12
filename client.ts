namespace iceshop{

    export function hndlformular () {
        // trash.addEventListener("click", trshbtn);
        // edit.addEventListener("click", editbtn);
        document.querySelector("#add")!.addEventListener("click", addbtn); 
        // document.querySelector("#new")!.addEventListener("click", newbtn);
        submit.addEventListener("click", sendTask);
    }

    export interface data  {
        [key: string]: FormDataEntryValue;
       };    

    // let trash = document.createElement("button"); // delet button erstellen
    // trash.setAttribute("id", "trash");
    // trash.innerHTML = "Delete";
    // let edit = document.createElement("button");   // edit button erstellen
    // edit.setAttribute("id", "edit");
    // edit.innerHTML = "Edit";
    // let newdiv = document.createElement("div");    // div element für to do erstellen
    // newdiv.setAttribute("id", "newtask");
    // let newP = document.createElement("p");    // p element für to do erstellen
    // newP.setAttribute("id", "newp");
    export let form: HTMLFormElement = document.querySelector('#myform')!;

    // let trash = document.createElement("button"); // delet button erstellen
    // trash.setAttribute("id", "trash");
    // trash.innerHTML = "Delete";
    // let edit = document.createElement("button");   // edit button erstellen
    // edit.setAttribute("id", "edit");
    // edit.innerHTML = "Edit";
    // let newdiv = document.createElement("div");    // div element für to do erstellen
    // newdiv.setAttribute("id", "newtask");
    // let newP = document.createElement("p");    // p element für to do erstellen
    // newP.setAttribute("id", "newp");

    export let divcontainer = <HTMLElement>document.querySelector("#div2");

    export let taskArray: String[] = [];



    // aufruf bei order button
     export function getData(): String[] {

        let todoArray: String[];

        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('Anzahl_Kugeln') as string;
        let input1 = formData.get('Sorte') as string;
        let input2 = formData.get('Souce') as string;
        let input3 = formData.get('Streusel') as string;
        let input4 = formData.get('radio1') as string;

        todoArray = [input0, input1, input2, input3, input4];
        console.log("getData: " + todoArray);
        taskArray = todoArray;
        return taskArray;
    };

    console.log(getData)

    export interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
      }
      
    export let formData: FormData = new FormData(form);
    export let json: FormDataJSON = {};
      
    for (let key of formData.keys())
        if (!json[key]) {
            let values: FormDataEntryValue[] = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
        }
    
    export let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add"); 

    export async function sendTask(_event:Event): Promise<void> { //link zum versenden funktioniert nicht
    let formData: FormData = new FormData(form); 
     let query: URLSearchParams = new URLSearchParams(<any>formData);
     query.set("command", "insert");
     query.set("collection", "Tasks");
     query.set("data", JSON.stringify(json));
     await fetch("https://webuser.hs-furtwangen.de/~kupfersl/EIA2/Endabgabe/Database/?"  + query.toString()); 
     alert("Task Submited!");
   }

   export async function communicate(_url: RequestInfo): Promise<void> {
     let response: Response = await fetch(_url);
     let offer: string= await response.text();
     let gotdata: data = JSON.parse(offer);
     // gotdata is empty, offer is a string, cant read the stuff out
     console.log("this"+gotdata);
     console.log("Response", response);
     console.log("before"+offer);
     document.querySelector("#div1")!.innerHTML = "Aufgabe: "+ offer; //+ "  bis zum: "+ gotdata["date"]+ "  Kommentar: "+ gotdata["comment"]+ "  Wird gemacht von: "+ gotdata["person"];
   }

   communicate("data.json");

   export function addbtn (e:any):any{
    divcontainer.classList.add("hidden");
    getData();

    // document.getElementById("div1")!.appendChild(newdiv);
    // document.querySelector("#div1")!.appendChild(newP);

    // newP.innerHTML = "<input type=checkbox id=check>" + "Name: " + taskArray[0] + ", Aufgabe: " + taskArray[1] + ", <br>bis: " + taskArray[2] + ", Kommentar: " + taskArray[3] + "  <br>Status: " + taskArray[4];
    e.preventDefault();

    // newP.appendChild(trash);
    // newP.appendChild(edit);
}


}