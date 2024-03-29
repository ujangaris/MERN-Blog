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
        - http://localhost:3000/register

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
        - http://localhost:3000/register

## Components Gap

    berfungsi untuk memberikan jarak disetiap component yang kita inginkan
    Todo:
    1.  components/atoms/Gap/index.js
        - pasang functional components Gap
        - pasang dan panggil props {height, width}
    2.  components/atoms/index.js
        - import dan panggil Gap
    3.  pages/Register/index.js
        - import dan panggil Gap beserta height={20}/ height={50}
    4. pengujian pada browser:
        - http://localhost:3000/register

## Components Link

    berfungsi untuk menambahkan  tulisan yang bisa di klik
    Todo:
    1.  components/atoms/Link/index.js
        - functional components Link
        - pasang props {title, onClick}
        - className='link'
    2.  components/atoms/Link/link.scss
        - styling link
    3.  components/atoms/index.js
        - import dan export Link
    4.  pages/Register/index.js
        - import dan pasang link
        - pasang Gap
    5.  pages/Register/register.scss
        - styling register agar form berda ditengah atas & bawah
    6. pengujian pada browser:
        - http://localhost:3000/register

## Konsep SCSS Global & Slicing Halaman Login

    Todo:
    1.  pages/Login/index.js
        - copas dari halaman egister kemudian modifikasi
        -
    2.  pages/Register/index.js
        - modifikasi style css agar halaman tidak bisa scrolling
    3. pengujian pada browser:
        - http://localhost:3000/register
        - http://localhost:3000/login

    4.  components/atoms/Button/button.scss
        - styling css agar cursor jd pointer ketika disorot ke button
    5.  components/atoms/Link/link.scss
        - styling css agar cursor jd pointer ketika disorot ke tulisan/teks
    6. pengujian pada browser:
        - http://localhost:3000/register
        - sorot ke button dan text kembali kelogin, cursor akan jd pointer
        - http://localhost:3000/login
        - sorot ke button dan text belum punya akun, cursor akan jd pointer

## Routing Bertingkat atatu berlapis

    Todo:
    1.  pages/MainApp/index.js
        - buat functional component MainApp
        - pasang Header & footer
        - import {BrowserRouter as Router, Switch, Route} dari react router dom
        - import dan pasang Home
        - import dan pasang CreateBlog
        - import dan pasang DetailBlog
    2.  pages/index.js
        - import & export MainApp
    3.  config/Routes/index.js
        - import & pasang MainApp, hapus Home
    4.  pages/CreateBlog/index.js
        - buat functional component CreateBlog
    5.  pages/DetailBlog/index.js
        - buat functional component DetailBlog
    6. pengujian pada browser:
        - http://localhost:3000
        - http://localhost:3000/create-blog
        - http://localhost:3000/detail-blog
        - tiap path akan berbeda isi contennya, namun header dan footer sama
