#Azubu 3.0 Styles
First of all, this is a work in progress. I am planning out a more modular way of styling and sizing elements for the Azubu 3.0 bricks.

##Requirements
- Ruby running on your computer to support
	- SASS + Compass running on your command line
- HTML 5 support

#CSS
Since everything is being compiled on SASS, I've made a point to include ALL CSS STYLES in one post-rendered stylesheet. I will have to find some way to do modularize this even further.

To contribute, please let me know at richard.ong@azubu.com. For non SASS devs, it's pretty easy to grasp. Refer to [This Link](http://sass-lang.com/guide "SASS Basics") for a quick reference. Happy Styling!

#SCSS Variables, Functions and Mixins
I have already built a couple of variables, functions and mixins into the whole pool of style declarations we have here. The file that contains these declarations is /mains/_assets.scss

##Breakpoints - "Bubblers"
Breakpoints listed here "Bubble" up to a larger screen-size, following the mobile-first practice that's popular on the web now.
```
$mobile: "screen and (max-width: 480px)";
$tablet-portrait: "screen and (min-width: 481px)";
$tablet-landscape: "screen and (min-width: 799px)";
$desktop-small: "screen and (min-width: 1024px)";
$desktop-standard: "screen and (min-width: 1200px)";
$desktop-uhd: "screen and (min-width: 1921px)";
```

##Breakpoints - Specifics
Breakpoints listed here are specific to a certain range of screensizes. This allows a more fine-tuned control to certain devices is bubbling up poses an issue to your layout.
```
$tablet-portrait-specific: "screen and (min-width: 481px) and (max-width: 768px)";
$tablet-landscape-specific: "screen and (min-width: 799px) and (max-width: 1023px)";
$desktop-small-specific: "screen and (min-width: 1024px) and (max-width: 1199px)";
$desktop-standard-specific: "screen and (min-width: 1200px) and (max-width: 1920px)";
```

##Asset Library
This is just for quick reference to certain files and assets that we're going to use for the styling of the website. They're also to be found in one place for easy changing in the future when needed.
```
$main-asset-directory: "../../assets/";
$main-logo: "../../assets/logo.png";
```

##Grids, Type and Measurements
I have not yet started on the Grid system, however we have the following variables defined so far.
```
$gutter: 10px; /*Base unit for pixel-gutters*/
$bodyfont: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; /*Font family setting for the default body*/

$line-height-ratio: 1.4; /*Line height proportion - block text*/
$quote-height-ratio: 1.5; /*Line height proportion - blockquotes*/
$heading-height-ratio: 1.6; /*Line height proportion - headings*/

$base-type-size: 16; /* base font size */
$baseline: (($base-type-size/10) * $line-height-ratio);
```
To automatically compute for line-heights and margins, refer to the following mixins defined so far:
```
/*Defines font size, margin and line height*/
@include font-size([estimated size in pixels], [block, heading or quote])

/*Define all header font sizes, margins and line heights within the element scope*/
@include header-sizes([base size: estimated size in pixels]);

/*Define all paragraph and quote block text sizes, margins and line heights within the element scope*/
@include header-sizes([base size: estimated size in pixels]);
```
