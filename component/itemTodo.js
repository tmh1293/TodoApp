class ItemTodo {
    $container;
    $input;
    $itemName;
    $btnDelete;

    item;
    fncQtyTask;
    rvmTask;
    addTask;
    constructor (item,rmvTask,addTask) {
        this.rvmTask = rmvTask;
        this.addTask = addTask;
        this.item = item;
        this.$container = document.createElement('li');

        this.$col = document.createElement('div');
        this.$col.style.padding = "7px";
        this.$input = document.createElement('input');
        this.$input.type = 'checkbox';
        this.$input.addEventListener('change', this.handleCheckbox)

        this.$itemName = document.createElement('span');
        this.$itemName.innerHTML = this.item;

        this.$btnDelete = document.createElement('button');
        this.$btnDelete.classList.add("btnDelete");
        this.$btnDelete.innerHTML = "Delete";
        this.$btnDelete.addEventListener("click", this.handleDelete)

    }

    handleCheckbox = () => {
        if(this.$input.checked){
            this.$itemName.style.textDecoration = "line-through";
            this.rvmTask(this.item)
        }
        else{
            this.$itemName.style.textDecoration = "none";
            this.addTask(this.item)
        }
    }

    handleDelete = () => {
        this.rvmTask(this.item)
        this.$li.remove();
    }

    render() {
        this.$col.appendChild(this.$input);
        this.$col.appendChild(this.$itemName);
        this.$container.appendChild(this.$col)
        this.$container.appendChild(this.$btnDelete);
        return this.$container;
    }
}

export { ItemTodo }
