import { browser } from '@wdio/globals'
import { assert } from 'chai';
describe('To-Do Meter App', () => {
    it('should allow marking a to-do item as completed', async () => {
      // Assuming there's a checkbox to mark the to-do as done
      const inputField = await $('._form_1o9rn_1 input');
      const addButton = await $('._form_1o9rn_1 button');
      
      await inputField.setValue('Buy Watch');
      await browser.pause(2000);
      await addButton.click();
      //await browser.debug(); //
      const todoCheckbox = await $('._complete_1q0g7_161');
      await browser.pause(2000);
      await todoCheckbox.click();

      await browser.pause(2000);

      const completedButton = await $('._toggle_1bbqo_23');
      await browser.pause(4000);
      await completedButton.click();
      await browser.pause(4000);
     // await browser.debug();
      // Check if the item is now marked as completed
      const todoItem = await $('._itemname_1q0g7_37');
      assert.equal(await todoItem.getText(), 'Buy Watch');

    });
  });
  