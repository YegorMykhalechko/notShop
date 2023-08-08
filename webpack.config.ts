import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config = (): Configuration => {
  return {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      historyApiFallback: true,
      open: true,
      port: 9000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          include: path.resolve(__dirname, "src"),
          exclude: [/node_modules/, /\.(spec|test).(ts|js)x?$/i],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: "defaults",
                    },
                  ],
                  "@babel/preset-react",
                ],
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.(sass|less|css)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
      alias: {
        src: path.resolve(__dirname, "./src/"),
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].bundle.css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        inject: true,
      }),
    ],
  };
};

export default config;
