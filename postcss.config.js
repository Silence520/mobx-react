module.exports = {
    plugins: [
        // require('precss'), //precss是一个预处理css的插件包，集成了很多postcss插件的功能，比如嵌套，变量，继承，混合，循环，判断
        // require('postcss-preset-env')({stage: 3,features: {'nesting-rules': true}}),
        // require('autoprefixer')({browsers: ['last 2 versions', '> 2%']})
        require('postcss-cssnext'),
        require('cssnano'),
    ]
}

  // "babel-preset-es2015": "^6.9.0",
    // "mobx-react-devtools": "^4.2.11",
    // "babel-preset-stage-1": "^6.5.0",