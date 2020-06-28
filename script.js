
var con=document.getElementById("container")
p1=document.createElement('p')
p1.id="circle1"
p1.setAttribute("onclick",`circlefn(document.getElementById("circle1"))`)
p2=document.createElement('p')
p2.id="circle2"
p2.setAttribute("onclick",`circlefn(document.getElementById("circle2"))`)
p3=document.createElement('p')
p3.id="circle3"
p3.setAttribute("onclick",`circlefn(document.getElementById("circle3"))`)
p4=document.createElement('p')
p4.id="circle4"
p4.setAttribute("onclick",`circlefn(document.getElementById("circle4"))`)
h1=document.createElement('h1')
h1.innerText='Level 1'

p1.classList.add("circle")
p2.classList.add("circle")
p3.classList.add("circle")
p4.classList.add("circle")


con.appendChild(h1)
con.appendChild(p1)
con.appendChild(p2)
con.appendChild(p3)
con.appendChild(p4)


var division1=document.createElement('span')
division1.id='one'
division1.setAttribute("onclick",`colorchange(document.getElementById("one"))`)

var division2=document.createElement('span')
division2.id='two'
division2.setAttribute("onclick",`colorchange(document.getElementById("two"))`)
var division3=document.createElement('span')
division3.id='three'
division3.setAttribute("onclick",`colorchange(document.getElementById("three"))`)
var division4=document.createElement('span')
division4.id='four'
division4.setAttribute("onclick",`colorchange(document.getElementById("four"))`)
var division5=document.createElement('span')
division5.id='five'
division5.setAttribute("onclick",`colorchange(document.getElementById("five"))`)
var division6=document.createElement('span')
division6.id='six'
division6.setAttribute("onclick",`colorchange(document.getElementById("six"))`)

scre=document.getElementById("score")


division1.innerText=''
con.appendChild(division1)
division2.innerText=''
con.appendChild(division2)
division3.innerText=''
con.appendChild(division3)
division4.innerText=''
con.appendChild(division4)
division5.innerText=''
con.appendChild(division5)
division6.innerText=''
con.appendChild(division6)


division1.setAttribute("style","background-color:red;border-top-left-radius: 20px;border-bottom-left-radius: 20px;")
division2.setAttribute("style","background-color:green")
division3.setAttribute("style","background-color:blueviolet")
division4.setAttribute("style","background-color:palevioletred")
division5.setAttribute("style","background-color:chartreuse")
division6.setAttribute("style","background-color:brown;border-top-right-radius: 20px;border-bottom-right-radius: 20px;")

var clr = new Array();
clr[0] = "blueviolet";
clr[1] = "green";
clr[2] = "brown";
clr[3] = "chartreuse";
clr[4] = "palevioletred";
clr[5] = "red"

var level=new Array();
level[0]="Level 1"
level[1]="Level 2"
level[2]="Level 3"
level[3]="Level 4"
level[4]="Level 5"
level[5]="Level 6"
level[6]="Level 7"
level[7]="Level 8"
level[8]="Level 9"
level[9]="Level 10"


circle1=document.getElementById("circle1")
circle2=document.getElementById("circle2")
circle3=document.getElementById("circle3")
circle4=document.getElementById("circle4")


first=document.getElementById("first")
middle=document.getElementById("middle")
last=document.getElementById("last")

function randomcolor()
{
   randomColor1 = Math.floor(Math.random() * clr.length);
   randomColor2 = Math.floor(Math.random() * clr.length);
   randomColor3 = Math.floor(Math.random() * clr.length);
   randomColor4 = Math.floor(Math.random() * clr.length);
  circle1.style.backgroundColor=clr[randomColor1];
  circle2.style.backgroundColor=clr[randomColor2];
  circle3.style.backgroundColor=clr[randomColor3];
  circle4.style.backgroundColor=clr[randomColor4];
  chk1=circle1.style.backgroundColor=clr[randomColor1];
  chk2=circle2.style.backgroundColor=clr[randomColor2];
  chk3=circle3.style.backgroundColor=clr[randomColor3];
  chk4=circle4.style.backgroundColor=clr[randomColor4];
  
}

timing=5000

myVar = setTimeout(clearcircle, timing);
function clearcircle() {
    document.getElementById("circle1").removeAttribute("style");
    document.getElementById("circle2").removeAttribute("style");
    document.getElementById("circle3").removeAttribute("style");
    document.getElementById("circle4").removeAttribute("style");
  }

  variable = ''
function circlefn(arg){
    arg.style.borderColor = "yellow";
    variable = arg
}

function colorchange(color){
    variable.style.backgroundColor =color.style.backgroundColor;
}
 i=1
 count=0
 sum=0
 total=0
 myvar=0
 scre.setAttribute("style","text-align: center;justify-content: center;")
function check(){

    if((circle1.style.backgroundColor==chk1)&&
        (circle2.style.backgroundColor==chk2)&&
       ( circle3.style.backgroundColor==chk3)&&
       (circle4.style.backgroundColor==chk4)
        )
        {
            
            h1.innerText=level[i]
            i=i+1;
            alert('Going to Next Level')
            sum=sum+100
            
            sum.innerText=sum
            
            scre.innerText=''
            scre.append(sum)
            randomcolor()
            myVar = setTimeout(clearcircle, timing);
            timing=timing-500
            console.log(timing)
            if(level[i]==9)
            {
                alert("You Won Total Score is " +sum)
            }
        }
        else{
            if(count==0){
            first.setAttribute("style","color:white") 
            count=count+1
            return
        }
            if(count==1)
            {middle.setAttribute("style","color:white")
            count=count+1
            return
            }
            else{
                last.setAttribute("style","color:white")
            }
            
            alert("Wrong Guess!!!, Total Score is " + sum)
            location.reload();
        }
}

function restart(){
    location.reload();
}
