LMV_PorfolioV2 NOTES___________________________________

3/26/2022---------------------------------------------
NOTES_______________________________
-goal for day: 
--change default landing Angular theme to color background and a photo
--push that locally to reflect on 4200 only
**as far as i know, I've reverted codebase back to before i attempted staticcrypt which led to blank home page

-"lmvAngular" is the Angular project name
-"app" is the name of the component already created by default (in /src folder)
-"homepage" is the name of the component within the "app" component that I CREATED BEFORE, now I DELETED
**deleted "homepage" folder
**deleted "homepage" import line in app.module.ts file
**deleted "homepage" declaration argument in @NgModule in app.module.ts file
**referred to https://www.delftstack.com/howto/angular/angular-cli-remove-component/ 

-"app" folder is the Angular root application folder where any component, service and module MUST be created HERE
-"app.-" files are created by default when Angular application is created 
--2 files created by default: app.component.ts an app.module.ts (AN ANGULAR APPLICATION SHOULD HAVE at least 1 component and 1 module)
**thus must keep /app folder and reference custom components within it, instead of plan to create a component folder outside of /app with my own custom component folder name
-keeping default Angular "app" module as the only module my lmvAngular project will use for simplicity
**referred to https://dotnettutorials.net/lesson/folder-structure-of-angular-application/

-created "home" component in /src/components folder (/components folder for organization)
--planning to route "home" as default landing, while keeping "app" component files for reference 

-load custom "home" component by default instead of Angular "app" main component
-added in /src, files: customdefaultIndex.html & customdefaultMain.ts
-copied index.html content to customdefaultIndex.html
-copied main.ts content to customdefaultMain.ts
-replace default filenames of "index" and "main" lines in angular.json file with customdefaultIndex.html & customdefaultMain.ts
-replace default filename of "files" section in tsconfig.app.json with customdefaultMain.ts
-in customdefaultMain.ts, keep bootstrapModule loading default module "AppModule"
-in app.module.ts, bootstrap currently loads default loaded component "AppComponent", instead of custom "HomeComponent" component
-in customdefaultIndex.html, app-root tag helps load AppModule component as the default landing page
--"title" is the actual website tab description (changed to "Leena My Vo Portfolio")
-in app.component.ts, app-root selector helps load AppModule component as the default landing page
-in app.module.ts, change bootstrap property from "AppComponent" to custom component "HomeComponent"
**MUST IMPORT HomeComponent on EACH PAGE WHERE EVER REFERRING
-customdefaultMain.ts content remains same b/c only using default AppModule bootstrap module
-verify that HomeComponent selector in home.component.ts and HomeComponent tag value in customdefaultIndex.html have same value "app-home" (instead of "app-root")
**this change allows the Angular landing page to change from app.component.html to home.component.html
**verify application home page updated via ng serve (should see default content of home.component.html text: "home works!")
**referred to https://matetiblog.wordpress.com/2020/07/02/bootstrapping-angular-and-secrets-of-landing-page/

-don't need to add custom image "lmvfill.png" to /src folder to change favicon to custom image bc /assets folder already added to angular.json in assets section
-edit customdefaultIndex.html and change favicon filename in icon line "href=" part WITH "/assets" path (otherwise no show)
**referred to https://reactgo.com/angular-change-favicon/

-edited home component css styling via styleUrls (styling files in component metadata)
--added wrapped body tags in home.component.html
--added component background-color to black in home.component.css via body section
-edited global styles.css text color to white via "color" property
**referred to https://javascript.plainenglish.io/styling-angular-components-ca4237bcff5f

-added angular material toolbar, icon, list and button imports in app.module.ts
**MUST IMPORT ANGULAR MATERIAL MODULES AFTER BrowserModule (NgModules)
-in home.component.html, add mat-toolbar, -icon, -list and -button tags
-in home.component.html, edited toolbar row button names
-in home.component.css, added "sticky" position 
**referred to https://www.techiediaries.com/angular-material-navigation-toolbar-sidenav/

-animated text color of toolbar in home.component.css
**referred to https://superdevresources.com/color-animation-link-hover-css/

-replaced angular toolbar for custom toolbar for height adjustment
**referred to https://codeconvey.com/responsive-navigation-with-centered-logo/
**referred to https://www.studytonight.com/css-howtos/how-to-create-a-navigation-bar-with-centered-logolink

-added comments in all edited files so far

-added slick links in files
-created custom.js file
-added image carousel on landing page
**referred to https://dilshankelsen.com/how-to-use-slick-to-create-a-carousel/
**referred to https://kenwheeler.github.io/slick/

-scrapped slick due to vertical image sticking and no carousel showing issues, trying ngx-drag-scroll instead for a swipeable and control clicked carousel
-overrode npm upstream dependency conflict with "--legacy-peer-deps" flag
1-edited app.module.ts
2-edited home.component.html instead of home.component.ts
3-edited home.component.css instead of home.component.ts
**MUST IMPORT ViewChild component!!
**MUST ADD "!" to "ds:"
**MUST DECLARE "index:any"
4-added navigation buttons
**referred to https://www.npmjs.com/package/ngx-drag-scroll
**referred to https://exerror.com/property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor/
**referred to https://stackoverflow.com/questions/66584987/parameter-implicitly-has-an-any-type

