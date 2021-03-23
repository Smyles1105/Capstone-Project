document.getElementById("add").addEventListener("click", addTask);


let taskID = 0;

function deleteTask()
{
	this.parentElement.remove();
	
}



function taskBackgroundChange(t, c)
{
	t.style.backgroundColor = c.value;

}


function addTask() {

	
	const task = document.createElement("div");
	task.classList.add("task");
	
	const colInputBtn = document.createElement("input");
	colInputBtn.type = "color";
	colInputBtn.name = "colBtn";
	colInputBtn.id = "colInputBtn";
	colInputBtn.classList.add("colInBtn");
	colInputBtn.defaultValue = "#000000";
	colInputBtn.addEventListener("input", (ev) => taskBackgroundChange(task, colInputBtn));

	const taskTitle = document.createElement("h2");
	taskTitle.appendChild(document.createTextNode(`Task #${++taskID}`));
	taskTitle.contentEditable = true;
	taskTitle.classList.add("taskTitle");

	const content = document.createElement("div");
	content.classList.add("content");
	

	const taskHeader = document.createElement("div");
	taskHeader.classList.add("taskHeader");
	taskHeader.addEventListener("mousedown", dragStart);

	const textArea = content.appendChild(document.createElement("textarea"));
	textArea.textContent = ("Click here to type...");

	
	task.appendChild(taskHeader);
	task.appendChild(colInputBtn);
	task.appendChild(taskTitle);
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
		resize: 'both',
		toolbar: 'text | colour | deleteTask',
		setup: function (editor) {
				editor.ui.registry.addButton('taskbackcolour',
				{
				icon: 'fill',
				tooltip: 'Change task background colour',
				onAction: function () {
					colInputButton = colInputBtn;
					colInputButton.click();
					
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
				items: 'bold italic underline strikethrough | superscript subscript | align'
			},
			colour:
			{
				icon: 'color-picker',
				tooltip: 'Background Colours',
				items: 'forecolor | backcolor | taskbackcolour'
			}
		}
	 });
}




