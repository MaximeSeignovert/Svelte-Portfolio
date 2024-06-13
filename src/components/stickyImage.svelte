<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    let scrollPercentage = writable(0);

    const singe = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Orangutan.png"
    const whale = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Spouting%20Whale.png"
    const boomerang = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Boomerang.png"

    import { currentTheme } from '../scripts/themeStore';

    let themeImage;

    // Subscribe to the current theme store to get the current image
    const unsubscribe = currentTheme.subscribe(value => {
        themeImage = value.imgLink;
    });

    onMount(() => {
      const handleScroll = () => {
        const root = document.documentElement;
        //root.style.setProperty('--main-accentuation-color', '#3b82f6');
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
    const pathPoints = [
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
  
  <div
    class="z-10 fixed hidden sm:block"
    style="top: {getPathPosition($scrollPercentage).y}vh; left: {getPathPosition($scrollPercentage).x}vw; transform: rotate({getPathPosition($scrollPercentage).rotation}deg);">
    <img src={themeImage} alt="Sticky" class="w-32" />
  </div>
  