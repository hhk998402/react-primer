##First installation (https://www.educative.io/answers/how-to-create-a-react-application-with-webpack)

1. npm init -y
2. npm i react react-dom
3. npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server
4. Install Material UI: npm install @mui/material @emotion/react @emotion/styled
5. React Router DOM install: npm install react-router-dom
6. Add following setting in webpack.config.js so that browserrouter works 
<pre>
devServer: {
    historyApiFallback: true,
},
</pre>
7. Install Axios to perform API requests: <code>npm install axios</code>