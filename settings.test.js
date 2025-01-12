describe('Test Suite: Settings Management', () => {
    it('should deactivate all settings toggles and navigate back to the home page', async () => {
        // Wait for the app to initialize after launch
        await driver.pause(3000);

        // Open the settings menu
        const settingsMenuButton = await $('~Settings'); // Locator for settings icon
        await settingsMenuButton.click();

        // Locate and deactivate all toggle switches
        const toggleSwitches = await $$('~Settings Toggle'); // Locator for toggle switches
        for (let toggleSwitch of toggleSwitches) {
            const toggleState = await toggleSwitch.getAttribute('checked'); // Check toggle state
            if (toggleState === 'true') {
                await toggleSwitch.click(); // Disable if currently enabled
            }
        }

        // Navigate back to the home screen
        const navigateBackButton = await $('~Back'); // Locator for back button
        await navigateBackButton.click();
    });
});
