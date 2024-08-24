export function addTodo(newTitle: string, newDescription: string): void{
    const newTodo = {title:newTitle, description:newDescription, completed:false}
    if (localStorage.length > 0){
        let currentTodos = JSON.parse(localStorage.getItem("todos"))
        currentTodos.push(newTodo);
        console.log(currentTodos);
        localStorage.setItem("todos", JSON.stringify(currentTodos));
    } else {
        const newTodoArray = [newTodo];
        localStorage.setItem("todos", JSON.stringify(newTodoArray));
    }
}
