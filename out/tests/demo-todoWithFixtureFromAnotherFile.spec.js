"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_fixture_1 = require("../fixtures/todo-fixture");
const TODO_ITEMS = [
    'buy some cheese',
    'feed the cat',
    'book a doctors appointment'
];
(0, todo_fixture_1.test)('should allow me to add todo items', ({ todoPage }) => __awaiter(void 0, void 0, void 0, function* () {
    // Create 1st todo.
    yield todoPage.createTodo(TODO_ITEMS[0]);
    // Make sure the list only has one todo item.
    yield (0, todo_fixture_1.expect)(todoPage.todoTitles).toHaveText([
        TODO_ITEMS[0]
    ]);
    // Create 2nd todo.
    yield todoPage.createTodo(TODO_ITEMS[1]);
    // Make sure the list now has two todo items.
    yield (0, todo_fixture_1.expect)(todoPage.todoTitles).toHaveText([
        TODO_ITEMS[0],
        TODO_ITEMS[1]
    ]);
}));
//# sourceMappingURL=demo-todoWithFixtureFromAnotherFile.spec.js.map