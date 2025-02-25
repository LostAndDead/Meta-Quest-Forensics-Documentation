---
sidebar_position: 2
title: Basics of ADB
description: "Extracting data from a Meta Quest 3 using ADB"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Basics of ADB


:::info
Before you can procceed with this guide you must [Enable Developer Mode](/extraction/adb/developer_mode)
:::

## What is ADB?

ADB (Android Debug Bridge) is a command-line tool that allows you to communicate with an Android device from a computer. It is used by developers and advanced users to perform various tasks on an Android device, such as installing and debugging applications, transferring files, and accessing the device's internal storage.

## Setting up ADB

To use ADB to extract data from a Meta Quest 3, you need to install the Android SDK Platform Tools on your computer. These tools include the ADB command-line tool, which you can use to communicate with the device.

You can download the Android SDK Platform Tools from the [Android Developers website](https://developer.android.com/studio/releases/platform-tools).

Once you have downloaded the Android SDK Platform Tools, you need to extract the contents of the ZIP file to a folder on your computer. You can then open a command prompt or terminal window and navigate to the folder where you extracted the tools. All the ADB commands you run will be done from this location.

:::info
If you encounter any issues with any of the commands bellow you may need to download the Oculus ADB Drivers from the [Meta Quest Developer Dashboard](https://developers.meta.com/horizon/downloads/package/oculus-adb-drivers/).
:::

<Tabs>
  <TabItem value="command_line" label="Command Line" default>
    How to do it via command line
  </TabItem>
  <TabItem value="axiom" label="Magnet AXIOM">
    How to do it via Magnet AXIOM
  </TabItem>
</Tabs>