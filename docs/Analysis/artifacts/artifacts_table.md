---
sidebar_position: 1
title: Master Artifacts Table
description: "A list of artifacts that can be extracted from the data."
hide_table_of_contents: true
---

<table>
    <tr>
        <th>Artifact</th>
        <th>Description</th>
        <th>Example</th>
        <th>Location</th>
        <th>Source</th>
    </tr>
    <tr>
        <td>Downloads</td>
        <td>The default download location for files downloaded from the internet.</td>
        <td>example.pdf</td>
        <td>/Downloads</td>
        <td><a href="/analysis/artifacts/mtp">MTP</a></td>
    </tr>
    <tr>
        <td>Movies</td>
        <td>The default location for videos recorded by 3rd party screen recording applications or other video files.</td>
        <td>example.mp4</td>
        <td>/Movies</td>
        <td><a href="/analysis/artifacts/mtp">MTP</a></td>
    </tr>
    <tr>
        <td>Thumbnails</td>
        <td>Thumbnails of videos watched on the device using the built in video player.</td>
        <td>27.jpg</td>
        <td>`/Movies/.thumbnails</td>
        <td><a href="/analysis/artifacts/mtp">MTP</a></td>
    </tr>
    <tr>
        <td>Screenshots</td>
        <td>All screenshots taken on the device.</td>
        <td>com.oculus.vrshell-20220101-120000.jpg</td>
        <td>/Oculus/Screenshots</td>
        <td><a href="/analysis/artifacts/mtp">MTP</a></td>
    </tr>
    <tr>
        <td>Recordings</td>
        <td>All recordings taken on the device.</td>
        <td>com.oculus.vrshell-20220101-120000-0.mp4</td>
        <td>/Oculus/VideoShots</td>
        <td><a href="/analysis/artifacts/mtp">MTP</a></td>
    </tr>
    <tr>
        <td>Cube Maps</td>
        <td>Cube Maps used by the Oculus Store application when looking at apps with a 3D preview.</td>
        <td>example.jpg</td>
        <td>/Android/Media/com.oculus.store/cubemaps</td>
        <td><a href="/analysis/artifacts/mtp">MTP</a></td>
    </tr>
    <tr>
        <td>OBB Files</td>
        <td>Application OBB files used by applications to store additional data such as textures, sounds, and other assets.</td>
        <td>example.obb</td>
        <td>/Android/obb</td>
        <td><a href="/analysis/artifacts/mtp">MTP</a></td>
    </tr>
    <tr>
        <td>Horizon User Settings</td>
        <td>The users settings for the Horizon app.</td>
        <td>settings-socialvr.xml</td>
        <td>/Android/Data/com.facebook.horizon/Horizon</td>
        <td><a href="/analysis/artifacts/applications">Applications</a></td>
    </tr>
    <tr>
        <td>Horizon Cached Assets</td>
        <td>The Horizon app caches its assets in many different locations.</td>
        <td>example.jpg</td>
        <td>/Android/Data/com.facebook.horizon/cache</td>
        <td><a href="/analysis/artifacts/applications">Applications</a></td>
    </tr>
    <tr>
        <td>BoxVR Cached Assets</td>
        <td>The BoxVR app caches its assets in the `/Android/Data/com.fitxr.boxvr/files/cache` directory.</td>
        <td>example.fitxr</td>
        <td>/Android/Data/com.fitxr.boxvr/files/cache</td>
        <td><a href="/analysis/artifacts/applications">Applications</a></td>
    </tr>
    <tr>
        <td>Toybox Logs</td>
        <td>Toybox stores logs of which demos the user has played.</td>
        <td>FirstEncounters_Logs_25-01-17_14-12-29</td>
        <td>/Android/Data/com.meta.curio.toybox/files/</td>
        <td><a href="/analysis/artifacts/applications">Applications</a></td>
    </tr>
</table>