import { browser } from '@wdio/globals'
import { assert } from 'chai';

describe('Todometer App', () => {
  it('should open the Electron app and display the main title', async () => {
    const title = await browser.getTitle();
    assert.equal(title, 'todometer');
  });
});