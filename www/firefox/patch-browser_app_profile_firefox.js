Disable auto updates.

--- ./browser/app/profile/firefox.js.orig	2017-01-04 20:25:55.031642372 +0000
+++ browser/app/profile/firefox.js	2017-01-04 20:31:41.067717307 +0000
@@ -50,7 +50,7 @@
 pref("extensions.getAddons.recommended.url", "https://services.addons.mozilla.org/%LOCALE%/%APP%/api/%API_VERSION%/list/recommended/all/%MAX_RESULTS%/%OS%/%VERSION%?src=firefox");
 pref("extensions.getAddons.link.url", "https://addons.mozilla.org/%LOCALE%/firefox/");
 
-pref("extensions.update.autoUpdateDefault", true);
+pref("extensions.update.autoUpdateDefault", false);
 
 pref("extensions.hotfix.id", "firefox-hotfix@mozilla.org");
 pref("extensions.hotfix.cert.checkAttributes", true);
@@ -113,12 +113,12 @@
 pref("app.update.cert.checkAttributes", false);
 
 // Whether or not app updates are enabled
-pref("app.update.enabled", true);
+pref("app.update.enabled", false);
 
 // If set to true, the Update Service will automatically download updates when
 // app updates are enabled per the app.update.enabled preference and if the user
 // can apply updates.
-pref("app.update.auto", true);
+pref("app.update.auto", false);
 
 // If set to true, the Update Service will present no UI for any event.
 pref("app.update.silent", false);
@@ -160,7 +160,7 @@
 //  extensions.{GUID}.update.url
 //  .. etc ..
 //
-pref("extensions.update.enabled", true);
+pref("extensions.update.enabled", false);
 pref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.interval", 86400);  // Check for updates to Extensions and
@@ -1042,7 +1042,7 @@
 pref("services.sync.prefs.sync.browser.offline-apps.notify", true);
 pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
 pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
-pref("services.sync.prefs.sync.browser.search.update", true);
+pref("services.sync.prefs.sync.browser.search.update", false);
 pref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", true);
 pref("services.sync.prefs.sync.browser.startup.homepage", true);
 pref("services.sync.prefs.sync.browser.startup.page", true);
@@ -1061,7 +1061,7 @@
 pref("services.sync.prefs.sync.dom.disable_window_move_resize", true);
 pref("services.sync.prefs.sync.dom.event.contextmenu.enabled", true);
 pref("services.sync.prefs.sync.extensions.personas.current", true);
-pref("services.sync.prefs.sync.extensions.update.enabled", true);
+pref("services.sync.prefs.sync.extensions.update.enabled", false);
 pref("services.sync.prefs.sync.intl.accept_languages", true);
 pref("services.sync.prefs.sync.javascript.enabled", true);
 pref("services.sync.prefs.sync.layout.spellcheckDefault", true);
