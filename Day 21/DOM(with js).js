function main(){
    const x=document.getElementById("main");
    const y=x.getElementsByTagName("p");
    document.getElementById("demo").innerHTML=
    'This is a called paragraph (index 0) is '+y[0].innerHTML;
}

function main1(){
    const j=document.getElementsByClassName("main1");
    const k=j.getElementsByTagName("p");
    document.getElementsByClassName("demo1").innerHTML=
    'This is a called paragraph (index 0) is '+k[0].innerHTML;
}