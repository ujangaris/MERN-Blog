# MERN Blog Reactjs

## Structure Folder

    Todo:
    1.  Structure folder baru
        -src
            - assets
                - icon
                - image
            - components
            - config
            - pages
                - App.css
                - App.js
                - App.test.js
            - utils
    2.  perbaiki pemanggilan App.js
        - index.js
    4.  App.js
        - hapus import dan pemasangan logo
    3.  jalankan server:
        npm start

## Membuat Navigasi dengan react-router-dom

    Todo:
    1.  React Router Dom
        - npm i react-router-dom@^5.2.0
    2.  pages/Home/
        -   Home/index.js
            - buat functional component Home
        -   Login/index.js
            - buat functional component Login
        -   Register/index.js
            - buat functional component Register
        -   index.js
            - import dan export component {Home, Login , Register}
    3.  config/
        -   Routes/index.js
            - Import dan pasang BrowserRouter as Route, Router, Switch dari react-router-dom
            - buat Route dan path ('/login')
            - buat Route dan path ('/register')
            - buat Route dan path ('/') = home

    4.  App.js
        -   import dan panggil Routes nya.
    5.  Pengujian pada browser:
        -   jalankan server : npm start
        -   http://localhost:3000/
        -   http://localhost:3000/login
        -   http://localhost:3000/register

## Design Register & Input component

    Todo:
    1.  pages/Register/index
        - buat clasname left & right
    2.  pages/Register/register.scss
        - styling
    3.  install node-sass
        - cd mern-blog : npm add node-sass
        - ini di install agar tidak terjadi erroro, karna react hanya membaca file css
        - kemudian agar tidak error matikan dan jalankan ulang react appnya: npm start
    4.  assets/image
        - simpan  buah gambar dari unsplash
        - buat index.js yang isinya import & export dari path image yang sudah kita simpan
          ,tujuannya agar dapat dipanggil dengan mudah nantinya
    5.  components/atoms/Input/index.js
        - buat functional component input
        - buat input form
        - panggilde ngan props : label & rest, rest artinya semua selain label
    6.  components/atoms/Input/index.scss
        - style input-wrapper, label & input form
    7.  components/atoms/index.js
        - import & export Input
    8.  components/index.js
        - export semua file yang berada di atoms file
    9.  pages/Register/index
        - import dan panggil registerBg, Input components & register.scss
    10. pengujian pada browser:
        - http://localhost:5000/register

## Components Button

    Todo:
    1.  components/atoms/Button/index.js
        - buat functional component Button
        - pasang dan panggil props title & ...rest
        - import component/atoms/Button/button.scss
    2.  components/atoms/Button/button.scss
        - buat style button
    3.  components/atoms/index.js
        import dan panggil button
    4.  pages/Register/index.js
        - import dan panggil Button beserta titenya=Register
    5. pengujian pada browser:
        - http://localhost:5000/register
