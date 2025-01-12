describe('Test Suite: Navigation and Interaction', () => {
    it('should navigate through sections and return to the home screen', async () => {
        // Wait for the app to stabilize after launch
        await driver.pause(3000);

        // Scroll down to reveal additional content
        await driver.execute('mobile: scroll', { direction: 'down' });

        // Navigate to the "My Lists" section
        const myListsButton = await $('~My lists'); // Locator for "My Lists"
        await myListsButton.click();
        await driver.pause(3000); // Wait for "My Lists" section to load

        // Navigate to the "History" section
        const historyButton = await $('~History'); // Locator for "History"
        await historyButton.click();
        await driver.pause(3000); // Wait for "History" section to load

        // Navigate to the "Nearby" section
        const nearbyButton = await $('~Nearby'); // Locator for "Nearby"
        await nearbyButton.click();
        await driver.pause(3000); // Wait for "Nearby" section to load

        // Return to the home screen by selecting the "Browse" option
        const browseButton = await $('~Browse'); // Locator for "Browse"
        await browseButton.click();

        // Scroll up to return to the top of the page
        await driver.execute('mobile: scroll', { direction: 'up' });
    });
});
