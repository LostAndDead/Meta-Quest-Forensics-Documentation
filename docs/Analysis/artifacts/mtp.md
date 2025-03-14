---
sidebar_position: 2
title: MTP Artifacts
description: "A list of artifacts that can be extracted from the Meta Quest 3 using MTP."
---

# What to expect

When analysing data extracted from the Meta Quest 3 using MTP, you can expect to find the following artifacts:

- Media files such as images, videos, and audio files.
- Documents such as PDFs, Word documents, and text files.
- Application OBB files.

Application specific artifacts that can be extracted from the Meta Quest 3 can be found in the [Applications](/analysis/artifacts/applications) section.

## Downloads

The devices download folder can be found at `/Downloads`. This folder contains all the files that have been downloaded to the device.

## Movies

The Movies folder can be found at `/Movies`. This folder on most Android devices contains videos recorded by 3rd party screen recording applications or other video files.

In the case of the Meta Quest 3, this folder contains a `.thumbnails` folder which contains thumbnails of videos watched on the device using the built in video player. Each thumbnail is named with a number followed by `.jpg`. How the numbers are assigned is unknown at this time.

## Screenshots

All screenshots taken on the device are stored in the `/Oculus/Screenshots` folder. The files name format is
```
app.id-YYYYMMDD-HHMMSS.jpg
```
Where `app.id` is the ID of the application that was screenshot `YYYYMMDD` is the date the screenshot was taken, and `HHMMSS` is the time the screenshot was taken. An example file name would be `com.oculus.vrshell-20220101-120000.jpg`.

## Recordings

All recordings taken on the device are stored in the `/Oculus/VideoShots` folder. The files name format is
```
app.id-YYYYMMDD-HHMMSS-0.mp4
```
Where `app.id` is the ID of the application that was open when the recording started, `YYYYMMDD` is the date the recording was taken, and `HHMMSS` is the time the recording was taken. An example file name would be `com.oculus.vrshell-20220101-120000-0.mp4`. The `-0` at the end of the file name is unknown at this time.

## Oculus Store Cube Maps

[Cube Maps](/glossary#cube-maps) used by the Oculus Store application when looking at apps with a 3D preview can be found in `/Android/Media/com.oculus.store/cubemaps`. The file names appear to be a UUID representing the app that the cube map is for.

## Application OBB Files

Application [OBB](/glossary#obb-file) files can be found in the `/Android/obb` folder. Not every application will have an OBB file, but those that do will store them in this folder under their package name. For example, the OBB file for the `games.b4t.epicrollercoasters.oculus` application would be stored in `/Android/obb/games.b4t.epicrollercoasters.oculus`.
