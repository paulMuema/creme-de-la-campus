function getInputValue(){

    let inputVal=document.getElementById("uid").value;
    let a=1;

    if(inputVal==1){
        document.getElementById("demo").innerHTML ="Roronoa Zoro";
        document.getElementById("demo1").innerHTML ="10000";
    }
    else if(inputVal==2)
    {
        document.getElementById("demo").innerHTML ="FRANKYYY!";
        document.getElementById("demo1").innerHTML ="0";  
    }
    else if(inputVal==3)
    {
        document.getElementById("demo").innerHTML ="Monkey D Luffy";
        document.getElementById("demo1").innerHTML ="10000";   
    }

    else if(inputVal==4)
    {
        document.getElementById("demo").innerHTML ="God Ussopp";
        document.getElementById("demo1").innerHTML ="10000";   
    }
    else if(inputVal==5)
    {
        document.getElementById("demo").innerHTML ="Tony Tony Chopper";
        document.getElementById("demo1").innerHTML ="10000";   
    }
    else if(inputVal==6)
    {
        document.getElementById("demo").innerHTML ="Nico Robin";
        document.getElementById("demo1").innerHTML ="20000";   
    }
    else if(inputVal==7)
    {
        document.getElementById("demo").innerHTML ="Nami";
        document.getElementById("demo1").innerHTML ="20000";   
    }
    else if(inputVal==8)
    {
        document.getElementById("demo").innerHTML ="Jinbei";
        document.getElementById("demo1").innerHTML ="0";   
    }
    else if(inputVal==9)
    {
        document.getElementById("demo").innerHTML ="Ekko";
        document.getElementById("demo1").innerHTML ="10000";   
    }
    else if(inputVal==10)
    {
        document.getElementById("demo").innerHTML ="Vinsmoke Sanji";
        document.getElementById("demo1").innerHTML ="7500";   
    }

     
    else{
        document.getElementById("demo").innerHTML ="No Records Found";
        document.getElementById("demo1").innerHTML ="0";
    }
    
}

