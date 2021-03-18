/*
i) DOM selection
ii) Event listener
iii) Creating element
iv basic validation
*/

const title=document.querySelector("#title");
const autor=document.querySelector("#author");
const year=document.querySelector("#year");
const btn=document.querySelector(".btn");
const book_list=document.querySelector(".book-list");
let temp=0;

btn.addEventListener('click', function(e){
	e.preventDefault();

	if(title.value=='' || author.value=='' || year.value=='')
	{
		alert('Type Something');
	}

	else
	{
		const newrow=document.createElement('tr');

		//Newtitle
		const newtitle =document.createElement('td');
		newtitle.innerHTML=title.value;
		newrow.appendChild(newtitle);

		//newAuthor
		const newAuthor=document.createElement('td');
		newAuthor.innerHTML=author.value;
		newrow.appendChild(newAuthor);

		//newYear
		const newYear=document.createElement('td');
		newYear.innerHTML=year.value;
		newrow.appendChild(newYear);

		book_list.appendChild(newrow);
		console.log(newrow);

	}

	if(temp%2==0)
	{
	}
	temp++;

	
});