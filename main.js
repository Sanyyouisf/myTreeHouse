var myRequest = new XMLHttpRequest();
var TreeHouseContainer = document.getElementById("TreeHouseContainer");

function makeDom(xhrData){ 
	// console.log("my xhrData",xhrData);   
    var TreeHouseString ;
    var currentTreeHouse;
    for(var x = 0; x < xhrData.badges.length; x++) {
        currentTreeHouse = xhrData.badges[x];
        TreeHouseString += `<div class="col-sm-6 col-md-4">`;
        TreeHouseString += `<div class="thumbnail">`;
        TreeHouseString += `<img src=${xhrData.badges[x].icon_url} >`;
        TreeHouseString += `<p> ${xhrData.badges[x].name} </p>`;
        TreeHouseString += `</div></div>`;
    }
    TreeHouseContainer.innerHTML += TreeHouseString;
}


function executeThisCodeAfterFileLoaded(){
    var data = JSON.parse(this.responseText);
    makeDom(data);
    console.log("it works!", data);
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);

myRequest.open("GET", "https://teamtreehouse.com/sanyyousif.json");

myRequest.send();
console.log("myRequest", myRequest);


console.log("Last line in Js filr ", Date.now());