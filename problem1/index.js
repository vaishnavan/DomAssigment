async function getData(){
    var myArrData = await fetch("https://restcountries.eu/rest/v2/all").then((res) => res.json());
    mydisplay(myArrData);
    
}

function mydisplay(result){
    console.log(result)
    const containerItem = document.createElement("div");
    containerItem.className="container"
    const createInput = document.createElement("input");
    createInput.setAttribute("type","text");
    createInput.setAttribute("placeholder", "Filter country")
    createInput.setAttribute("id","myInput");
    createInput.setAttribute("onkeyup","myFunction()");
    document.body.appendChild(createInput)
    result.forEach((element,i) => {
        const wrapper = document.createElement("div");
        wrapper.className="country-card";
        containerItem.appendChild(wrapper);
        const displayCountry = document.createElement("h1");
        displayCountry.innerHTML = element.name
        const imgCountry = document.createElement("img");
        imgCountry.setAttribute("src", element.flag)
        imgCountry.style=`
            width:320px;
            height:200px;
        `
        wrapper.appendChild(displayCountry);
        wrapper.appendChild(imgCountry);
    });
    document.body.appendChild(containerItem);
}

function myFunction() {
    var input;
    input = document.getElementById("myInput").value;
    console.log(input);
    // filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName("li");
    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none";
    //     }
    // }
}


getData();