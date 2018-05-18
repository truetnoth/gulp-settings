## gulp-settings
### Рабочая среда Gulp для front-end

### Команды для установки gulp-модулей

npm install --save-dev gulp-stylus => Компилятор Stylus-препроцессора

npm install gulp-clean-css --save-dev => Минификация CSS

npm i --save-dev gulp-autoprefixer => Автоматическое добавление браузерные префиксов в CSS

npm install --save-dev gulp-concat => Конкатенация файлов 

npm i browser-sync --save-dev => Live режим работы браузера для watch

### Команда для создания package.json («о проекте», с контроллером подключенных модулей)

npm init 

gulpfile.js — создается в корневой папке проекта. В него вносятся все исполняющие команды и модули.

команда gulp + название таска для исполнения одного таска.

Команда gulp запускает дефолтный таск.

#### Архитектура приложения

```
newProject/
    ├── app/ ──├── index.html
               ├── stylus/
               ├── css/
               ├── js/
               └── img/
    ├── dist/──├── css/
               ├── img/
               └── js/
    ├── Node_modules
    ├── gulpfile.js
    └── package.json'
```
