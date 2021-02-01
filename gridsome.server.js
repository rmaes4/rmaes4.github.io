// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = function(api) {
  api.chainWebpack((config, { isServer }) => {
    config.plugin("vuetify-loader").use(VuetifyLoaderPlugin);
  });

  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const Languages = require("./src/data/languages.json");
    const Databases = require("./src/data/databases.json");
    const Frameworks = require("./src/data/frameworks.json");
    const Platforms = require("./src/data/platforms.json");
    const OpenSource = require("./src/data/open-source.json");

    const languageCol = addCollection({
      typeName: "Languages",
    });
    const databaseCol = addCollection({
      typeName: "Databases",
    });
    const frameworkCol = addCollection({
      typeName: "Frameworks",
    });
    const platformCol = addCollection({
      typeName: "Platforms",
    });

    const opensourceCol = addCollection({
      typeName: "OpenSourceProjects",
    });

    for (const language of Languages) {
      languageCol.addNode(language);
    }

    for (const database of Databases) {
      databaseCol.addNode(database);
    }

    for (const framework of Frameworks) {
      frameworkCol.addNode(framework);
    }

    for (const platform of Platforms) {
      platformCol.addNode(platform);
    }

    for (const project of OpenSource) {
      opensourceCol.addNode(project);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
