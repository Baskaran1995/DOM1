parentNode

console.log(itemList.parentNode);

item.List.parentNode.style.backgroundColor ='#f4f4f4'

console.log(item.list.parentNode.parentNode.parentNode);

parentElement

console.log(itemList.parentElement();

item.List.parentElement.style.backgroundColor ='#f4f4f4'

console.log(item.list.parentElement.parentElement.parentElement);

childNodes

console.log(item.List.childNodes);

console.log(iitem.List.children[1]);

item.list.children[1].style.backgroundColor= 'yellow';

firstchild

console.log(itemlist.firstchild);

firstElementchild

console.log(itemlist.firstElementChild);

itemList.firstElementChild.textContent= 'Hello 1';

lastchild

console.log(itemlist.lastchild);

LastElementchild

console.log(itemlist.LastElementChild);

itemList.LastElementChild.textContent= 'Hello 4';

nextsiblings

console.log(itemlist.nextsiblings);

nextElementsiblings

console.log(itemlist.nextElementsiblings);

previoussiblings

console.log(itemlist.previoussiblings);

previousElementsiblings

console.log(itemlist.previousElementsiblings);

itemList.previousElementSiblings.style.color= 'green';

var newDiv = document.createElement('div');

newDiv.className ='hello';

newDiv.id='hello1';

newDiv.setAttribute('title','Hello Div');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivtext);

var container = document.querySelector('header .Container');

var h1 =document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontsize ='30px'

container.insertBefore(newDiv, h1);



