const url = "https://restcountries.eu/rest/v2/all";
const select = document.getElementById('country-list');
let countries = {};
let borders =[];
fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
   countries = data;
   buildSelect(data);
    document.querySelector('.flag').src = countries[156].flag;
    document.querySelector('.languages').innerHTML="";
    for(let i=0;i<countries[156].languages.length;i++){
        document.querySelector('.languages').innerHTML += "<li>"+countries[156].languages[i].name+"</li>";
    }
    document.querySelector('.area').innerHTML = countries[156].area+" sq. kms";
    document.querySelector('.capital').innerHTML = countries[156].capital;
    document.querySelector('.population').innerHTML = countries[156].population;
    document.querySelector('.currency').innerHTML = countries[156].currencies[0].name;
    document.querySelector('.country-list').options[157].selected="selected";
});
function buildSelect(d){
    for(let i=0;i<d.length;i++){
        let option = document.createElement('option');
        option.value=i;
        option.textContent = d[i].name;
        select.appendChild(option);
    }
}
select.addEventListener('change',loadInformation);
function loadInformation(e){
    let index = e.target.value;
    document.querySelector('.flag').src = countries[index].flag;
    document.querySelector('.languages').innerHTML="";
    for(let i=0;i<countries[index].languages.length;i++){
        document.querySelector('.languages').innerHTML += "<li>"+countries[index].languages[i].name+"</li>";
    }
    document.querySelector('.area').innerHTML = countries[index].area+" sq. kms";
    document.querySelector('.capital').innerHTML = countries[index].capital;
    document.querySelector('.population').innerHTML = countries[index].population;
    document.querySelector('.currency').innerHTML = countries[index].currencies[0].name;
}
