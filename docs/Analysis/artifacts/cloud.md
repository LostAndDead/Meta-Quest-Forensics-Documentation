---
sidebar_position: 4
title: Cloud Artifacts
description: "A list of artifacts that can be extracted from the Meta Cloud."
---

# What to expect

When analysing data extracted from the Meta Cloud, you can expect to find the following artifacts:

- Activity Across Meta Platforms
- Profile Information
- Followers/Friends
- Chat History
- Device Information
- User Preferences

There is no guarantee that all of these artifacts will be present in the data, as it will vary depending on the user's activity. There may also be additional artifacts not listed here. Feel free to [contribute](/contributing) if you have discovered artifacts that are not listed here.

Application specific artifacts that can be extracted from the Meta Cloud can be found in the [Applications](/analysis/artifacts/applications) section.

# Formats

The Meta Cloud data can be exported as either JSON files or a more user-friendly HTML format. Both formats contain the same information, but the HTML format is easier to read and navigate. The JSON format is more suitable for automated processing. The summaries below will show the relevant information for both formats.

The JSON format often contains more information than the HTML format as it has some descriptions and context that the HTML format lacks.

## Emails

JSON Path `/other_information_about_you/emails_we_sent_to_your_oculus_account_email_address.json`

HTML Location `Profile information > Other information about you > Emails that we sent to your Oculus account email address`

Details relating to emails that were sent to the user regarding their Meta account. These entries contain the following information:

- Time Sent (Timestamp)
- Email Type (String)
  - This type value refers to an internal email type and may not be useful for analysis, but it can be used to identify the purpose of the email.
- Email Address (Email)
- Was Send Successful (True/False)
- Language (Locale Code)
- First Name (String)
- Surname (String)
- Locale (Locale Code)
- Name (String)

## Current and Past Usernames

JSON Data Path `/other_information_about_you/current_and_past_usernames.json`

HTML Location `Profile information > Other information about you > Current and past usernames`

Contains information about the current and past usernames of the user. These entries contain the following information:

- Username (String)
- Start Time (Timestamp)
- End Time (Timestamp)
  - This field will be empty if the username is still in use.

## Current and Past Profile Photos

JSON Path `/other_information_about_you/current_and_past_profile_photos.json`

JSON Media Path `/posts/media/your_posts`

HTML Location `Profile information > Other information about you > Current and past profile photos`

Contains a list of all the profile photos that the user has used. These entries contain the following information:

- Upload Time (Timestamp)
- Type of profile picture (String)
- Profile Picture (String/Image)

## Profile Details

JSON Path `/meta_horizon_profile/profile_details.json`

HTML Location `Profile information > Meta Horizon Profile > Profile details`

Contains the user's profile details. These entries contain the following information:

- Username (String)
- Meta Horizon profile ID (Number)
- Language (String)
- Display Name (String)

## Social Connections

JSON Path `/social_connections/connections_details.json`

HTML Location `Following and followers > Social connections > Connections details`

Contains information about the user's social connections. Contains two lists, one for the users that the target user is following and one for the users that are following the target user. These only contain the users username.

## Devices

JSON Path `/device_information/devices.json`

HTML Location `Security and login information > Device information > Devices`

Contains the Meta devices that have been used to access the Meta Cloud. This is not every device that logged in, only the Meta devices such as the Meta Quest 2 or Meta Quest 3. These entries contain the following information:

- Device Type (String)
- Headset Serial Number (String)
- Update Time (Timestamp)

## Online Status History

JSON Path `/device_information/online_status_history.json`

HTML Location `Security and login information > Device information > Online status history`

Contains details relating to the online status on the users devices. These entries contain the following information:

- Last periodic status check (Timestamp)
- Voice setting
  - In my example it was listed as "Start", further investigation is needed to determine what this field represents.
- Sessions in VR
  - In my example it was listed as "0" despite the device being used for VR sessions. Unsure as to why at this time.
- Sharing auto sync preference (On/Off)
- Serial number (String)

## VR Device Sync Data

JSON Path `/device_information/vr_device_sync_data.json`

HTML Location `Security and login information > Device information > VR device sync data`

Contains information regarding the online sync status of the users VR devices. These entries contain the following information:

- Device name (String)
- Last sync time (Timestamp)
- Device setup time (Timestamp)
- Installed apps
  - Contains a list of app names that are installed on the device.

## Active Sessions

JSON Path `/security_and_login_information/active_sessions.json`

HTML Location `Security and login information > Security and login information > Active sessions`

Contains a list of IP addresses that have active sessions for the user account. It also contains the time this session was created.

## Login History

JSON Path `/security_and_login_information/login_history.json`

HTML Location `Security and login information > Security and login information > Login history`

Contains a list of all the logins to the Meta Account. These entries contain the following information:

- Was login successful (True/False)
- IP Address (IP Address)
- User Agent (String)

## Location History

