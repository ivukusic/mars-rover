/* eslint-disable no-undef */

describe('E2E tests', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should open modal, add movement and add rover ', async () => {
    await expect(element(by.id('home-rover-item'))).not.toBeVisible();
    await element(by.id('home-add-rover')).tap();
    await element(by.id('add-rover-movement-input')).typeText('LMRMMLMRRML');
    await element(by.id('add-rover-button')).multiTap(2); // multiTap to remove focus from text input
    await expect(element(by.id('home-rover-item'))).toBeVisible();
  });
});
