var https = require("https");
var fs = require("fs");
require("dotenv").config();

var gulp = require("gulp");
var gulpMinifyCssNames = require("gulp-minify-cssnames");

gulp.task("minify-css-names", function () {
  return gulp
    .src(["src/*.css"])
    .pipe(gulpMinifyCssNames())
    .pipe(gulp.dest("build"));
});

function download(filename, url) {
  var file = fs.createWriteStream(filename);
  var request = https.get(url, function (response) {
    response.pipe(file);
  });
}

// "products", "productscolorcodes", "productssizes", "category", "colorcodes", "size", "stores", "versionmanager"
var jsonnames = [
  "products",
  "productscolorcodes",
  "productssizes",
  "category",
  "colorcodes",
  "size",
  "stores",
  "versionmanager",
];

jsonnames.forEach((val) => {
  console.log("Downloading " + val);
  console.log(
    `${process.env.REACT_APP_APIURL}redisapi/readData.php?storeid=${process.env.REACT_APP_STORE_ID}&jsonname=${val}`
  );
  download(
    `public/yofte-assets/mockups/${val}.json`,
    `${process.env.REACT_APP_APIURL}redisapi/readData.php?storeid=${process.env.REACT_APP_STORE_ID}&jsonname=${val}`
  );
});

var fileName = "public/index.html";
var stream = fs.createWriteStream(fileName);

stream.once("open", async function (fd) {
  var html = await buildHtml();

  stream.end(html);
});
console.log(
  `${process.env.REACT_APP_APIURL}redisapi/readData.php?storeid=${process.env.REACT_APP_STORE_ID}&jsonname=stores`
);
async function buildHtml(req) {
  const store = await fetch(
    `${process.env.REACT_APP_APIURL}redisapi/readData.php?storeid=${process.env.REACT_APP_STORE_ID}&jsonname=stores`
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((error) => console.error("Error:", error));
  console.log(store.store);
  console.log(store.description);
  //update v1.0
  if (store) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
     
      <link
      rel="icon"
      href="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/store/${store.storeid}/favicon.webp"
      />
      <!-- clickjacking code -->
    <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self'"/>
    <meta http-equiv="X-Frame-Options" content="DENY"/>
    <meta name="referrer" content="same-origin"/>

      <meta name="viewport" content="width=device-width, initial-scale=1s" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="${store.description}"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
     
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
     
      <link rel="stylesheet" href="/css/tailwind/tailwind.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="js/main.js"></script>
      <title>${store.title}</title>
    </head>
    <body class="antialiased bg-body text-body font-body">
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root" class=""></div>
    
    </body>
  </html>
  `;
  } else
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
     
      <link
      rel="icon"
      href="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/store/${store.storeid}/favicon.webp"
      />
      <!-- clickjacking code -->
    <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self'"/>
    <meta http-equiv="X-Frame-Options" content="DENY"/>
    <meta name="referrer" content="same-origin"/>

      <meta name="viewport" content="width=device-width, initial-scale=1s" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="${store.description}"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
     
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
     
      <link rel="stylesheet" href="/css/tailwind/tailwind.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="js/main.js"></script>
      <title>${store.title}</title>
    </head>
    <body class="antialiased bg-body text-body font-body">
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root" class=""></div>
    
    </body>
  </html>
    `;
}
