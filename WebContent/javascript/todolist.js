var ToDoList = function() {
	var task = {
		name: ko.observable(),
		description: ko.observable()
	};

	var tasks = ko.observableArray();

	var addTask = function() {
		console.log("addTask: name: " + task.name() + "; description: " + task.description());
		tasks.push({
			name: task.name(),
			description: task.description()
		});
	};

	var deleteTask = function(task) {
		// Array collection are not observables, just plain objects (this is probably useful to know)
		console.log("deleteTask: " + task.name + "; " + task.description);
		// Remove from the actual collection now
		tasks.remove(task);
	}

	var init = function() {
		ko.applyBindings(ToDoList);
	};

	$(init);

	return {
		tasks: tasks,
		task: task,
		addTask: addTask,
		deleteTask: deleteTask
	};
}();