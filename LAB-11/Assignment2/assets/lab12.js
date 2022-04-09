let selection = document.querySelector('select');
let container = document.getElementById('backgroung_Image')
console.log(container)

selection.addEventListener('change', ()=>{
    var city = selection.options[selection.selectedIndex].value
    if(city=="surat"){
        container.classList.remove("ahmedabad","rajkot","goa")
        container.classList.add("surat");
    }
    else if(city=="ahmedabad"){
        container.classList.remove("surat","rajkot","goa")
        container.classList.add("ahmedabad");
    }
    else if(city=="rajkot"){
        container.classList.remove("surat","ahmedabad","goa")
        container.classList.add("rajkot");
    }
    else{
        container.classList.remove("surat","rajkot","ahmedabad")
        container.classList.add("goa");
    }

})

