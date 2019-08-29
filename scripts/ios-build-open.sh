#!/bin/sh
echo "Building js build"
npm run build 
echo "Removing old iOS build"
rm -R ios
echo "Building new iOS Build"
ionic capacitor add ios
echo "Openning Xcode"
npx cap open ios 