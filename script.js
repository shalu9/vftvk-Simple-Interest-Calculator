function show(){
    var output = document.getElementById("result");
    output.style.display = "block";
}

function validate(){
    var p = Number(document.getElementById("principal").value);
    if(p<1){
        alert("Please enter a positive integer");
        document.getElementById("principal").focus();
        return;
    }
}

function display_rate(){
    var slider = document.getElementById("rate");
    var output = document.getElementById("enteredRate");
    output.innerHTML = slider.value + "%";
}

function compute(){
    validate();
    var p = Number(document.getElementById("principal").value);
    var r = Number(document.getElementById("rate").value);
    var t = Number(document.getElementById("years").value);
    var s = p*r*t/100;
    var y = new Date().getFullYear() + t;
    document.getElementById("p").innerHTML = "" + p;
    document.getElementById("r").innerHTML = "" + r;
    document.getElementById("s").innerHTML = "" + s;
    document.getElementById("y").innerHTML = "" + y;
    show();
}
