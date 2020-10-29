setTimeout(()=>{
    let paragraph=document.createElement("p");
    const text="hello world";
    let node=document.createTextNode(text);
    paragraph.appendChild(node);
    document.getElementById("add-par").appendChild(paragraph); // assuming its not every 5 seconds, but once after 5 seconds
}, 5000);