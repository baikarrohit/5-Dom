//***  Examine Document Object *****//

//console.log(document.location);
//console.log(document.URL);
//console.log(document.title);
//document.title="DOM";
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.all);
//document.all[6].textContent ='Hello!';
//console.log(document.forms[0]);
//console.log(document.links);

//*** Get ElememntById ***//

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);

// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'goodbye';
// console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello Coders!</h3>'; 

// header.style.borderBottom = 'solid 4px #000';

// var Title = document.getElementsByClassName('title');
// Title[0].style.fontWeight = 'bold';
// Title[0].style.color = 'green';

var item = document.getElementsByClassName('list-group-item');

item[2].style.backgroundColor = "green";
for(i=0; i<item.length; i++){
    item[i].style.fontWeight = "bold";
}