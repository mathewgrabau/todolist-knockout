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

	var init = function() {
		ko.applyBindings(ToDoList);
	};

	$(init);

	return {
		tasks: tasks,
		task: task,
		addTask: addTask
	};
}();