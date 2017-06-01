Set sock proxy to 127.0.0.1:9150. Do not save passwords.

--- modules/libpref/init/all.js.orig	2016-12-10 08:02:57.000000000 +0000
+++ modules/libpref/init/all.js
@@ -1837,17 +1837,17 @@
 
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
@@ -4093,13 +4093,13 @@
 #endif
 
 // Login Manager prefs
-pref("signon.rememberSignons",              true);
+pref("signon.rememberSignons",              false);
 #ifdef NIGHTLY_BUILD
 pref("signon.rememberSignons.visibilityToggle", true);
 #else
 pref("signon.rememberSignons.visibilityToggle", false);
 #endif
-pref("signon.autofillForms",                true);
+pref("signon.autofillForms",                false);
 pref("signon.autologin.proxy",              false);
 pref("signon.storeWhenAutocompleteOff",     true);
 pref("signon.ui.experimental",              false);
