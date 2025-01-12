describe('Test Suite: Search Functionality Validation', () => {
    it('should perform a search for "New York" and validate the results', async () => {
        // Wait for the app to stabilize after launch
        await driver.pause(3000);

        // Access and interact with the search bar
        const searchInputField = await $('~Search'); // Locator for search bar
        await searchInputField.click();
        await searchInputField.setValue('New York'); // Enter search query
        await driver.pause(3000); // Wait for search results to load

        // Verify that search results are displayed
        const resultsContainer = await $('~Search Results'); // Locator for search results
        await expect(resultsContainer).toBeDisplayed(); // Assert results are visible

        // Clear the search and return to the home screen
        const clearSearchButton = await $('~Close Search'); // Locator for close button
        await clearSearchButton.click();
        await clearSearchButton.click(); // Double-click to ensure search is cleared
    });
});