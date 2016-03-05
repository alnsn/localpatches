This repository is a collection of my local pkgsrc patches.

Unlike my base system which is built with MKPIE, only few pkgsrc binaries
are PIE executables. I wanted to harden some of my internet facing binaries
like fetchmail or curl. The initial version of localpatches contains only
MKPIE related changes but I may add some other security or privacy related
patches.

Note that some patches don't work (e.g. in security/gnupg) or might stop
working in future versions of packages.

Alex / alnsn

PS The patch in this post https://mail-index.netbsd.org/tech-pkg/2016/03/01/msg016473.html adds PKGSRC_MKPIE flag.
