Disable auto updates. Open about:blank on startup.

--- browser/app/profile/firefox.js.orig	2016-12-10 08:02:57.000000000 +0000
+++ browser/app/profile/firefox.js
@@ -62,7 +62,7 @@ pref("extensions.blocklist.url", "https:
 pref("extensions.blocklist.detailsURL", "https://www.mozilla.org/%LOCALE%/blocklist/");
 pref("extensions.blocklist.itemURL", "https://blocklist.addons.mozilla.org/%LOCALE%/%APP%/blocked/%blockID%");
 
-pref("extensions.update.autoUpdateDefault", true);
+pref("extensions.update.autoUpdateDefault", false);
 
 pref("extensions.hotfix.id", "firefox-hotfix@mozilla.org");
 pref("extensions.hotfix.cert.checkAttributes", true);
@@ -121,12 +121,12 @@ pref("app.update.cert.requireBuiltIn", f
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
 pref("app.update.mode", 1);
@@ -186,7 +186,7 @@ pref("app.update.service.enabled", true)
 //  extensions.{GUID}.update.url
 //  .. etc ..
 //
-pref("extensions.update.enabled", true);
+pref("extensions.update.enabled", false);
 pref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.interval", 86400);  // Check for updates to Extensions and
@@ -199,7 +199,7 @@ pref("extensions.dss.switchPending", fal
 pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.name", "chrome://browser/locale/browser.properties");
 pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.description", "chrome://browser/locale/browser.properties");
 
-pref("lightweightThemes.update.enabled", true);
+pref("lightweightThemes.update.enabled", false);
 pref("lightweightThemes.getMoreURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes");
 pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-3\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/linen-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.footer.png\",\"accentcolor\":\"#ada8a8\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.preview.png\",\"author\":\"DVemer\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"},{\"id\":\"recommended-5\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/carbon-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.footer.png\",\"textcolor\":\"#3b3b3b\",\"accentcolor\":\"#2e2e2e\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.preview.jpg\",\"author\":\"Jaxivo\",\"version\":\"1.0\"}]");
 
@@ -239,8 +239,8 @@ pref("browser.shell.defaultBrowserCheckC
 
 // 0 = blank, 1 = home (browser.startup.homepage), 2 = last visited page, 3 = resume previous browser session
 // The behavior of option 3 is detailed at: http://wiki.mozilla.org/Session_Restore
-pref("browser.startup.page",                1);
-pref("browser.startup.homepage",            "chrome://branding/locale/browserconfig.properties");
+pref("browser.startup.page",                0);
+pref("browser.startup.homepage",            "about:blank");
 
 pref("browser.slowStartup.notificationDisabled", false);
 pref("browser.slowStartup.timeThreshold", 40000);
@@ -1268,7 +1268,7 @@ pref("services.sync.prefs.sync.browser.n
 pref("services.sync.prefs.sync.browser.offline-apps.notify", true);
 pref("services.sync.prefs.sync.browser.safebrowsing.enabled", true);
 pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
-pref("services.sync.prefs.sync.browser.search.update", true);
+pref("services.sync.prefs.sync.browser.search.update", false);
 pref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", true);
 pref("services.sync.prefs.sync.browser.startup.homepage", true);
 pref("services.sync.prefs.sync.browser.startup.page", true);
