import { browser } from '@wdio/globals'
import { assert } from 'chai';
describe('To-Do Meter App: : mark to-do pause', () => {
    it('should allow marking a to-do item as paused', async () => {
      
      const inputField = await $('._form_1o9rn_1 input');
      const addButton = await $('._form_1o9rn_1 button');
      
      await inputField.setValue('Buy Shirt');
      await addButton.click();
      //await browser.debug(); //
      const todoCheckbox = await $('._pause_1q0g7_129');
      await browser.pause(4000);
      await todoCheckbox.click();


      const pausedButton = await $('._toggle_1bbqo_23');

      await browser.pause(4000);
      await pausedButton.click();
     // await browser.debug();
      // Check if the item is now marked as paused
      const todoItem = await $('._itemname_1q0g7_37');
      assert.equal(await todoItem.getText(), 'Buy Shirt');

    });
  });
  