function calculate(){
    var a=parseInt(document.getElementById("book1").value);
    if (a>100) {
        alert("please enter correct value")
    }
    else
    {
        var obtain=a;
        document.getElementById("obtain").innerHTML=obtain;
        var per=obtain/100*100;
        document.getElementById("per").innerHTML=per;
        if (a>40) {
        document.getElementById("remarks").innerHTML="Pass";
        }
        else
        {
            document.getElementById("remarks").innerHTML="Fail";
        }
        if (obtain>=80){
            document.getElementById("grade").textContent="A";
        }
        else if (obtain>=70){
            document.getElementById("grade").textContent="B";
        }
        else if (obtain>=60){
            document.getElementById("grade").textContent="C";
        }
        else if (obtain>=50){
            document.getElementById("grade").textContent="D";
        }
        else if (obtain>=40){
            document.getElementById("grade").textContent="E";
        }
        else if (obtain>=30){
            document.getElementById("grade").textContent="F";
        }
    }
    
}
