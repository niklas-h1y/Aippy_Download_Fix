# Aippy Download Fix 🚀

A simple browser bookmarklet solution for Aippy creators to view live projects without restrictions and bypass blocked downloads.

## 📝 Background & The Problem

When you preview or play a project on Aippy, the game/application runs inside an embedded window called an `<iframe>`. 

* **The Developer Oversight:** The Aippy developers forgot to include the `allow-downloads` attribute inside the code for this preview `<iframe>`.
* **The Impact:** Because this security permission is missing, anytime your game or app tries to download a file to your computer during testing, the browser automatically blocks the download.

## 🛠️ The Solution: JavaScript Bookmarklet

To bypass this restriction, I created a **JavaScript bookmarklet** (a standard browser bookmark containing executable code). 

When clicked, the script runs the following steps in the background:
1. It scans the page for the active live project frame (`iframe[src*="aippy.live"]`).
2. It checks to make sure the frame is visible and actively running.
3. It extracts the raw, direct web address (URL) of your project.
4. It breaks the project out of the restricted preview frame and opens it directly in a **brand new browser tab**. Because it is open in its own tab, all download restrictions disappear, and downloads work perfectly!

---

## 🚀 Getting Started

Setting up the bookmarklet takes less than a minute. I have created an interactive checklist to guide you through the process:

👉 **[Click here for the Step-by-Step Setup Guide (Manual_Steps.md)](Manual_Steps.md)**

---
*Note: This tool does not modify any server-side data on Aippy. It simply opens the frame that your browser has already loaded into a clean, unrestricted window.*
