document.getElementById("h1").innerHTML = "Lab7 Assignment";
let hr1=document.createElement('hr')
document.body.appendChild(hr1)

let task = document.createElement('h2');
task.textContent = "Task";
document.body.appendChild(task);

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:This is the first paragraph!";
p1.setAttribute("id", "first-paragraph");
document.body.appendChild(p1);

let thelist = document.createElement('ul');
thelist.innerHTML = 
    '<li>find elements in the DOM <strong>(5 points)</strong></li>' +
    '<li>create/add/remove elements <strong>(5 points)</strong></li>' +
    '<li>change content of the elements <strong>(5 points)</strong></li>' +
    '<li>change styles of the elements <strong>(5 points)</strong></li>' +
    '<li>change attributes of the elements <strong>(5 points)</strong></li>' +
    '<li>change classes of the elements <strong>(5 points)</strong></li>';
thelist.setAttribute("class", "my-list");
document.body.appendChild(thelist);


let hr2=document.createElement('hr');
document.body.appendChild(hr2);

let submission = document.createElement('h2');
submission.textContent = "Submission";
document.body.appendChild(submission);

let p2= document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p2);

let thelist2= document.createElement('ul');
thelist2.innerHTML = 
    '<li>Create a new repository on Github, named <strong>lab7 (1 point)</strong>.</li>'+
    '<li>Clone this repository to your local machine and work inside it.</li>' +
    '<li>Create a new HTML file, called <strong>index.html</strong>, which has only one < h1 > tag with "Hello, World!" message <strong>(1 point).</strong></li>' +
    '<li>Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above <strong>(1 point).</strong></li></li>' +
    '<li>Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section).</li>' +
    '<li>Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file <strong>(5 points)</strong>.</li>'+
    '<li>After you finish your work, submit it to the Github <strong>(2 points)</strong>.';
thelist2.setAttribute("class", "my-list2");
document.body.appendChild(thelist2);


let hr3=document.createElement('hr');
document.body.appendChild(hr3);



function changeColor() {
    document.getElementById("h1").style.color = "blue";
    let h2=document.getElementsByTagName('h2');
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = "red";
    }
    document.getElementById("first-paragraph").style.color="black";
    
    let listitems = document.querySelectorAll('li');
    for (let i = 0; i < listitems.length; i++) {
        if (i % 2 == 0) {
          listitems[i].style.color = 'green';
        } else {
          listitems[i].style.color = 'purple';
        }
  }

}
    

changeColor()