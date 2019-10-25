const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', href: '/lotus.png' },
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" },    
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons" },    
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800&display=swap" },    
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.scss'
  ],


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {      
      config.module.rules.push ({
        test:  /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        },
      })
    },
    
    
  }
}
