// Class for fetching User data
export default class UserService {
    static async fetchById(id) {
        if (typeof id !== "number" || id < 1) {
            console.log("Incorrect userId");
            return;
        }

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            if (!res.ok) {
                throw new Error(`HTTP Error occurred: ${res.status}`);
            }

            return await res.json();
        } catch (err) {
            console.log("Fetch Error (User):", err.message);
        }
    }
}