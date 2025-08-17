const todoList1 = [];

let todo = {

};

let todoHTML = ``;

function addTodo() {
	let input = document.getElementById('todo_input_1');
	let input_date = document.getElementById('input_date');
	if(input.value.trim() === '')
	{
		alert("You need to enter something");
		input.value = '';
	}
	else
	{
	todoList1.push({name: input.value, date: input_date.value});

	todoHTML = ``;
	for(let i = 0; i < todoList1.length; i++)
	{
		let todo = todoList1[i];
		todoHTML += `<p>${todo.name}</p><p>${todo.date} </p><button id = "todo-${i}" onclick = "delete_todo(${i})" class = "delete_button">Delete</button>`;
	}

	document.querySelector('.todoList').innerHTML = todoHTML;
	input.value = '';
	}
}

function delete_todo(number) {
	todoList1.splice(number, 1);

	todoHTML = ``;
	for(let i = 0; i < todoList1.length; i++)
	{
		let todo = todoList1[i];
		todoHTML += `<p>${todo.name}</p><p>${todo.date} </p><button id = "todo-${i}" onclick = "delete_todo(${i})" class = "delete_button">Delete</button>`;
	}

	document.querySelector('.todoList').innerHTML = todoHTML;
}