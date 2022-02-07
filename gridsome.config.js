// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://101.35.2.170:1337/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        singleTypes: ['info'],
        // typeName: 'Strapi'
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ]
}
