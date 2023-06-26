import { test, expect} from '@playwright/test';
import { TodoPage } from '../pages/todo-page';

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('New Todo', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
        todoPage = new TodoPage(page);
        await todoPage.goto();
  });

  test('should allow me to add todo items', async () => {
    // Create 1st todo.
    await todoPage.createTodo(TODO_ITEMS[0]);

    // Make sure the list only has one todo item.
    await expect(todoPage.todoTitles).toHaveText([
      TODO_ITEMS[0]
    ]);

    // Create 2nd todo.
    await todoPage.createTodo(TODO_ITEMS[1]);

    // Make sure the list now has two todo items.
    await expect(todoPage.todoTitles).toHaveText([
        TODO_ITEMS[0],
        TODO_ITEMS[1]
      ]);
  });
});