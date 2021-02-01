// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from "vuetify/lib/framework";
import "vuetify/dist/vuetify.min.css";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient, appOptions }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700",
  });

  // enable vue devtools in dev mode
  console.log(process.env.GRIDSOME_ENV);
  if (process.env.NODE_ENV == "dev") {
    head.script.push({
      src: "http://localhost:8098",
    });
  }

  const opts = {};

  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
