// Function to fetch TO DO by id

function fetchTodoById(id) {
    if (typeof(id) !== 'number' || id < 1)
        return console.log("Incorrect todoId")

    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

// Function to fetch user by id
function fetchUserById(id) {
    if (typeof(id) !== 'number' || id < 1)
        return console.log("Incorrect userId")

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

// Save responses as variables
const responses = await Promise.all([fetchTodoById(1), fetchUserById(1)]);
const firstResponse = await Promise.race([fetchTodoById(1), fetchUserById(1)]);

// Show results in console
console.log("The result of Promise.all:\n", responses);
console.log("The result of Promise.race:\n",firstResponse);