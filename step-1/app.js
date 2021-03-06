var TodoApp = {
	list: function (items) {
		items.forEach(function(item){
			console.log('item:', item);
		});
	},

	filters: function (filters) {
		filters.forEach(function(filter){
			console.log('filter:', filter);
		});
	}
}
TodoApp.TodoItem = function (description){
	this.description = description;
	this.isDone = false;
	this.created = new Date();
}

TodoApp.TodoItem.prototype.done = function() {
	this.isDone = true;
}

TodoApp.TodoItem.prototype.setUndone = function() {
	this.isDone = false;
}

// Todo Items Factory
TodoApp.TodoFactory = {
	create: function(description) {
		var todoItem = new TodoApp.TodoItem(description);
		return todoItem;
	}
}

// example usage
var myTodo = TodoApp.TodoFactory.create("buy milk");
console.log(myTodo.description);
console.log(myTodo.isDone);
console.log(myTodo instanceof TodoApp.TodoItem);