JSON Path `/security_and_login_information/location_history.json`

HTML Location `Security and login information > Security and login information > Location history`

Contains a history of locations what the user has connected to the Meta Account from. This could be via the headset or a PC/Mobile Phone. These entries contain the following information:

- Latitude and Longitude (Long/Lat)
- First Seen (Timestamp)
- Last Seen (Timestamp)
- Last Week Seen (Timestamp)
- Initial IP Address (IP Address)
- Number of Unique Weeks (Number)
- Time Vetted (Timestamp)
- Vetted (True/False)

## Achievements

JSON Path `/your_apps_and_content/achievements.json`

HTML Location `Apps and Websites off Meta accounts > Your apps and content > Achievements`

Contains a list of achievements that the user has earned. These entries contain the following information:

- Update Time (Timestamp)
- App Name (String)
- Description (String)
- Name (String)

## Recently Viewed Items

JSON Path `/your_apps_and_content/recently_viewed_items.json`  

HTML Location `Apps and Websites off Meta accounts > Your apps and content > Recently viewed items`

Contains a list of applications the user has recently viewed. Based on the data I have seen, this list is not exhaustive and only contains a few recent entries, they entries are generated when you view an app in the store. The entries only contain the app name.

## Apps

JSON Path `/your_apps_and_content/apps.json`

HTML Location `Apps and Websites off Meta accounts > Your apps and content > Apps`

A list of all the applications the user has ever interacted with. It seems to contain a lot of entries that are not applications but instead brands and models of laptops, keyboard and other hardware. None of these entries related to any devices I used, my best guess is that they were adverts or product placement of some kind. The entries contain the following information:

- Last Used (Timestamp)
- Granted Time (Timestamp)
- Status (String)
- Item Name (String)
- App Grouping Scoped ID (N/A)
  - All entries I have seen have been empty.
- Org Scoped ID (N/A)
  - All entries I have seen have been empty.
- Org Grouping Scoped ID (N/A)
  - All entries I have seen have been empty.

## Chats

JSON Path `/your_apps_and_content/inbox/userid_xxxxx.json`

HTML Location `Apps and Websites off Meta accounts > Your apps and content > Group chat threads`

Contains a list of all chat threads that the user has been involved in. Each chat thread contains a list of messages that have been sent as well as the user who sent it. It contains many different formats of messages such as text, images, videos, links, invites, reactions, emojis and call starts/ends. Every message contains the sender name and timestamp. The other content varies between types of messages.

## All Notification Settings

A variety of notification settings can be found in the Meta Cloud data. These settings can be found in the following locations:

JSON Locations:
- `/your_settings_and_preferences/app_email_notification_settings.json`
- `/your_settings_and_preferences/apps_notification_preferences.json`
- `/your_settings_and_preferences/notification_settings/your_notification_preferences.json`

HTML Locations:
- `Preferences > App email notification settings`
- `Preferences > App notification preferences`
- `Preferences > Your notification preferences`

These settings lack any description or context in the HTML version, but the JSON version contains a bit information about the settings and what notifications are enabled or disabled, however a lot of options have no way of knowing what its related to.

- App email notification settings contains settings for email notifications from Meta apps.
- Apps notification preferences contains settings for notifications from apps on your device (headset).
- Your notification preferences contains settings for notifications from Meta.

## Privacy and Social Settings Reminders/Reviewed

There are a few files that contain information how often you have reviewed your privacy and social settings. It also contains trackers for how many times you have been reminded to review your settings from either your follower count or just over time. These files can be found in the following locations:

JSON Locations:
- `/your_settings_and_preferences/your_count_for_how_many_you_times_you’ve_entered_privacy_and_social_settings_review.json`
- `/your_settings_and_preferences/your_reminder_notification_count_for_privacy_and_social_settings_review.json`
- `/your_settings_and_preferences/your_follower-based_notification_count_for_privacy_and_social_settings_review.json`

HTML Locations:
- `Preferences > Your count for how many you times you've entered privacy and social settings review`
- `Preferences > Your reminder notification count for privacy and social settings review`
- `Preferences > Your follower-based notification count for privacy and social settings review`

## Settings

JSON Path `/your_settings_and_preferences/settings_details.json`

HTML Location `Preferences > Settings details`

Contains a few settings that the user has set. These entries contain the following information:

- Private Profile (On/Off)
- Who Can See Your Activity (String)
- Show Active Status (On/Off)
- Show The App You're Using (On/Off)
- Allow Non-Approved Apps (On/Off)
- Only Followers Who You Follow Back Can Join You (On/Off)

## Developer Notification Settings

JSON Path `/your_settings_and_preferences/developer_notification_preferences.json`

HTML Location `Preferences > Developer notification preferences`

Contains notification settings for developers. Currently only has 2 options one for `First Access forum new announcements` and one for `First Access forum subscribed posts` both are either On or Off.