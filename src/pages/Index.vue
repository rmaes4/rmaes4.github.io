<template>
  <Layout>
    <v-main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </v-main>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";
import Contact from "~/components/Contact";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Hero,
    About,
    Projects,
    Contact,
  },
};
</script>

<style></style>
