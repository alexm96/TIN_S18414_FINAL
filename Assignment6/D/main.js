document.getElementById("input-text").addEventListener("click", (event)=>{
    event.preventDefault();
const tableToAddTo=document.getElementById("insert-here");
const row=tableToAddTo.insertRow();
textPart=row.insertCell(0);

textPart.innerText=(document.getElementById("inputter").value);
document.getElementById("inputter").value=""
}
)