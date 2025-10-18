// Class for fetching TO DO data
export default class TodoService {
    static async fetchById(id) {
        if (typeof id !== "number" || id < 1) {
            console.log("Incorrect todoId");
            return;
        }

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

            if (!res.ok) {
                throw new Error(`HTTP Error occurred: ${res.status}`);
            }

            return await res.json();
        } catch (err) {
            console.log("Fetch Error (Todo):", err.message);
        }
    }
}