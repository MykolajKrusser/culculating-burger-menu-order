document.getElementById("result").onclick = getResult; //access to div with id result to show the sum
getResult(); //call function
function getResult(){
    var menu = document.getElementsByClassName("menu"); // make a list of all checkboxes
    var cost = 0;
    var cal = 0;
    for (var i = 0; i < menu.length; i++){ //loop every filled checkbox
        if(menu[i].checked){
            cost += Number(menu[i].getAttribute("data-cost")); //sum of values
            cal += Number(menu[i].getAttribute("data-cal"));
        }
    }
    document.getElementById("cost").innerHTML = cost + "$"; //sum results display in div results
    document.getElementById("cal").innerHTML = cal +"cal";
}