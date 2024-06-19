<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { currentTheme, changeTheme } from '../scripts/themeStore';
    import themes from '../data/theme.json';
    import { scale, draw, crossfade } from 'svelte/transition';
    import { bounceIn } from 'svelte/easing';

    let mouseX = 0,mouseY = 0;
    let themeSelectionShown = false;
    let themeImage;
    let scrollPercentage = writable(0);

    function toggleThemeSelection(event){
      themeSelectionShown = !themeSelectionShown;
      if(themeSelectionShown){
        mouseX = event.offsetX;
        mouseY = event.offsetY;
      }
    }

    // Subscribe to the current theme store to get the current image
    const unsubscribe = currentTheme.subscribe(value => {
        themeImage = value.imgLink;
    });

    onMount(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollPercentage.set(scrollPercent);
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  
    // Points de contrôle définissant le chemin et la rotation
    let pathPoints = [
      { x: 15, y: 40, rotation: 0 },//About
      { x: 10, y: 20, rotation: 45 }, // Experience
      { x: 50, y: 20, rotation: 90 }, // Projets
      { x: 75, y: 50, rotation: 135 }, // Contact
      { x: 80, y: 40, rotation: 360 } // Footer
    ];

    
  
    // Fonction d'interpolation linéaire
    function lerp(a, b, t) {
      return a + (b - a) * t;
    }
  
    // Fonction pour obtenir la position et la rotation interpolée
    function getPathPosition(percentage) {
      let index = Math.floor(percentage / (100 / (pathPoints.length - 1)));
      if(index>pathPoints.length - 1 ) index = pathPoints.length - 1;
      const start = pathPoints[index];
      const end =index==pathPoints.length-1 ? pathPoints[index] : pathPoints[index + 1];
      const localPercentage = (percentage % (100 / (pathPoints.length - 1))) / (100 / (pathPoints.length - 1));
      const x = lerp(start.x, end.x, localPercentage);
      const y = lerp(start.y, end.y, localPercentage);
      const rotation = lerp(start.rotation, end.rotation, localPercentage);
      return { x, y, rotation };
    }
  </script>
  
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={toggleThemeSelection}
    class="z-10 fixed hidden sm:block cursor-pointer"
    style="top: {getPathPosition($scrollPercentage).y}vh; left: {getPathPosition($scrollPercentage).x}vw; transform: rotate({getPathPosition($scrollPercentage).rotation}deg);">
    <img src={themeImage} alt="Sticky" class="w-32" />
    {#if themeSelectionShown}
    <div
      in:scale={{ duration: 200}}
      class="absolute bg-transparent p-2 "
      style="top: {mouseY}px; left: {mouseX}px;">
      {#each themes as theme}
        <button 
          title="{theme.Name}"
          class="text-base hover:scale-110 min-w-[20px] m-1 px-1 dark:text-white text-black dark:bg-black/90 bg-white/90 shadow rounded"
          on:click={() => changeTheme(theme)}>
          {theme.emoji}
        </button>
      {/each}
    </div>
  {/if}
  </div>
  
