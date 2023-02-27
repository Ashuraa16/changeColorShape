import "./styles.css";
var backcolor=document.getElementById('btn1');
var shape=document.getElementById('btn2');
var colr=document.getElementById("myDiv");
var shp1=document.getElementById('innerdiv1');
var shp2=document.getElementById('innerdiv2');
var shp3=document.getElementById('innerdiv3');
console.log(colr);

var i=1;
var j=1;

backcolor.addEventListener('click',function(){
    if(i%3==1){
        console.log(i);
        colr.style.backgroundColor="green";
        i++;
    }
    else if(i%3==2){
        console.log(i);
        colr.style.backgroundColor="black";
        i++;
    }
    else if(i%3==0){
        console.log(i);
        colr.style.backgroundColor="pink";
        i++;
    }
});


shape.addEventListener('click',function(){
    if(j%3==1){
        console.log(j);
        shp3.style.display="none";
        shp2.style.display="none";
        shp1.style.display="block";
        j++;
    }
    else if(j%3==2){
        console.log(j);
        shp1.style.display="none";
        shp3.style.display="none";
        shp2.style.display="block";
        j++;
    }
    else if(j%3==0){
        console.log(j);
        shp2.style.display="none";
        shp1.style.display="none";
        shp3.style.display="block";
        j++;
    }
    
});




