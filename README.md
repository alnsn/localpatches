This repository is a collection of my local pkgsrc patches.

The patches in this repository fix minor compilation problems
introduced by pkgsrc hardening work by Pierre Pronchery.

They work best with the following lines in your mk.conf file:

PKGSRC_MKPIE=yes
PKGSRC_USE_RELRO=yes

Alex / alnsn.
