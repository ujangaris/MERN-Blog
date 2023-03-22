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
