# hexo-tag-real-time-calculator

A hexo plugin for inserting values which need to be calculated on real time.

This plugin is very easy to use.

#### Installation

Locate to the root path of your hexo blog.

```bash
npm i hexo-tag-real-time-calculator --save
```

Done!

#### Usage

```markdown
{% calc '<JS code for returning result.>' %}
```
For example:

```markdown
I'am {% calc "(new Date()).getFullYear()-1992" %} years old.
```
Or

```markdown
I'am {% calc '(new Date()).getFullYear()-1992' %} years old.
```

The output is(in 2019):

```html
I'am 27 years old.
```
