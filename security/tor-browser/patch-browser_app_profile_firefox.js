Disable auto updates.

--- browser/app/profile/firefox.js.orig	2017-01-04 23:28:36.963107339 +0000
+++ browser/app/profile/firefox.js	2017-01-04 23:29:32.641085000 +0000
@@ -57,7 +57,7 @@
 pref("extensions.blocklist.detailsURL", "https://www.mozilla.org/%LOCALE%/blocklist/");
 pref("extensions.blocklist.itemURL", "https://blocklist.addons.mozilla.org/%LOCALE%/%APP%/blocked/%blockID%");
 
-pref("extensions.update.autoUpdateDefault", true);
+pref("extensions.update.autoUpdateDefault", false);
 
 pref("extensions.hotfix.id", "firefox-hotfix@mozilla.org");
 pref("extensions.hotfix.cert.checkAttributes", true);
@@ -108,12 +108,12 @@
 pref("app.update.cert.checkAttributes", false);
 
 // Whether or not app updates are enabled
-pref("app.update.enabled", true);
+pref("app.update.enabled", false);
 
 // This preference turns on app.update.mode and allows automatic download and
 // install to take place. We use a separate boolean toggle for this to make
 // the UI easier to construct.
-pref("app.update.auto", true);
+pref("app.update.auto", false);
 
 // See chart in nsUpdateService.js source for more details
 // incompatibilities are ignored by updates in Metro
@@ -180,7 +180,7 @@
 //  extensions.{GUID}.update.url
 //  .. etc ..
 //
-pref("extensions.update.enabled", true);
+pref("extensions.update.enabled", false);
 pref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.interval", 86400);  // Check for updates to Extensions and 
