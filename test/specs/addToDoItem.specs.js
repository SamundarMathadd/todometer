import { browser } from '@wdio/globals'
import { assert } from 'chai';
describe('To-Do meter: add to-do item', () => {
    it('should allow adding a new to-do item', async () => {

      const inputField = await $('._form_1o9rn_1 input');
      const addButton = await $('._form_1o9rn_1 button');
      
      await inputField.setValue('Buy groceries');
      await browser.pause(4000);
      await addButton.click();
      await browser.pause(4000);

      // Verify that the new item is in the list
      const todoItems = await $$('._itemname_1q0g7_37') ;
      if (todoItems.length > 0) {
        const lastTodoItem = todoItems[todoItems.length - 1]; // Get the last item
        
        // Assert that the text of the last item is the expected one
        assert.equal(await lastTodoItem.getText(), 'Buy groceries');
    } else {
        assert.fail('No to-do items found.');
    }
    });
  });
  