# Gulp build v.01
This "Gulp build" will help you set up and code your project on:
- HTML, PUG
- CSS, SASS, SCSS, LESS
- JavaScript, TypeScript

## The functions that this build contains
- processing of PUG preprocessor
- minification of code in HTML from PUG & HTML
- processing of LESS & SASS preprocessors
- minification of code in CSS from SASS & SCSS & LESS & CSS
- processing of TypeScript
- converting ECMAScript 2015+ code to a backward compatible JavaScript version using Babel
- minification of code in JavaScript from TypeScript & JavaScript
- combining multiple TypeScript or JavaScript files into one JavaScript file
- image compression
- tracking new images that haven't been compressed yet
- tracking changes in project files and automatically starting re-processing if something has changed
- generating sourcemaps
- displaying file sizes in the terminal after processing them
- local server with automatic page refresh when project files change

## Input
|| HTML | Styles | Scripts | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Directory** | src/ | src/styles/ | src/scripts/ | src/img/ |
| **Extension** | .html, .pug | .css, .sass, .scss, .less | .js, .ts | .jpg, .png, .gif |

## Output
|| HTML | CSS | JavaScript | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Path** | dist/ | dist/css/style.min.css | dist/js/main.min.js | dist/img/ |

## How to start using this Gulp build:
1. Upload all the project files to a convenient location for you using "git clone" or the usual archive download from this page on GitHub 
2. Use the "Visual Studio Code" terminal and navigate to the directory with the downloaded build.
3. Run the command: "npm i" in the terminal. This command will install all the necessary packages in the build. Before that, you must have downloaded and installed "node.js".
4. Create files with the extensions you need in the appropriate directories and delete the ones you don't need. There are detailed comments in the build so you can easily upgrade everything and download the necessary packages if you use something that my build does not take into account.
5. After everything is ready and you decide which preprocessors and languages you will use, leaving only the files with the extensions you need, run the "gulp" command in the VS Code terminal, it will launch the default task, in which everything is already provided and after its launch all possible changes will be automatically tracked and processed. That's it - start writing your code and enjoy the automatic build of your project. 

## List of RPM packages used in this build
- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- [gulp-pug](https://www.npmjs.com/package/gulp-pug)
- [gulp-less](https://www.npmjs.com/package/gulp-less)
- [sass](https://www.npmjs.com/package/sass)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-typescript](https://www.npmjs.com/package/gulp-typescript)
- [typescript](https://www.npmjs.com/package/typescript)
- [del](https://www.npmjs.com/package/del) 
- [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) 
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) 
- [gulp-newer](https://www.npmjs.com/package/gulp-newer)
- [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [gulp-size](https://www.npmjs.com/package/gulp-size)
- [browser-sync](https://browsersync.io/docs/gulp) 