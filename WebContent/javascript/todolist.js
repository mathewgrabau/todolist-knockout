var ToDoList = function() {
	var task = {
		name: ko.observable(),
		description: ko.observable(),
		priority: ko.observable()
	};

	var tasks = ko.observableArray();

	var clearTask = function() {
		task.name(null);
		task.description(null);
		task.priority("1");
	};

	var addTask = function() {
		console.log("addTask: name: " + task.name() + "; description: " + task.description());
		tasks.push({
			name: task.name(),
			description: task.description(),
			status: ko.observable('new'),
			priority: task.priority()
		});
		clearTask();
	};

	var deleteTask = function(task) {
		// Array collection are not observables, just plain objects (this is probably useful to know)
		console.log("deleteTask: " + task.name + "; " + task.description);
		// Remove from the actual collection now
		tasks.remove(task);
	};

	var completeTask = function(task) {
		console.log('completeTask ' + task.name);
		// set status for the task to complete
		task.status('complete');
	};

	var sortByPriority = function() {
		console.log("Sorting by priority");
		/* Re-sort the array by the priority */
		tasks.sort(function(left, right) {
			return left.priority == right.priority ? 
				0 : (left.priority < right.priority ? -1 : 1 );
		});
	};

	var sortByName = function() {
		console.log('Sorting by name');
		// Re-sort the array by the name
		tasks.sort(function(left, right) {
			return left.name === right.name ? 
				0 : (left.name < right.name ? -1 : 1);
		});
	};

	var init = function() {
		ko.applyBindings(ToDoList);
	};

	$(init);

	return {
		tasks: tasks,
		task: task,
		addTask: addTask,
		deleteTask: deleteTask,
		completeTask: completeTask,
		sortByPriority: sortByPriority,
		sortByName: sortByName
	};
}();