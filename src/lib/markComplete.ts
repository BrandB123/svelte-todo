export function markComplete(title: string): void{
    let currentTodos = JSON.parse(localStorage.getItem("todos"));
    let completeIndex: number;
    currentTodos.forEach((todo: {title:string, description:string, completed:boolean}, index: number): void => {
        if (todo.title === title){
            completeIndex = index;
        }
    });
    currentTodos[completeIndex].completed = currentTodos[completeIndex].completed ? false : true;
    localStorage.setItem("todos", JSON.stringify(currentTodos));
}