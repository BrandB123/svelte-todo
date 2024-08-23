export function deleteTodo(title: string): void{
    let currentTodos = JSON.parse(localStorage.getItem("todos"));
    let deleteIndex: number; 
    currentTodos.forEach((todo: {title:string, description:string, completed:boolean}, index: number): void => {
        if (todo.title === title){
            deleteIndex = index;
        }
    });
    currentTodos.splice(deleteIndex, 1);
    currentTodos.length > 0 ? localStorage.setItem("todos", JSON.stringify(currentTodos)) : localStorage.clear();
}