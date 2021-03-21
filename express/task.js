document.getElementById("add").addEventListener("click", addTask);


let taskID = 0;

function deleteTask()
{
	this.parentElement.remove();
	
}

	const colourInput = document.createElement("input");
	colourInput.type = "color";
	colourInput.addEventListener("oninput", taskBackgroundChange);



function taskBackgroundChange(t, c)
{
	t.style.backgroundColor = c.value;

}


function addTask() {

	
	const task = document.createElement("div");
	task.classList.add("task");
	

	const taskTitle = document.createElement("h2");
	taskTitle.appendChild(document.createTextNode(`Task #${++taskID}`));
	taskTitle.contentEditable = true;

	const content = document.createElement("div");
	content.classList.add("content");
	content.appendChild(taskTitle);

	const taskHeader = document.createElement("div");
	taskHeader.classList.add("taskHeader");
	taskHeader.addEventListener("mousedown", dragStart);

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("deleteButton");

	const delButIcon = document.createElement("i");
	delButIcon.classList.add("fas", "fa-trash");
	deleteButton.appendChild(delButIcon);
	deleteButton.addEventListener("mousedown", deleteTask);

	const textArea = content.appendChild(document.createElement("textarea"));
	textArea.textContent = ("Click here to type...");

	
	task.appendChild(taskHeader);
	task.appendChild(content);
	
	

	 document.getElementById("tasks").appendChild(task);
	 

	//TinyMCE
	tinymce.init({
		selector: '.task textarea',
		plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
		toolbar_mode: 'floating',
		menubar: 'false',
		elementpath: 'false',
		wordcount: 'false',
		toolbar: 'text | colour | deleteTask',
		setup: function (editor) {
			editor.ui.registry.addButton('taskbackcolour',
			{
			icon: 'fill',
			tooltip: 'Change task background colour',
			onAction: function () {

				colourInput.click();
				colourInput.addEventListener("oninput", taskBackgroundChange);
				taskBackgroundChange(task, colourInput);
			}
			});

			editor.ui.registry.addButton('deleteTask',
			{
				icon: '',
				tooltip: 'Delete Task',
				onAction: function () {
					task.remove();
				}
			}
			);
		},
		toolbar_groups: 
		{
			text: 
			{
				icon: 'change-case',
				tooltip: 'Text tools',
				items: 'bold italic underline strikethrough | superscript subscript | align | text-color highlight-bg-color'
			},
			colour:
			{
				icon: 'color-picker',
				tooltip: 'Background Colours',
				items: 'backcolor | taskbackcolour'
			}
		}
	 });
}




