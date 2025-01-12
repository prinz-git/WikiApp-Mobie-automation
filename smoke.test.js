describe('Test Suite: APK Loading and App Launch Verification', () => {
    it('should confirm the app loads and launches successfully', async () => {
        // Pause to allow the app sufficient time to initialize
        await driver.pause(5000); // Wait for 5 seconds

        // Retrieve and log the current activity to verify app launch
        const launchedActivity = await driver.getCurrentActivity();
        console.log('Launched Activity:', launchedActivity);

        // Assert that the current activity matches the expected activity
        expect(launchedActivity).toContain('MainActivity'); // Validate expected activity
    });
});
