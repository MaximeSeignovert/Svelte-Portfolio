<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let showIndicator = true;

  const handleScroll = () => {
    showIndicator = window.scrollY === 0;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
</script>

{#if showIndicator}
  <div class="z-30 fixed border-5 h-[150px] w-[100vw] bottom-0 bg-gradient-to-b from-transparent from-0% to-[--main-background-color]" in:fade={{ duration: 300 }} out:fade={{ duration: 100 }}>
    <div class="flex justify-center items-end h-[100%] pb-4">
      <svg class="animate-bounce w-[34px] h-[34px] stroke-[--main-foreground-color] opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 29">
        <rect x="0.5" y="0.5" width="15" height="21" rx="7.5" fill="transparent"/>
        <path d="M8 4L8 8" stroke-linecap="round"/>
        <path d="M12.9294 22.9366L7.93656 27.9294L3 22.9928" stroke-linecap="round" fill="transparent"/>
      </svg>
    </div>
  </div>
{/if}