<!-- ScrollDown.svelte -->
<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let showIndicator = true;
  
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        showIndicator = false;
      } else {
        showIndicator = true;
      }
    };
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  </script>
  
  <style>
    .scroll-down-indicator {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      border: none;
      cursor: default;
      pointer-events: none;
      
    }
  
    .scroll-down-indicator svg {
      transition: 1s ease;
      width: 34px;
      height: 34px;
      fill: var(--main-foreground-color);
      stroke: var(--main-foreground-color) ;
      opacity: 0.8;
    }
  </style>
  
  {#if showIndicator}
    <div class="scroll-down-indicator"  in:fade={{ duration: 100 }}
    out:fade={{ duration: 100 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="29" viewBox="0 0 16 29">
            <rect x="0.5" y="0.5" width="15" height="21" rx="7.5"  fill="transparent"/>
            <path d="M8 4L8 8" stroke-linecap="round"/>
            <path d="M12.9294 22.9366L7.93656 27.9294L3 22.9928"  stroke-linecap="round" fill="transparent"/>
        </svg>
    </div>
  {/if}
  