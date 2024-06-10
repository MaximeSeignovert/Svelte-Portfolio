<!-- ScrollToTop.svelte -->
<script>
    import { onMount } from 'svelte';
  
    let scrollButton;
    let showButton = false;
  
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
  </script>
  
  <style>
    .scroll-to-top-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      color: var(--main-accentuation-color);
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s ease;
    }
  
    .scroll-to-top-btn:hover {
      opacity: 0.8;
      bottom: 25px;
      background-color: rgba(0, 0, 0, 0.363);
    }
  
    .scroll-to-top-btn svg {
      width: 20px;
      height: 20px;
    }
  </style>
  
  {#if showButton}
    <button class="scroll-to-top-btn" on:click="{scrollToTop}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button>
  {/if}
  