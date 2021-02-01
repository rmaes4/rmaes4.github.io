<template>
  <v-container fluid id="contact">
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <div
          class="text-h6 text-center mt-10 mb-10 text-md-h4 alt-font font-weight-bold"
        >
          Say
          <a
            id="contact-link"
            class="text--white font-weight-medium"
            href="mailto:hello@robmaes.com"
            >hello@robmaes.com</a
          >
        </div>
        <div class="text-center">
          &copy; {{ new Date().getFullYear() }} Rob Maes
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  background-color: rgb(96, 23, 0);
  color: white;
}
.alt-font {
  font-family: "Source Sans Pro", sans-serif !important;
}

#contact-link:link {
  color: white !important;
}
</style>
