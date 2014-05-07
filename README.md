# Jase - Jehu's Drupal Base Theme
## HTML5 Markup & Bootstrap 3 Grid

## About the name
The "J" of Jase comes from my nick name "Jehu".
The rest of the name comes from "Base" but whithout the "B". :)

Jase (pronounced "Chase"), is the result of the Chase for the perfect base theme to create clean markup in Drupal without too much stuff i did not want.

## Motivation
There are great base themes out there.

* [Omega][]
* [Aurora][]
* [AdaptiveTheme][]
* [Bootstrap][]

to name only a few of them.
But sometimes they do not enough here and too much on the other side.

So i've startet this base theme. The Jase base theme makes the most sense in combination with the following modules:

* [blockify][] (mandatory, because there are no variables for the default blocks inside the template files)
* [borealis][] (recommended, overridden block templates are included in Jase)
* [html5_tools][] (recommended)
* [fences][] (optional)
* [block_class][] (optional)
* [magic][] (optional)
* [Display Suite][] (optional)
    * [Display Suite Bootstrap Layouts][] (optional)

## Bootstrap - Just the Grid
[Bootstrap3][] is a great Responsive Framework. The bootstrap grid is one of the best out there. So i've decided to use the grid only and let the Themer alone with all other stylings. So he/her is free to use additional CSS frameworks for the user interface.

## LESS
Until the less implementation is the first class citizen in Twitter Bootstrap, we use LESS for CSS Preprocessing.
Another advantage is the wide cross platform compatibility of node.js and the consequent usage of JavaScript in web developement environments.

## Grunt
There is a preconfigured Gruntfile.js in the base theme.
It compiles css/style.sass to css/style.css and watches the changes of *.css and *.tpl.php files.

Just install ``grunt-cli``, call ``npm install`` and ``grunt watch``. That's it.

[Omega]:https://drupal.org/project/omega
[Aurora]:https://drupal.org/project/aurora
[AdaptiveTheme]:https://drupal.org/project/adaptivetheme
[Bootstrap]:https://drupal.org/project/bootstrap
[blockify]:https://drupal.org/project/blockify
[borealis]:https://drupal.org/project/borealis
[html5_tools]:https://drupal.org/project/html5_tools
[fences]:https://drupal.org/project/fences
[block_class]:https://drupal.org/project/block_class
[magic]:https://drupal.org/project/magic
[Display Suite]:https://drupal.org/project/ds
[Display Suite Bootstrap Layouts]:https://drupal.org/project/ds_bootstrap_layouts
[Bootstrap3]:http://getbootstrap.com
