Harden TLS. Disable OCSP requests.

--- ./netwerk/base/security-prefs.js.orig	2017-01-04 19:45:54.727629488 +0000
+++ ./netwerk/base/security-prefs.js	2017-01-04 19:46:16.318505429 +0000
@@ -2,7 +2,7 @@
  * License, v. 2.0. If a copy of the MPL was not distributed with this
  * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 
-pref("security.tls.version.min", 1);
+pref("security.tls.version.min", 2);
 pref("security.tls.version.max", 3);
 pref("security.tls.version.fallback-limit", 3);
 pref("security.tls.insecure_fallback_hosts", "");
@@ -47,7 +47,7 @@
 // (This is only relevant to Windows 8.1)
 pref("security.family_safety.mode", 2);
 
-pref("security.OCSP.enabled", 1);
+pref("security.OCSP.enabled", 0);
 pref("security.OCSP.require", false);
 pref("security.OCSP.GET.enabled", false);
 
