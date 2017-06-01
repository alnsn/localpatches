Set sock proxy to 127.0.0.1:9050. Do not save passwords.
Do not download safebrowsing data.

--- modules/libpref/init/all.js.orig	2017-04-11 04:15:18.000000000 +0000
+++ modules/libpref/init/all.js
@@ -1988,17 +1988,17 @@ pref("network.auth.private-browsing-sso"
 
 pref("permissions.default.image",           1); // 1-Accept, 2-Deny, 3-dontAcceptForeign
 
-pref("network.proxy.type",                  5);
+pref("network.proxy.type",                  1);
 pref("network.proxy.ftp",                   "");
 pref("network.proxy.ftp_port",              0);
 pref("network.proxy.http",                  "");
 pref("network.proxy.http_port",             0);
 pref("network.proxy.ssl",                   "");
 pref("network.proxy.ssl_port",              0);
-pref("network.proxy.socks",                 "");
-pref("network.proxy.socks_port",            0);
+pref("network.proxy.socks",                 "127.0.0.1");
+pref("network.proxy.socks_port",            9150);
 pref("network.proxy.socks_version",         5);
-pref("network.proxy.socks_remote_dns",      false);
+pref("network.proxy.socks_remote_dns",      true);
 pref("network.proxy.proxy_over_tls",        true);
 pref("network.proxy.no_proxies_on",         "localhost, 127.0.0.1");
 pref("network.proxy.failover_timeout",      1800); // 30 minutes
@@ -4410,9 +4410,9 @@ pref("font.name.monospace.x-unicode", "d
 #endif
 
 // Login Manager prefs
-pref("signon.rememberSignons",              true);
+pref("signon.rememberSignons",              false);
 pref("signon.rememberSignons.visibilityToggle", true);
-pref("signon.autofillForms",                true);
+pref("signon.autofillForms",                false);
 pref("signon.autofillForms.http",           false);
 pref("signon.autologin.proxy",              false);
 pref("signon.formlessCapture.enabled",      true);
@@ -5156,7 +5156,7 @@ pref("browser.safebrowsing.phishing.enab
 // Enable malware protection
 pref("browser.safebrowsing.malware.enabled", true);
 
-pref("browser.safebrowsing.downloads.enabled", true);
+pref("browser.safebrowsing.downloads.enabled", false);
 pref("browser.safebrowsing.downloads.remote.enabled", true);
 pref("browser.safebrowsing.downloads.remote.timeout_ms", 10000);
 pref("browser.safebrowsing.downloads.remote.url", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
@@ -5346,10 +5346,10 @@ pref("browser.addon-watch.ignore", "[\"m
 
 // Search service settings
 pref("browser.search.log", false);
-pref("browser.search.update", true);
+pref("browser.search.update", false);
 pref("browser.search.update.log", false);
 pref("browser.search.update.interval", 21600);
-pref("browser.search.suggest.enabled", true);
+pref("browser.search.suggest.enabled", false);
 pref("browser.search.reset.enabled", false);
 pref("browser.search.reset.whitelist", "");
 pref("browser.search.geoSpecificDefaults", false);
