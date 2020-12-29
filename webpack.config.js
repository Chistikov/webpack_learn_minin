const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // Указываем мод сборки development | production
  mode: "development",

  // У нас две точки входа, в приложение (файл index.js, который зависит от Post.js и файл analytics.js).
  entry: {
    main: "./src/index.js",
    analytics: "./src/analytics.js",
  },

  // указываем, куда поместить собранный js файл
  output: {
    // указываем название выходных файлов.
    // в [name] будет подставляться имя из ключей объекта entry
    // в [contenthash] будет подставляться уникальный хеш, что бы избежать кеширования
    filename: "[name].[contenthash].bundle.js",
    // указываем имя папки
    // __dirname - текущая директория
    path: path.resolve(__dirname, "dist"),
  },

  // все плагины должны быть новыми экземплярами класса, созданными через new
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      // когда подключен template установка title не работает
      // title: "Webpack learn",
      template: "./src/template.html",
    }),
  ],

  // Указание лоадеров
  //
  // По умолчанию вебпак умеет работать тоьлко с js и json. C css, sass, картинками и т.д. вебпак работать не умеет. Для этого подключаются лоадеры.
  module: {
    rules: [
      {
        // Указываем регулярное выражение при котором будет срабатывать лоадер
        test: /\.css$/,
        // вебпак обрабатывает лоадеры с конца и к началу css-loader -> style-loader
        // css-loader --- позволяет понимать вебпаку import css стилей в js файл. (import ./styles/style.css)
        // style-loader --- позволяет добавить стили описанные в css в секцию <head></head>
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
