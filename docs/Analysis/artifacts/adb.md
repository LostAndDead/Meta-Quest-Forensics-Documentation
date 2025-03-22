---
sidebar_position: 3
title: ADB Artifacts
description: "A list of artifacts that can be extracted from the Meta Quest 3 using ADB."
---

# What to expect

ADB is a command-line tool that allows you to create device backups and dump system data, it is important to note that an ADB backup contains a lot of data that is the same as what is found in an MTP backup. However, some artifacts that can only be extracted using ADB, as almost all of the differences are application-specific. They are listed in the [Applications](/analysis/artifacts/applications) section.

## Platform Shared Prefs

Located in the `sp` folder of many different applications is a file called `OVR_platform_shared_prefs_XXXXXXXXXXXXX.xml	`, each one contains a different set of connection secrets, keys and device ID. This file is used by the applications to access their respective entries in the Android Shared Preferences system. This is used by applications to store settings and other data that needs to persist between application launches. These files contain the credentials the applications use to authenticate with the Shared Preferences system.

## Dumpsys

One of the methods of extracting data via ADB is to use the `dumpsys` command, this section will cover some of the artifacts that can be extracted using this command. A large portion of this data will contain errors and essentially empty files, this is because the device is not rooted and the `dumpsys` command is not able to access all the data it would be able to if the device was rooted. This does not cover every file that can be extracted using the `dumpsys` command, only the ones that are relevant or unique to the Meta Quest 3, many are the same as all other Android devices.

### Notifications

The `notification.txt` file contains a list of all the notifications that have been displayed on the device. Each entry contains a lot of values, some of the more interesting ones are:

- onPkg: The package name of the application that sent the notification.
- icon: The icon that was displayed with the notification.
- seen: If the notification has been seen by the user.

### OVR Remote Service

The `OVRRemoteService` file contains a load of information about connected devices, based on the information available I believe these to be the controllers. It contains each device connected and a lot of information about them such as:

- Device ID
- Devices Type (Left or Right)
- Firmware Version
- ImuModel
- Battery Level (when last connected)
- Tracking Session Metrics
  - Contains metrics from the 3 most recent tracking sessions,
  - Does not contain any positional data, only metrics tracking quality and connection times.

### Sensor Service

The `sensorservice.txt` file contains a lot of information about the sensors on the device at the time of the dump, this includes a list of sensors, in my case there were 2 sensors listed, Double Tap and IMU. The Double Tap sensor can be assumed to be the sensor that triggers when you double-tap the side of the headset to switch between the passthrough and the home environment. The IMU sensor is the Inertial Measurement Unit, this is the sensor that tracks the  movement of the headset. It contains data from the accelerometer and gyroscope as well as the current calibration status of the sensors.

In the future I will be looking to build a tool to process and visualise this data in a more user-friendly way, however, this is outside of my initial project scope.

### Settings

The `settings.txt` file contains all the Oculus-related system settings, some of these settings are:

- Guardian settings
- Telemetry settings
- Pass-through settings

### Tracking Environment

The `TrackingEnvironment.txt` file contains [SLAM](https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping) (Simultaneous Localization and Mapping), Odemetry, Submaps, Anchors, Translation and Rotation data. In short, this file contains information about how the device is tracking its environment and where it is in that environment. [SLAM](https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping) is an incredibly complex system that uses the device's sensors to build a map of the environment and track the device's position within that environment.

There is another file called `TrackingService.txt` that contains more information about the tracking service, it contains details relating more to the device position and orientation in the environment rather than the environment itself.

In the future I will be looking to build a tool to process and visualise this data in a more user-friendly way, however, this is outside of my initial project scope.