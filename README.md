# Automated Testing for the Wikipedia Android App

This project leverages JavaScript, WebdriverIO, and Appium to execute automated tests on the Wikipedia Android application.

## Installation Steps

### Step 1: Install WebdriverIO CLI
Run the following command to install WebdriverIO on your command line:
```bash
npm install --save-dev @wdio/cli
```

### Step 2: Install Appium Service for WebdriverIO
Add the Appium service for WebdriverIO:
```bash
npm install --save-dev @wdio/appium-service
```

### Step 3: Install the Appium Client
Install the Appium client library:
```bash
npm install appium
```

## Setting Up the Environment

### Step 1: Start an Android Emulator
1. Open Android Studio.
2. Launch an Android emulator.

### Step 2: Verify the Emulator is Running
Use the following command to confirm the emulator is active:
```bash
adb devices
```

### Step 3: Start the Appium Server
Run the Appium server using the command:
```bash
appium
```

## Running the Tests
Execute all WebdriverIO tests on the Wikipedia Android App with this command:
```bash
npx wdio run wdio.conf.js
```
