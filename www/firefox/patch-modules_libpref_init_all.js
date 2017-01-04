Set sock proxy to 127.0.0.1:9050. Do not save passwords.

--- ./modules/libpref/init/all.js.pkgsrc	2017-01-04 19:42:37.751875843 +0000
+++ ./modules/libpref/init/all.js	2017-01-04 19:40:54.558230859 +0000
@@ -1936,10 +1936,10 @@
 pref("network.proxy.http_port",             0);
 pref("network.proxy.ssl",                   "");
 pref("network.proxy.ssl_port",              0);
-pref("network.proxy.socks",                 "");
-pref("network.proxy.socks_port",            0);
+pref("network.proxy.socks",                 "127.0.0.1");
+pref("network.proxy.socks_port",            9050);
 pref("network.proxy.socks_version",         5);
-pref("network.proxy.socks_remote_dns",      false);
+pref("network.proxy.socks_remote_dns",      true);
 pref("network.proxy.proxy_over_tls",        true);
 pref("network.proxy.no_proxies_on",         "localhost, 127.0.0.1");
 pref("network.proxy.failover_timeout",      1800); // 30 minutes
@@ -4291,13 +4291,13 @@
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
