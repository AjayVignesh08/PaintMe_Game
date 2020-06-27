
var con=document.getElementById("container")
p1=document.createElement('p')
p2=document.createElement('p')
p3=document.createElement('p')
p4=document.createElement('p')
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

heart=document.getElementsByClassName('heart')
heart.innerHTML='<i class="fa fa-heart" aria-hidden="true"></i>'
