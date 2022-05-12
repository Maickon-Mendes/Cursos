const presets = [
    [
        "@babel/preset-env" , //para converter codigo para es5
        {
            useBuiltIns : "usage",  //para converter codigo para es3
            corejs: "3.3.2"
        }
    ]
]

module.exports = {presets}  // exportação da variavel 