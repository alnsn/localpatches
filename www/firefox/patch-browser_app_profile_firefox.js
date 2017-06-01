Disable auto updates. Open about:blank on startup. Switch to DuckDuckGo (TOR).
Do not send a network request when a new tab is opened.

--- browser/app/profile/firefox.js.orig	2017-04-11 04:15:14.000000000 +0000
+++ browser/app/profile/firefox.js
@@ -51,7 +51,7 @@ pref("extensions.getAddons.recommended.u
 pref("extensions.getAddons.link.url", "https://addons.mozilla.org/%LOCALE%/firefox/");
 pref("extensions.getAddons.themes.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes/?src=firefox");
 
-pref("extensions.update.autoUpdateDefault", true);
+pref("extensions.update.autoUpdateDefault", false);
 
 pref("extensions.hotfix.id", "firefox-hotfix@mozilla.org");
 pref("extensions.hotfix.cert.checkAttributes", true);
@@ -115,12 +115,12 @@ pref("app.update.log", false);
 pref("app.update.backgroundMaxErrors", 10);
 
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
@@ -159,7 +159,7 @@ pref("app.update.service.enabled", true)
 //  extensions.{GUID}.update.url
 //  .. etc ..
 //
-pref("extensions.update.enabled", true);
+pref("extensions.update.enabled", false);
 pref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
 pref("extensions.update.interval", 86400);  // Check for updates to Extensions and
@@ -172,7 +172,7 @@ pref("extensions.dss.switchPending", fal
 pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.name", "chrome://browser/locale/browser.properties");
 pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.description", "chrome://browser/locale/browser.properties");
 
-pref("lightweightThemes.update.enabled", true);
+pref("lightweightThemes.update.enabled", false);
 pref("lightweightThemes.getMoreURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes");
 pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"}]");
 
@@ -208,7 +208,7 @@ pref("general.autoScroll", true);
 #endif
 
 // At startup, check if we're the default browser and prompt user if not.
-pref("browser.shell.checkDefaultBrowser", true);
+pref("browser.shell.checkDefaultBrowser", false);
 pref("browser.shell.shortcutFavicons",true);
 pref("browser.shell.mostRecentDateSetAsDefault", "");
 #ifdef RELEASE_OR_BETA
@@ -222,8 +222,8 @@ pref("browser.defaultbrowser.notificatio
 
 // 0 = blank, 1 = home (browser.startup.homepage), 2 = last visited page, 3 = resume previous browser session
 // The behavior of option 3 is detailed at: http://wiki.mozilla.org/Session_Restore
-pref("browser.startup.page",                1);
-pref("browser.startup.homepage",            "chrome://branding/locale/browserconfig.properties");
+pref("browser.startup.page",                0);
+pref("browser.startup.homepage",            "about:blank");
 // Whether we should skip the homepage when opening the first-run page
 pref("browser.startup.firstrunSkipsHomepage", false);
 
@@ -360,7 +360,7 @@ pref("browser.helperApps.deleteTempFileO
 pref("browser.search.searchEnginesURL",      "https://addons.mozilla.org/%LOCALE%/firefox/search-engines/");
 
 // pointer to the default engine name
-pref("browser.search.defaultenginename",      "chrome://browser-region/locale/region.properties");
+pref("browser.search.defaultenginename",      "DuckDuckGo (TOR)");
 
 // Ordering of Search Engines in the Engine list.
 pref("browser.search.order.1",                "chrome://browser-region/locale/region.properties");
@@ -1174,7 +1174,7 @@ pref("browser.newtab.preload", true);
 pref("browser.newtabpage.introShown", false);
 
 // Toggles the content of 'about:newtab'. Shows the grid when enabled.
-pref("browser.newtabpage.enabled", true);
+pref("browser.newtabpage.enabled", false);
 
 // Toggles the enhanced content of 'about:newtab'. Shows sponsored tiles.
 sticky_pref("browser.newtabpage.enhanced", true);
