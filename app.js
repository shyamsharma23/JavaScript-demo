const fetchTodo =() =>{
    const url = "http://localhost:5000/api/v1/todos";
    fetch(url)
    .then((res) => console.log(res))
    console.log("Hello")

}

fetchTodo();