cat-burglar
===========

A [CAT(1)](http://unixhelp.ed.ac.uk/CGI/man-cgi?cat) utility replacement that can remove designated sections of files before putting them together.

installation
------------

Coming Soon to an npm near you....


usage
-----

Designation sections like
```
// cat-ignore
Whatever is in here will be ignored.
Can be many, many lines if you wish.
Then just close it with another
// cat-ignore
```

Run it like:

```
cat-burglar [FILES...]
```

Everything is output to stdout so you can do stuff like you would with cat:

```
cat-burglar file1.js file2.js > catted.js
```

future enhancements
===================

Goal: be a full replacement for CAT(1) (see http://unixhelp.ed.ac.uk/CGI/man-cgi?cat)

Stuff I want it to do sooner, rather than later:

- accept stdin
  1 without any FILES
  1 with `-` in a list of FILES
- `-n, --number`: number output lines
- `-s, --squeeze-blank`: compress consecutive blank lines to just one

Stuff I don't really care about:

- `-v, --show-nonprinting`
- `-T, --show-tabs, -t`: a bunch of show-tabs variations
- `-u` whatever _that_ used to do....

Stuff I might do if I get bored/lonely:

- `-E, --show-ends`: print `$` at the end of each line
- `-b, --number-nonblank`: number non-blank output lines

license
=======

MIT-Licensed
See [LICENSE.md] for more details.