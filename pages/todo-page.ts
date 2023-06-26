import { Page, Locator } from "@playwright/test"

export class TodoPage {
    public readonly inputBox: Locator;
    public readonly todoTitles: Locator;


    constructor(public readonly page: Page){
        this.page = page;
        this.inputBox = this.page.locator('input.new-todo');
        this.todoTitles = this.page.getByTestId('todo-title');
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/');
    }

    async createTodo(title: string){
        await this.inputBox.fill(title);
        await this.inputBox.press('Enter');
    }

}