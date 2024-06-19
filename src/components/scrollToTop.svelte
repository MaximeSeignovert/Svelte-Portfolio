<!-- ScrollToTop.svelte -->
<script>
    import { onMount } from 'svelte';
    import { changeToRandomTheme, currentTheme } from '../scripts/themeStore';
    import { fade } from 'svelte/transition';
  
    let scrollButton;
    let showButton = false;

    let themeImage;

    const unsubscribe = currentTheme.subscribe(value => {
        themeImage = value.imgLink;
    });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        showButton = true;
      } else {
        showButton = false;
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  
    function switchThemeAfterScrollTop(){
      new Promise(resolve => setTimeout(resolve, 1000)).then(()=>{
        changeToRandomTheme();
      });
      
    }
  </script>
  
  
  
  {#if showButton}
    <button in:fade={{ duration: 100 }} class="z-20 btn-transition fixed bottom-[20px] right-[20px]  text-[var(--main-foreground-color)] bg-transparent border-none rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 hover:bottom-[25px] hover:bg-black hover:bg-opacity-40" on:click="{scrollToTop}">
      <svg class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
      <img src={themeImage} class="block sm:hidden" on:click={switchThemeAfterScrollTop}>
    </button>
    
  {/if}
  
  <style lang="postcss">
    .btn-transition {
      transition: 0.3s ease;
    }
  </style>