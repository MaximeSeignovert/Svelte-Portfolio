<script lang="ts">
  import { scrollToSection } from '../scripts/utils.js';
  import Fa from 'svelte-fa'
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
  import { onMount } from 'svelte';

  let darkMode = false; // état initial du thème

  const toggleTheme = () => {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onMount(() => {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
  });

</script>

<div id="div-header" class="hidden sm:flex z-20 justify-center sticky top-0 text-[var(--main-foreground-color)] drop-shadow font-medium overflow-x-hidden">
  <nav class="flex justify-between w-[100vw] bg-[--main-background-color] ">
    <ul class="flex justify-start">
      <li><a class="hover:text-[var(--main-accentuation-color)]" href="#about" on:click={(event) => scrollToSection('about', event, 80)}>A propos</a></li>
      <li><a class="hover:text-[var(--main-accentuation-color)]" href="#experience" on:click={(event) => scrollToSection('experience', event, 80)}>Experience</a></li>
      <li><a class="hover:text-[var(--main-accentuation-color)]" href="#projects" on:click={(event) => scrollToSection('projects', event, 80)}>Projets</a></li>
      <li><a class="hover:text-[var(--main-accentuation-color)]" href="#contact" on:click={(event) => scrollToSection('contact', event, 80)}>Contact</a></li>
    </ul>
  
    <div class="flex items-center">
     
      <button title="Toggle light/dark mode" class="pr-[15px] hover:text-[var(--main-accentuation-color)]" id="button-light-mode" on:click={toggleTheme}>
        {#if darkMode}
          <Fa icon={faSun} />
        {:else}
          <Fa icon={faMoon} />
        {/if}
      </button>
    </div>
  </nav>
</div>


<style lang="postcss">
  li a {
    margin: 14px 16px;
    display: inline-block;
    padding-bottom:2px;
    background-image: linear-gradient(var(--main-accentuation-color) 0 0);
    background-position: 0 100%; /*OR bottom left*/
    background-size: 0% 2px;
    background-repeat: no-repeat;
    transition:
    background-size 0.3s,
    background-position 0s 0.3s; /*change after the size immediately*/
    text-decoration: none;
  }

  li a:hover {
    background-position: 100% 100%; /*OR bottom right*/
    background-size: 100% 2px;
  }
</style>