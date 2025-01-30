<script>
  export let id = "";
  export let title = "";
  export let customClass = "";
</script>

<section {id} class="relative w-full py-8 md:py-16 px-4 md:px-8 lg:px-16 {customClass}">
  <div class="mx-auto">
    {#if title}
      <h2 class="text-3xl font-semibold mb-12 text-center">{title}</h2>
    {/if}
    
    <div class="relative">
      <slot />
    </div>
  </div>
</section> 