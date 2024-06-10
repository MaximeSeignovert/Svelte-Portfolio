<script>
    import Header from '../components/Header.svelte';
    import About from '../sections/About.svelte';
    import Experience from '../sections/Experiences.svelte';
    import Projects from '../sections/Projects.svelte';
    import Contact from '../sections/Contact.svelte';
    import Footer from '../components/Footer.svelte';
    import ScrollToTop from '../components/scrollToTop.svelte';
    import ScrollDown from '../components/scrollDown.svelte';
  </script>
  
  <main class="" >
    <Header />
    <ScrollDown />
  
    <About />
    <Experience />
    <Projects />
    <Contact />
  
    <Footer />
    <ScrollToTop />
  </main>
  
<style lang="postcss">

</style>