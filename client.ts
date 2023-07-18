namespace iceshop{

    export function hndlformular () {
        edit.addEventListener("click", editbtn);
        document.querySelector("#add")!.addEventListener("click", addbtn); 
        submit.addEventListener("click", sendTask);
    }

    export interface data  {
        [key: string]: FormDataEntryValue;
       };    
       
    let edit = document.createElement("button");   // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div");    // div element für to do erstellen
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p");    // p element für to do erstellen
    newP.setAttribute("id", "newp");
   let form: HTMLFormElement = document.querySelector('#myform')!;

    let divcontainer = <HTMLElement>document.querySelector("#div2");

    export let taskArray: String[] = [];

    // aufruf bei order button
     export function getData(): String[] {

        let todoArray: String[];

        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('Anzahl_Kugeln') as string;
        let input1 = formData.get('Sort') as string;
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
     query.set("collection", "Orders");
     query.set("data", JSON.stringify(json));
     await fetch("https://webuser.hs-furtwangen.de/~kupfersl/EIA2/Endabgabe/Database/?"  + query.toString()); 
    //  alert("Task Submited!");
   }

   export async function communicate(_url: RequestInfo): Promise<void> {
     let response: Response = await fetch(_url);
     let offer: string= await response.text();
     let gotdata: data = JSON.parse(offer);
     // gotdata is empty, offer is a string, cant read the stuff out
     console.log("this"+gotdata);
     console.log("Response", response);
     console.log("before"+ offer);
   }
   
   communicate("data.json");

   export function addbtn (e:any):any{
    divcontainer.classList.add("hidden");
    getData();

    document.getElementById("div1")!.appendChild(newdiv);
    document.querySelector("#div1")!.appendChild(newP);

    newP.innerHTML ="Anzahl Kugeln: " + taskArray[0] + ", <br> Sorte: " + taskArray[1] + ", <br>Souce: " + taskArray[2] + ", <br>Streusel: " + taskArray[3] + "  <br>Sahne: " + taskArray[4];
    e.preventDefault();

    newP.appendChild(edit);
}

function editbtn(): void {
    divcontainer.classList.remove("hidden");
    document.getElementById("div1")!.removeChild(newdiv);
    document.querySelector("#div1")!.removeChild(newP);
}

}