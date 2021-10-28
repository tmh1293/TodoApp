import { ItemTodo } from './itemTodo.js'

const taskList = [];
class MainForm {
    $container;
    $header;
    $form;
    $input;
    $btnAdd;
    $taskToComplete;
    $listGroup;
    
    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add("container");      
        this.$form = document.createElement('form');
        this.$form.addEventListener("submit",this.handleSubmit)
        this.$input = document.createElement('input');
        this.$input.placeholder = "Enter new todo";
        this.$input.classList.add("input")
        this.$btnAdd = document.createElement('button');
        this.$btnAdd.innerHTML = "Add";
        this.$btnAdd.classList.add("btnAdd")
        

        this.$taskToComplete = document.createElement('div');
        this.$taskToComplete.innerHTML = "All tasks are done."
        this.$taskToComplete.style.fontSize = "24px";
        this.$taskToComplete.style.lineHeight = "50px";
        
        this.$listGroup = document.createElement('ul');
    }

    removeTask = (taskName) => {
        var index = taskList.indexOf(taskName);
        if (index !== -1) {
            taskList.splice(index, 1);
        }
        this.resultTask(taskList.length)
    }

    addTask = (item) => {
        taskList.push(item)
        this.resultTask(taskList.length)
    }

    resultTask = (qty) => {
        if(qty != 0){
            this.$taskToComplete.innerHTML = `You have ${qty} tasks to complete`;
        }else{
            this.$taskToComplete.innerHTML = `All tasks are done.`;
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault();     
        const itemTodo = new ItemTodo(this.$input.value,this.removeTask,this.addTask);
        this.$listGroup.appendChild(itemTodo.render());
        this.addTask(this.$input.value);
        this.$input.value = "";
    }



    render(){

        this.$form.appendChild(this.$input)
        this.$form.appendChild(this.$btnAdd)
        this.$container.appendChild(this.$form);

        this.$container.appendChild(this.$taskToComplete);
        this.$container.appendChild(this.$listGroup);
        return this.$container;
    }
}

export { MainForm }