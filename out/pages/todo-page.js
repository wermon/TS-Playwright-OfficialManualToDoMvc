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
exports.TodoPage = void 0;
class TodoPage {
    constructor(page) {
        this.page = page;
        this.page = page;
        this.inputBox = this.page.locator('input.new-todo');
        this.todoTitles = this.page.getByTestId('todo-title');
    }
    goto() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto('https://demo.playwright.dev/todomvc/');
        });
    }
    createTodo(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inputBox.fill(title);
            yield this.inputBox.press('Enter');
        });
    }
}
exports.TodoPage = TodoPage;
//# sourceMappingURL=todo-page.js.map