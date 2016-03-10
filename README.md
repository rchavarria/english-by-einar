# english-by-einar

A hybrid application for Android to learn English with Einar

# Requirements

- Android SDK
- Cordova
- Ionic

# How to test

`gulp test`

# How to build

# How to run

In a browser: `ionic serve -c -s`. `-c` to see console logs, `-s` to see server logs.

In a device or emulator: `ionic run -c -s`.

# How to publish

### Build the app

`cordova build --release android`

First, you have to build the Ionic app:

`ionic build --release android` build an .apk file to `platforms/android/ant-build/Cordova-App-release-unsigned.apk`. It's very important the `--release` flag, to be able to publish it in the Android Market.

### Sign the `.apk` and align it

Run the bash script provided:

`./sign-and-align.sh`



# References
