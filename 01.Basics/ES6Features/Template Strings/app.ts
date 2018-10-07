var container = document.getElementById('container');

var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
}

var text = 
`<h1>
sample`;

container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`