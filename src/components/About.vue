<template>
  <v-container fluid id="about">
    <v-row justify="space-around">
      <v-col cols="12" md="4">
        <div
          class="text-h4 alt-font alt-font-color font-weight-bold text-uppercase mb-2"
        >
          About Me
        </div>

        <v-card>
          <v-card-text>
            <div class="font-weight-bold text-subtitle-1">
              Age
            </div>
            <div class="text-subtitle-1">{{ age }}</div>
            <div class="font-weight-bold text-subtitle-1">Location</div>
            <div class="text-subtitle-1">The Woodlands, TX</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              small
              color="rgb(36, 41, 46)"
              dark
              href="https://github.com/rmaes4"
              target="_blank"
              rel="noopener"
              >Github<v-icon right color="white">{{ svgGithub }}</v-icon></v-btn
            >
            <v-btn
              small
              color="rgb(244, 128, 36)"
              light
              href="https://stackoverflow.com/users/1148882/rmaes4"
              target="_blank"
              rel="noopener"
              >stackoverflow<v-icon right color="black">{{
                svgStackOverflow
              }}</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="mb-2">
        <div
          class="text-h4 alt-font alt-font-color font-weight-bold text-uppercase mb-2"
        >
          Technology
        </div>
        <v-expansion-panels mandatory accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Languages
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip
                v-for="language in $static.languages.edges"
                :key="language.node.id"
                :color="language.node.color"
                :dark="language.node.dark"
                class="ma-1 alt-font font-weight-bold"
                label
                :href="
                  language.node.color
                    ? `https://github.com/rmaes4?tab=repositories&q=&type=&language=${
                        language.node.name
                      }`
                    : ''
                "
              >
                {{ language.node.name }}
              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Frameworks
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip
                v-for="framework in $static.frameworks.edges"
                :key="framework.node.id"
                class="ma-1 alt-font font-weight-bold"
                :color="framework.node.color"
                :dark="framework.node.color ? true : false"
                label
                :href="
                  framework.node.color
                    ? `https://github.com/rmaes4?tab=repositories&q=&type=&language=vue`
                    : ''
                "
              >
                {{ framework.node.name }}
              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Databases
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip
                v-for="database in $static.databases.edges"
                :key="database.node.id"
                class="ma-1 alt-font font-weight-bold"
                label
              >
                {{ database.node.name }}
              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Platforms
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip
                label
                v-for="platform in $static.platforms.edges"
                :key="platform.node.id"
                class="ma-1 alt-font font-weight-bold"
              >
                {{ platform.node.name }}
              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<static-query>
query {
  languages: allLanguages(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name
        color
        dark
      }
    }
  }
  frameworks: allFrameworks(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name
        color
      }
    }
  }
  databases: allDatabases(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name
      }
    }
  }
  platforms: allPlatforms(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name
      }
    }
  }
}
</static-query>

<script>
import { mdiGithub, mdiStackOverflow } from "@mdi/js";
export default {
  computed: {
    age: () => {
      return Math.floor(
        (new Date() - new Date("1996-10-08").getTime()) / 3.15576e10
      );
    },
  },
  data: () => ({
    svgGithub: mdiGithub,
    svgStackOverflow: mdiStackOverflow,
  }),
};
</script>

<style scoped>
.alt-font {
  font-family: "Source Sans Pro", sans-serif !important;
}

.alt-font-color {
  color: rgb(0, 166, 118);
}
</style>
