// Using of static methods of TodoService and UsersService classes
import TodoService from './TodoService.js';
import UserService from './UsersService.js';

const responses = await Promise.all([
    TodoService.fetchById(1),
    UserService.fetchById(1)
]);

const firstResponse = await Promise.race([
    TodoService.fetchById(1),
    UserService.fetchById(1)
]);

console.log("The result of Promise.all:\n", responses);
console.log("The result of Promise.race:\n", firstResponse);