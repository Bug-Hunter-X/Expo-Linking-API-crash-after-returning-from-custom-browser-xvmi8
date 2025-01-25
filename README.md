# Expo Linking API Crash

This repository demonstrates a bug in Expo's `Linking` API where the app crashes inconsistently after returning from an external URL opened using `Linking.openURL`.  The crash occurs specifically when a custom browser (not the default system browser) is used to open the URL.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app in Expo Go.
4. Tap the button to open a URL in a custom browser (e.g., Chrome, Firefox).
5. After returning to the app from the browser, observe the crash (inconsistently).

## Workaround (See `bugSolution.js`)

The provided solution demonstrates a method to mitigate the problem by adding a delay and error handling.