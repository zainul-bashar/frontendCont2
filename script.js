let form = document.getElementById("issued");
let tableContent = document.getElementById("tableContent");
let iname = document.getElementById("i");
let bname = document.getElementById("b");
let btn = document.getElementById("btn");
function addData(event){
    event.preventDefault();
    let ivalue=iname.value;
    let bvalue=bname.value;
   let tr=document.createElement("tr");
   tr.innerHTML= 
   <td>2</td>+
   <td>ivalue</td>+
   <td>iname</td>+
   <td>status</td>;
   tr.appendChild(tableContent);
   console.log(tableContent);

}


