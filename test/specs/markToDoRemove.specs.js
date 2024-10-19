import { browser } from '@wdio/globals'
import { assert } from 'chai';
describe('To-Do Meter App', () => {
    it('should allow marking a to-do item as remove', async () => {
      // Assuming there's a checkbox to mark the to-do as done
      const inputField = await $('._form_1o9rn_1 input');
      const addButton = await $('._form_1o9rn_1 button');
      
      await inputField.setValue('Visit Goa');
      await addButton.click();

      const toDoRemove = await $('._delete_1q0g7_113');
      await browser.pause(2000);
      await toDoRemove.click();

      await browser.pause(4000);

      const todoItem = await $('._itemname_1q0g7_37');
      if (await todoItem.isExisting())
      {
        
        assert.notEqual(await todoItem.getText(),'Visit Goa');
      }
    
    });
  });
