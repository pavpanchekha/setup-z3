setup-z3
========

This Action sets up Z3 by downloading a release build.

Usage
-----

Just use the `pavpanchekha/setup-z3` action. It has three inputs:

- `version`: a version number for Z3; **required**.
- `architecture`: `x64` by default, can be set to `x86` for the Windows build.
- `distribution`: `ubuntu-18.04` by default; find other options [here][z3-releases].

[z3-releases]: https://github.com/Z3Prover/z3/releases
