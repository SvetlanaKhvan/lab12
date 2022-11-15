console.log("Hello, World!");
let h1_arr = document.getElementsByTagName("h1")

let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"

let hr = document.createElement("hr")

let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"

let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"

let ul = document.createElement("ul")
let li1 = document.createElement("li")
li1.innerHTML = "find elements in the DOM (<b>5 points</b>);"
li1.style.color = "green"
ul.appendChild(li1)
let li2 = document.createElement("li")
li2.innerHTML = "create/add/remove elements (<b>5 points</b>);"
li2.style.color = "purple"
ul.appendChild(li2)
let li3 = document.createElement("li")
li3.innerHTML = "change content of the elements (<b>5 points</b>);"
li3.style.color = "green"
ul.appendChild(li3)
let li4 = document.createElement("li")
li4.innerHTML = "change styles of the elements (<b>5 points</b>);"
li4.style.color = "purple"
ul.appendChild(li4)
let li5 = document.createElement("li")
li5.innerHTML = "change attributes of the elements (<b>5 points</b>);"
li5.style.color = "green"
ul.appendChild(li5)
let li6 = document.createElement("li")
li6.innerHTML = "change classes of the elements (<b>5 points</b>)."
li6.style.color = "purple"
ul.appendChild(li6)

let div = document.createElement("div")
let p2 = document.createElement("p")
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
div.appendChild(p2)
let a1 = document.createElement("a")
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")
a1.innerText = "link."
div.appendChild(a1)

let hr1 = document.createElement("hr")

let h_2 = document.createElement("h2")
h_2.innerHTML = "Submission"
h_2.style.color = "red"


let p3 = document.createElement("p")
p3.innerText = "To submit your work, follow these instructions:"

let ul1 = document.createElement("ul")
let li_new = document.createElement("li")
li_new.innerHTML = "Create a new repository on Github, named <b>lab12</b> (1 point)."
li_new.style.color = "green"
ul1.appendChild(li_new)
let li_new1 = document.createElement("li")
li_new1.innerHTML = "Clone this repository to your local machine and work inside it.;"
li_new1.style.color = "purple"
ul1.appendChild(li_new1)
let li_new2 = document.createElement("li")
li_new2.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; Hello World tag with message (<b>1 point</b>).;"
li_new2.style.color = "green"
ul1.appendChild(li_new2)
let li_new3 = document.createElement("li")
li_new3.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain our program (assignment) described above (<b>1 point</b>).;"
li_new3.style.color = "purple"
ul1.appendChild(li_new3)
let li_new4 = document.createElement("li")
li_new4.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).;"
li_new4.style.color = "green"
ul1.appendChild(li_new4)
let li_new5 = document.createElement("li")
li_new5.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).;"
li_new5.style.color = "purple"
ul1.appendChild(li_new5)
let li_new6 = document.createElement("li")
li_new6.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).;"
li_new6.style.color = "green"
ul1.appendChild(li_new6)

let hr2 = document.createElement("hr")

document.body.appendChild(hr)
document.body.appendChild(h2)
document.body.appendChild(p1)
document.body.appendChild(ul)
document.body.appendChild(div)
document.body.appendChild(hr1)
document.body.appendChild(h_2)
document.body.appendChild(p3)
document.body.appendChild(ul1)
document.body.appendChild(hr2)
