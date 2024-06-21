module.exports = {
  build: {
    analyze: {
      analyzerMode: "static",
	  transpile: ['vee-validate/dist/rules'],
    },
  },
  server: {
    port: "3001",
  },
  /*modules: [
		'@nuxtjs/axios',
	],*/
  plugins: [{ src: "~/plugins/swiper.js", mode: "client" }],
  generate: {
    fallback: true,
  },
  build: {
    extractCSS: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*axios: {
		baseURL: process.env.API,
		headers : {
			common  : {},
			delete: {
				'Content-Type' : 'application/json;charset=utf-8',
				'Access-Control-Allow-Origin' : '*'
			},
			get: {
				'Content-Type' : 'application/x-www-form-urlencoded'
			},
			head: {},
			post: {
				'Content-Type' : 'application/json;charset=utf-8',
				'Access-Control-Allow-Origin' : '*'
			},
			put: {
				'Content-Type' : 'application/json;charset=utf-8'
			},
			patch: {
				'Content-Type' : 'application/json;charset=utf-8',
				'Access-Control-Allow-Origin' : '*'
			}
		},
		proxy: false,
		https: false
	},*/

  head: {
    title: "SANDI",
    titleTemplate: "%s - SANDI",
    meta: [
		{name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1run , viewport-fit=cover' },
	],
    link: [
		{ rel: 'icon', type: 'image/x-icon', href: '~/static/img/favicon.ico' }
	],
  },
};


export default {
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
		'@/assets/css/reset.css',
		'@/assets/css/common.css',
	],

}