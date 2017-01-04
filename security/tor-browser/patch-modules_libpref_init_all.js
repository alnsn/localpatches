Set sock proxy to 127.0.0.1:9050. Do not save passwords.

--- modules/libpref/init/all.js.orig	2017-01-04 23:31:26.940059178 +0000
+++ modules/libpref/init/all.js	2017-01-04 23:34:23.468152422 +0000
@@ -1672,17 +1672,17 @@
 
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
+pref("network.proxy.socks_port",            9050);
 pref("network.proxy.socks_version",         5);
-pref("network.proxy.socks_remote_dns",      false);
+pref("network.proxy.socks_remote_dns",      true);
 pref("network.proxy.proxy_over_tls",        true);
 pref("network.proxy.no_proxies_on",         "localhost, 127.0.0.1");
 pref("network.proxy.failover_timeout",      1800); // 30 minutes
@@ -3708,8 +3708,8 @@
 #endif
 
 // Login Manager prefs
-pref("signon.rememberSignons",              true);
-pref("signon.autofillForms",                true);
+pref("signon.rememberSignons",              false);
+pref("signon.autofillForms",                false);
 pref("signon.autologin.proxy",              false);
 pref("signon.storeWhenAutocompleteOff",     true);
 pref("signon.debug",                        false);
