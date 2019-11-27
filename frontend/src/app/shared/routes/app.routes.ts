export class AppRoutes {

  static generateRoutes() {

    return {
      public : {

        path: `public`,
        name: `public`,

        welcome: {
          name: `welcome`,
          path: `public/welcome`,
        },

        // about us
        about: {
          name: `about`,
          path: `public/about`,
        },

        // community
        community: {
          name: `communities`,
          path: `public/communities`
        },

        // contact us
        contact: {
          name: 'contact',
          path: `public/contact`
        },


      }
    }

  }
}
