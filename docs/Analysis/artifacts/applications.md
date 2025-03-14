---
sidebar_position: 6
title: Applications
description: "Application specific artifacts that can be extracted from the Meta Quest 3."
hide_table_of_contents: true
---

<details>
    <summary>com.facebook.horizon</summary>

    The Horizon app is the social hub for the Meta Quest 3. It allows users to connect with friends, join events, and discover new experiences. The app is  designed to be a safe and welcoming space for users to interact with each other and explore the Meta Quest 3 ecosystem.

    ## Source: [MTP](/extraction/mtp)

    ### User Settings

    The users settings for the Horizon app can be found in the `/Android/Data/com.facebook.horizon/Horizon` directory. The file `settings-socialvr.xml` contains    the user's settings for the app.

    ### Cached Assets

    The Horizon app caches its assets in many different locations, they are:

    - `/Android/Data/com.facebook.horizon/cache`
    - `/Android/Data/com.facebook.horizon/files/downloaded_assets`
    - `/Android/Data/com.facebook.horizon/files/hz_asset_cache`
    - `/Android/Data/com.facebook.horizon/files/hz_asset_processing_cache`
    - `/Android/Data/com.facebook.horizon/files/hz_audio_file_cache`

    Only the `cache` directory contains files that can be opened and viewed. The other directories contain Unity asset files that require Unity to open.

    These caches assets can be used to determine what worlds the user has visited and what assets they loaded. From my own analysis I was able to find assets from various worlds I had visited and assets from the Horizon app its self.

    ## Source: [Cloud](/extraction/cloud)

    ### Worlds Visited

    JSON Path: `/meta_horizon_worlds/worlds_visited.json`

    HTML Location `Meta Horizon > Meta Horizon Worlds > Worlds Visited`

    Contains a list of all the worlds the user has visited on the Horizon app. Each entry contains some or all of the following information:

    - Description (String)
    - Name (String)
    - Achievements (Array)
      - Status (String)
      - LastUpdated (String)
    - Progress (Array)
      - Value (String)
      - Creaton Time (String)
      - Variable Name (String)
    
    The JSON version also contains media files that are associated with the worlds visited. This seems to just be the world thumbnail.

    ### Worlds Saved

    JSON Path: `/meta_horizon_worlds/worlds_saved.json`

    HTML Location `Meta Horizon > Meta Horizon Worlds > Worlds Saved`

    These files contain the same data as the worlds visited files but for worlds that the user has saved, it also adds a `Saved On` timestamp. It is to be noted that these worlds aren't necessarily saved by the user, they could be automatically saved by the app or suggestions on the home screen.

    ### Worlds Progress

    JSON Path: `/meta_horizon_worlds/worlds_progress.json`

    HTML Location `Meta Horizon > Meta Horizon Worlds > Worlds Progress`

    Contains the same information as the worlds visited files but only for worlds that the user has made progress in.

    ### Worlds Created

    JSON Path: `/meta_horizon_worlds/worlds_created.json`

    HTML Location `Meta Horizon > Meta Horizon Worlds > Worlds Created`

    Contains basic information about worlds that the user has created. This includes:

    - Name (String)
    - Accepted Roles (String)
      - Accepted Roles is always "World Owner" in my testing.
    - Invitation (String)
      - Seems to be the same as the Name field in my testing.
    - Updated Time (String)

    ### Worlds Privacy Settings
    
    JSON Path: `/meta_horizon_worlds/worlds_privacy_settings.json`

    HTML Location `Meta Horizon > Meta Horizon Worlds > Worlds Privacy Settings`

    Contains the privacy settings for the user while on the Horizon app. The settings are:

    - Show Active Status Setting (On/Off)
    - Show Location Setting (On/Off)
    - Updated Time (String)
</details>

<details>
    <summary>com.fitxr.boxvr</summary>

    Source: [MTP](/extraction/mtp)

    BoxVR is a VR fitness game that allows users to punch and dodge their way through a series of workouts. The game is designed to be a fun and engaging way to get fit and stay active.

    ### Cached Assets

    The BoxVR app caches its assets in the `/Android/Data/com.fitxr.boxvr/files/cache` directory. The exact logic behind what is cached and when is unknown at this time and the cache is made up of .fitxr files. Each file starts with a type identifier followed by a UUID. 

</details>

<details>
    <summary>com.meta.curio.toybox</summary>

    Source: [MTP](/extraction/mtp)

    Toybox is a demo application used to showcase the capabilities of the Meta Quest 3. The app allows users to interact with virtual objects and experiment with different features of the device.

    ### Logs

    Toybox stores logs of which demos the user has played in the `/Android/Data/com.meta.curio.toybox/files/` directory. The content of the logs is a lot of technical information that isn't particularly useful. The file name on the other hand contains the demo ran, the date and the time the demo was ran. An example file name would be `FirstEncounters_Logs_25-01-17_14-12-29`. This file name tells us that the user ran the First Encounters demo on the 17th of January 2025 at 14:12:29.

</details>