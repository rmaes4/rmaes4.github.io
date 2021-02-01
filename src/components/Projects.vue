<template>
  <v-container fluid id="projects">
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <div
          class="text-h4 alt-font alt-font-color font-weight-bold text-uppercase mb-2 text-center mt-2"
        >
          Open Source Contributions
        </div>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown" align-top>
          <v-timeline-item
            fill-dot
            small
            color="rgb(96, 23, 0)"
            v-for="osProject in $static.openSourceProjects.edges"
            :key="osProject.node.id"
          >
            <template v-slot:icon>
              <v-avatar
                color="rgb(96, 23, 0)"
                rounded="lg"
                :size="$vuetify.breakpoint.smAndDown ? 48 : 48"
              >
                <g-image
                  fit="inside"
                  v-if="osProject.node.id == 1"
                  src="~/assets/tiled.png"
                  height="75"
                />
                <g-image
                  fit="inside"
                  v-if="osProject.node.id == 2"
                  src="~/assets/soundcleod.svg"
                  height="75"
                />
                <g-image
                  fit="inside"
                  v-if="osProject.node.id == 3"
                  src="~/assets/runelite.png"
                  height="75"
                />
              </v-avatar>
            </template>
            <v-card color="rgb(96, 23, 0)" dark>
              <v-card-title
                ><div class="title">{{ osProject.node.repoName }}</div>
              </v-card-title>
              <v-card-subtitle>
                <div class="subtitle-2">
                  {{ osProject.node.description }}
                </div>
              </v-card-subtitle>
              <v-card-text class="white text--primary">
                <p class="pt-2">{{ osProject.node.contribution }}</p>
                <v-chip
                  label
                  class="alt-font font-weight-bold"
                  :href="
                    `https://github.com/rmaes4?tab=repositories&q=&type=&language=${
                      osProject.node.language
                    }`
                  "
                  >{{ osProject.node.language }}</v-chip
                >
                <v-btn
                  fab
                  x-small
                  class="ml-2"
                  :href="
                    `https://github.com/${
                      osProject.node.fullRepoName
                    }/pulls?q=is%3Apr+author%3Armaes4+is%3Aclosed`
                  "
                  ><v-icon>{{ svgGithub }}</v-icon></v-btn
                >
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<static-query>
query {
  openSourceProjects: allOpenSourceProjects(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        repoName
        fullRepoName
        description
        contribution
        language
      }
    }
  }
}
</static-query>

<script>
import { mdiGithub, mdiStackOverflow } from "@mdi/js";
export default {
  data: () => ({
    svgGithub: mdiGithub,
  }),
};
</script>

<style scoped>
#projects {
  background-color: rgb(224, 208, 193) !important;
}

.alt-font-color {
  color: rgb(96, 23, 0);
}

.alt-font {
  font-family: "Source Sans Pro", sans-serif !important;
}
</style>
