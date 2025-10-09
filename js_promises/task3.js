// Function to fetch TO DO by id using async/await

async function fetchTodoById(id) {
    if (typeof(id) !== 'number' || id < 1)
        return console.log("Incorrect todoId");

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (!res.ok)
            throw new Error(`HTTP Error occurred: ${res.status}`);

        return await res.json();
    }
    catch(err) {
        console.log("Fetch Error:", err.message);
    }
}

// Function to fetch user by id using async/await
async function fetchUserById(id) {
    if (typeof(id) !== 'number' || id < 1)
        return console.log("Incorrect userId");

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!res.ok)
            throw new Error(`HTTP Error occurred: ${res.status}`);

        return await res.json();
    }
    catch(err) {
        console.log(err.message);
    }
}

// Save responses as variables
const responses = await Promise.all([fetchTodoById(1), fetchUserById(1)]);
const firstResponse = await Promise.race([fetchTodoById(1), fetchUserById(1)]);

// Show results in console
console.log("The result of Promise.all:\n", responses);
console.log("The result of Promise.race:\n",firstResponse);