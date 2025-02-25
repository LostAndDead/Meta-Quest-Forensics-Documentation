---
sidebar_position: 1
title: Developer Mode
description: "Guide to enabling Developer Mode on a Meta Quest 3 as is required for ADB"
---

# Developer Mode

:::warning
Enabling Developer Mode by its self does not make your device more or less secure, however many of the options available in Developer Mode can be used to bypass security features and can severley effect the operation of your device. Do not mess with settings you do not understand or you may break your device.
:::

## What is Developer Mode?

Developer mode is a setting on the Meta Quest 3 (And all other Android Based Devices) that allows you to enable advanced features and settings that are not available in the standard user interface. This mode is intended for developers and advanced users who want to access additional tools and options for testing and debugging applications on the device.

## Why do I need Developer Mode?

Developer mode is required to enable USB debugging on the Meta Quest 3, which is necessary for using ADB to extract data from the device. Without developer mode enabled, you will not be able to connect the device to a computer and use ADB to access the device's internal storage.

## How to enable Developer Mode

Before you can enable developer mode on the Meta Quest 3, you need to belong to (or have created) a Meta Developer Organisation on the [Meta Quest Developer Dashboard](https://developers.meta.com/horizon/manage/).

For more information on how to create an organisation, see the [Meta Quest Developer Setup](https://developers.meta.com/horizon/documentation/native/android/mobile-device-setup/).

Once you have created an organisation, you can enable developer mode on the Meta Quest 3 by following these steps:

1. Open the Meta App on your connected mobile device
2. Tap on the headset icon on the top left
3. Open the Headset Settings menu
4. Tap on the Developer Mode option
5. Toggle the Developer Mode switch to enable it

Once you have enabled developer mode, you can connect the Meta Quest 3 to your computer via USB and use ADB to extract data from the device.

