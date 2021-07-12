var ans;
var choosen;
var sum=0;
var t=10;
var tt;
function start()
{
    t=11;
    document.getElementById("popup").style.display="none";
    document.getElementById("restarter").style.display="block";
    document.getElementById("tm").style.display="block";
    ans=Math.floor((Math.random() * 10) + 1);
    tt=setInterval(timer,1000);

    //document.getElementById("qh").innerHTML="Guess Correct Number";
    //document.getElementById("ques").style.background="white";
    document.getElementById("op1").innerHTML=ans;
    document.getElementById("op2").innerHTML=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op3").innerHTML=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op4").innerHTML=Math.floor((Math.random() * 10) + 1);
    //option suffle
    document.getElementById("op1").style.order=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op2").style.order=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op3").style.order=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op4").style.order=Math.floor((Math.random() * 10) + 1);
    
}

function timer()
{
    t-=1;
    document.getElementById("timer").innerText=t;
    if(t<1){
        clearTimeout(tt);
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="Red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Times Up!!";
    }
    
}

function s1(){
    choosen=document.getElementById("op1").innerHTML;
    clearTimeout(tt);
    if(ans==choosen)
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
    }
}

function s2(){
    clearTimeout(tt);
    choosen=document.getElementById("op2").innerHTML;
    if(ans==choosen)
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
    }
}

function s3(){
    clearTimeout(tt);
    choosen=document.getElementById("op3").innerHTML;
    if(ans==choosen)
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
    }
}

function s4(){
    clearTimeout(tt);
    choosen=document.getElementById("op4").innerHTML;
    if(ans==choosen)
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
    }
}




