---
sidebar_position: 1
title: Introduction
description: "Introduction to the documentation"
---

# Introduction and Guide

:::info
This documentation was created as the deliverable for my Dissertation project titled ***Forensic Data Extraction and Analysis of Meta Quest Headsets***. The project was completed in 2025 as part of my BSc in Applied Cyber Security.
:::

Welcome to this documentation for the forensic extraction and analysis of the Meta Quest 3 VR headset.  This guide provides a structured approach to acquiring and examining data from the Quest 3, enabling investigators, researchers, and enthusiasts to understand its internal workings and potentially uncover valuable information for law enforcement, research, or personal use.

The Meta Quest 3, like other complex electronic devices, stores a wealth of data, including user activity, system logs, application data, and potentially sensitive personal information.  This documentation aims to provide the necessary knowledge and techniques to perform forensic extractions and analyses on this device in a forensically sound and repeatable manner.

This guide is divided into two main sections: [Extraction](/extraction/intro) and [Analysis](analysis/intro). The Extraction section covers the process of acquiring data from the Quest 3, including the use of Media Transfer Protocol ([MTP](/golssary#mtp)), Android Debug Bridge ([ADB](/golssary#adb)) and cloud data availible via Meta's Data Export to extract data from the device as well as the cloud. The Analysis section provides an overview of the extracted data and how to interpret it, including file structures, data types, and potential artifacts of interest.


This documentation is intended for a wide audience, from digital forensics professionals and law enforcement personnel to researchers and curiosity inclined individuals. While some technical knowledge is assumed, this guide will explain complex concepts clearly and concisely.

:::warning Disclaimer:
The information provided in this documentation is for educational purposes only. Performing forensic investigations on the Meta Quest 3 or any device should be conducted in accordance with applicable laws and regulations. Unauthorized access to data is illegal and unethical. The authors and contributors of this documentation are not responsible for any misuse of the information provided.
:::