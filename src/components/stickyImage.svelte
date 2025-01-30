<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { currentTheme, changeTheme } from '../scripts/themeStore';
  import themes from '../data/theme.json';
  import { scale } from 'svelte/transition';

  let mouseX = 0, mouseY = 0;
  let themeSelectionShown = false;
  let themeImage;
  let scrollPercentage = writable(0);

  function toggleThemeSelection(event) {
      themeSelectionShown = !themeSelectionShown;
      if (themeSelectionShown) {
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

      const handleClickOutside = (event) => {
          if (themeSelectionShown && !event.target.closest('.theme-selection')) {
              themeSelectionShown = false;
          }
      };

      window.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleClickOutside);

      return () => {
          window.removeEventListener('scroll', handleScroll);
          document.removeEventListener('click', handleClickOutside);
      };
  });

  onDestroy(() => {
      // Removed because the cleanup is already handled in the onMount return function
  });

  // Points de contrôle définissant le chemin et la rotation
  let pathPoints = [
      { left: '250px', top: '325px', rotation: 0 },    // About
      { left: '150px', top: '350px', rotation: 90 },   // Experience
      { right: '200px', top: '350px', rotation: 135 },  // Projets
      { right: '100px', bottom: '300px', rotation: 180 }, // Contact
      { right: '300px', bottom: '300px', rotation: 360 }  // Footer
  ];

  // Fonction d'interpolation linéaire
  function lerp(a, b, t) {
      return a + (b - a) * t;
  }

  // Fonction pour obtenir la position et la rotation interpolée
  function getPathPosition(percentage) {
      let index = Math.floor(percentage / (100 / (pathPoints.length - 1)));
      if (index > pathPoints.length - 1) index = pathPoints.length - 1;
      const start = pathPoints[index];
      const end = index == pathPoints.length - 1 ? pathPoints[index] : pathPoints[index + 1];

      const startX = start.left !== undefined ? parseInt(start.left) : (window.innerWidth - 128) - parseInt(start.right);
      const startY = start.top !== undefined ? parseInt(start.top) : window.innerHeight - 128 - parseInt(start.bottom);
      const endX = end.left !== undefined ? parseInt(end.left) : window.innerWidth  - 128 - parseInt(end.right);
      const endY = end.top !== undefined ? parseInt(end.top) : window.innerHeight - 128 - parseInt(end.bottom);

      const localPercentage = (percentage % (100 / (pathPoints.length - 1))) / (100 / (pathPoints.length - 1));

      const x = lerp(startX, endX, localPercentage) + 'px';
      const y = lerp(startY, endY, localPercentage) + 'px';
      
      const rotation = lerp(start.rotation, end.rotation, localPercentage);
      return { x, y, rotation };
  }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={toggleThemeSelection}
  class="z-10 fixed hidden sm:block cursor-pointer theme-selection"
  style="top: {getPathPosition($scrollPercentage).y}; left: {getPathPosition($scrollPercentage).x}; transform: rotate({getPathPosition($scrollPercentage).rotation}deg);">
  <img src={themeImage} alt="Sticky" class="w-32 drop-shadow-2xl" />
  {#if themeSelectionShown}
  <div
    in:scale={{ duration: 100}}
    class="absolute bg-transparent p-2 min-w-[150px] theme-selection"
    style="top: {mouseY}px; left: {mouseX}px;">
    {#each themes as theme}
      <button 
        title="{theme.Name}"
        class="text-xl hover:scale-110 min-w-[20px] min-h-[20px] m-1 px-1 dark:text-white text-black dark:bg-gray-600/90 bg-white/90 shadow rounded"
        on:click={() => changeTheme(theme)}>
        {theme.emoji}
      </button>
    {/each}
  </div>
{/if}
</div>
