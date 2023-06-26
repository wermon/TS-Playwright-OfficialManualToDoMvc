import { test, expect } from '../fixtures/todo-fixture'

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

  test('should allow me to add todo items', async ({todoPage}) => {
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