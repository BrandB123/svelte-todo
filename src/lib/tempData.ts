interface TodoItem {
    title: string;
    description: string;
    completed: boolean;
}

export const tempData = [
    {
     title: "Todo Item 1", 
     description: "description 1 lorem ipsum blah blah blah", 
     completed: false
    },
    {
     title: "Todo Item 2", 
     description: "description 2 lorem ipsum blah blah blah", 
     completed: true
    },
    {
     title: "Todo Item 3", 
     description: "description 3 lorem ipsum blah blah blah", 
     completed: false
    }
] as TodoItem[];