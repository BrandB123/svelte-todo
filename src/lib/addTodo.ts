export function addTodo(newTitle: string, newDescription: string): void{
    const newTodo = {title:newTitle, description:newDescription, completed:false}
    let validTitle = true;
    if (localStorage.length > 0){
        let currentTodos = JSON.parse(localStorage.getItem("todos"))
        
        currentTodos.forEach(todo => {
            if (todo.title === newTitle){
                validTitle = false;
            } 
        });
        validTitle === true ? currentTodos.push(newTodo) : alert("Todo items cannot share a name");
        localStorage.setItem("todos", JSON.stringify(currentTodos));
    } else {
        const newTodoArray = [newTodo];
        localStorage.setItem("todos", JSON.stringify(newTodoArray));
    }
}
