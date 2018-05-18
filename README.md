## gulp-settings
### Рабочая среда Gulp для front-end

### Команды для установки gulp-модулей

Компилятор Stylus-препроцессора
```
npm install --save-dev gulp-stylus
```
Минификация CSS
```
npm install gulp-clean-css --save-dev
```
Автоматическое добавление браузерные префиксов в CSS
```
npm i --save-dev gulp-autoprefixer
```
Конкатенация файлов
```
npm install --save-dev gulp-concat
```
Live режим работы браузера для watch
```
npm i browser-sync --save-dev
```
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
    └── package.json
```
