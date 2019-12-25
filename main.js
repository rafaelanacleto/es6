class TodoList {

    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push("Novo Todo");
        console.log(this.todos);
    }

}

const MinhaLista = new TodoList();

//Criar evento de onclick do botão da tela
document.getElementById('newTodo').onclick = function() {
    MinhaLista.addTodo();
}