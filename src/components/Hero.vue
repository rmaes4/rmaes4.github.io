<template>
  <v-container id="hero" fluid class="pa-10">
    <v-row justify="center" align="center">
      <v-avatar size="200" id="profile">
        <g-image
          src="~/assets/profile.jpg"
          width="200"
          height="200"
          alt="A picture of Rob Maes"
        />
      </v-avatar>
      <v-col cols="auto">
        <div class="text-h3 alt-font font-weight-bold">Rob Maes</div>
        <div id="tagline" class="text-subtitle-1 pl-1 font-weight-bold">
          Self-taught developer and lover of all things tech
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
#hero {
  background-color: rgb(0, 166, 118);
  color: white !important;
}

.alt-font {
  font-family: "Source Sans Pro", sans-serif !important;
}

#profile {
  border: 1px solid white;
}

#tagline {
  line-height: 1.2rem;
  font-weight: 500;
}
</style>
