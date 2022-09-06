const Todo = (p) => {
    const todoStyle = [];

    if(p.todo.complete){
        todoStyle.push("complete")
    }
    return (
    <div>
        <input 
            onChange={(e) => {
                p.toggleTodo(p.index);
            }}
            checked={p.todo.complete} 
            type="checkbox"
        />
        <p className={todoStyle.join(" ")
        }>{p.todo.text}</p>
        <button 
        onClick={(e) => {
            p.handleDelete(p.index);
            }}
        >
            Delete
        </button>
    </div>
    );
};

export default Todo;