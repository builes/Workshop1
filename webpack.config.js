const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/app/index.js",
  mode: "production", //Aca ponemos el modo(development, production), por defecto viene en production

  //asi lo ponemos para que cuando note cambios se actualice el servidor npx webpack serve
  watch: true,

  //Asi configuramos el puerto donde va a correr el servidor, por defecto viene en el 8080
  devServer: {
    port: 9000,
    open: true,
  },

  //Ruta donde creara los archivos
  output: { filename: "app.bundle.js", path: path.resolve(__dirname, "build") },

  plugins: [
    //Esto lo que hace es convertir el html de la ruta que le digamos en un nuevo archivo html en la carpeta bunlde
    new HTMLWebpackPlugin({
      template: "./src/registro.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
