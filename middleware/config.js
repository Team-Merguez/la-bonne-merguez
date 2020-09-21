module.exports = {
    title: 'La Bonne Merguez',
    cities: ['Paris', 'Lyon', 'Marseille'],
    routes: {
        index: '/',
        home: '/home',
        login: '/login',
        signup: '/signup',
        admin: '/admin',
        messages: '/messages',
        products: '/products',
        cities: {
          paris: '/paris',
          lyon: '/lyon',
          marseille: '/marseille'
        }
      },
    templates: {
        layout: 'layout',
        error: 'error',
        home: 'home',
        login: 'login',
        signup: 'signup',
        admin: 'admin',
        messages: 'messages',
        products: 'products',
        cities: 'cities'
      },
    isAuth : {
        userisAuth: 'User is connected, redirect to',
        userNotAuth: 'User is not connected, redirect to'
    }
}

// Full length config for lazy people like me
exports = [

  // Routes paths
  indexRoutes = module.exports.routes.index,
  homeRoutes = module.exports.routes.home,
  loginRoutes = module.exports.routes.login,
  signupRoutes = module.exports.routes.signup,
  adminRoutes = module.exports.routes.admin,
  messagesRoutes = module.exports.routes.messages,
  productsRoutes = module.exports.routes.products,
  citiesRoutes = module.exports.routes.cities,

  // Templates paths
  layoutTemplate = module.exports.templates.layou,
  errorTemplate = module.exports.templates.error,
  homeTemplate = module.exports.templates.home,
  loginTemplate = module.exports.templates.login,
  signupTemplate = module.exports.templates.signup,
  adminTemplate = module.exports.templates.admin,
  messagesTemplate = module.exports.templates.messages,
  productsTemplate = module.exports.templates.products,
  citiesTemplate = module.exports.templates.cities,

  // Console messages
  userIsNotAuthIndex = module.exports.isAuth.userNotAuth + ' ' + indexRoutes,
  userIsAuthAdmin = module.exports.isAuth.userisAuth + ' ' + adminRoutes,
  userIsNotAuthLogin = module.exports.isAuth.userNotAuth + ' ' + loginRoutes,
  userIsNotAuthSignup = module.exports.isAuth.userNotAuth + ' ' + signupRoutes
]