-styled scrollbar
**referred to https://www.digitalocean.com/community/tutorials/css-scrollbars

-customized homepage carousels with videos
**referred to https://www.encodedna.com/javascript/practice-ground/default.htm?pg=embed_youtube_video_using_html_object_tag
**referred to https://thecomputerladyonline.com/how-to-change-a-youtube-video-embed-code-size/

-made logo image about-section text change
**referred to https://stackoverflow.com/questions/43302398/overlay-fade-in-a-div-text-when-hovering-over-an-image

-create toolbar sections+about & 404 error page components in /components 
-LEFTOFF: https://angular.io/guide/router-tutorial
--at Control nav w UI elements - not changing to new html pages.. 

----V2----
- used this guide to get restarted: https://www.techiediaries.com/angular-tutorial/ & https://www.techiediaries.com/routing-angular-router/

- to get ngx-bootstrap for scrolling bar slideshow working on angular14, had to do: https://stackoverflow.com/questions/72633225/how-to-resolve-ngx-bootstrap-error-in-angular-14

- reinstalled angular material to fix font styling via: npm i @angular/material

- changed false parameters https://remotestack.io/angular-routing-example-redirect-or-navigate-between-components/ 
- added router debugging: RouterModule.forRoot(routes, {enableTracing: true}),

- refer to angular routing guide for the 3 steps to route: https://angular.io/guide/router

- imma dumbass. routing and page content loading worked, the text was just blending in with the white background. RIP.

- fixed toolbar centering and finished styling. Toolbar complete! 

- added vertical line full page height: https://www.quora.com/How-can-I-draw-a-vertical-line-in-HTML5-and-CSS

- added homepage header text contrast: https://www.codesdope.com/blog/article/25-creative-css3-text-shadow-effects-you-cant-miss/

-added homepage navigation route button on individual pages

- added bio page content: 
--https://codedamn.com/news/frontend/how-to-put-image-and-text-side-by-side-in-html
--https://codepen.io/adamg511/pen/DooJvx?editors=1100
--https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_two_columns_unequal
--https://stackoverflow.com/questions/14310154/how-do-i-set-a-background-color-for-the-width-of-text-not-the-width-of-the-enti

-finished bio page 

-added footer: 
--https://css-tricks.com/couple-takes-sticky-footer/
--https://stackoverflow.com/questions/52069833/how-to-get-the-current-year-using-typescript-in-angular6
--https://www.w3schools.com/howto/howto_css_social_media_buttons.asp
--https://stackoverflow.com/questions/37947608/making-own-icon-and-adding-hyperlink
--https://mailhide.io/en/success

-embedding posts of projects on pages:
--https://developers.facebook.com/docs/plugins/embedded-posts/
--https://yoast.com/how-to-make-youtube-videos-responsive/



LEFTOFF TRACKER_____________
9/18/2022
-fix: 
--food homepage section post embeding resizing and inline troubleshooting
---try to get orig photos and hyperlink to insta post instead of bulky insta embed defaults
--remove horizontal scrollbar in carousel
---LINE 15 in home.component.ts : changing default value of dragscroll component attributes [see passing values - https://angular.io/guide/attribute-directives]
-
12/26/2022
-fix:
--

IDEATE for future features________
-

FUTURE URLs for END GOAL_________
-

TECHNICAL STEPS FOR GOAL_________________________
1-edit HTML code in component.html file
2-edit CSS code in component.css file
3-edit corresponding code (imports, exports, and modules) in component.ts file
3-ng build
4-run Angular app via ng serve -o
**referred to https://www.geeksforgeeks.org/components-in-angular-8/

COMMANDS USED_______________________________________
show commit history -> git log
exit -> q or z

check angular version -> ng v new angular14 version way! (ng --version angular13)
check angular material istalled -> npm ls @angular/material (in angular project folder)
**currently installed: angular 13.1.2 & node 16.13.1 & material 13.1.1

create component in /src folder -> ng g c "componentname w/o quotes"

double-click file to keep it permanently open in VSCode

angular materials imports cheatsheet: https://gist.github.com/pimatco/d5b1891feb90b60ca4681011b6513873

angular icons list: https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

comment in VSCode -> ctrl+k+c
uncomment -> ctrl+k+u


SCRAP____________________

seafoam green accent light: #adede1ff
seafoam green accent dark: #77b5aaff
beige tan base color: #ffdab9ff
one-color color scheme generator: https://mycolor.space/?hex=%23FFDAB9&sub=1

Future sites of inspo if I wanted to make a parallax portolio page:
https://lepetitcambodge.fr/
https://ven.com.au/services/
https://designli.co/
https://graphicmama.com/blog/parallax-css-website-examples/

Other static nonparallax site inspo:
https://www.tarapixley.com/liftdance
https://www.antoncristell.com/index.php?page=works

other portfolio sites of mine to aggregate:
-- https://99designs.com/profiles/leenamyvo