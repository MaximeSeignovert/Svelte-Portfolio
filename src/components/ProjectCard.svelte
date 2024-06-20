<script>
    export let title = "Titre par défaut";
    export let description = "Description par défaut";
    export let date = "Date par défaut";
    /**
     * @type {any[]}
     */
     export let tags = [];
    export let lien = "";
    export let lienImage = "";
  </script>
  
    <div class="flex flex-col justify-around z-10 p-5 max-w-[400px] min-h-[250px] my-5 sm:mx-5 bg-white/30 dark:bg-gray-600/30 backdrop-blur rounded-lg shadow transition hover:scale-105">
        <div class="flex items-center mb-2">
          <img src={lienImage} class="w-[40px] mr-2 h-auto drop-shadow-lg" alt="">
          <a href="{lien}" target="_blank" ><p class="text-xl font-semibold hover:underline">{title}</p></a>
        </div>
        <p class=" text-base dark:text-gray-400 text-gray-700">📅 {date}</p>
        <p class="mb-4 text-base dark:text-gray-300 text-gray-700">{description}</p>
        <ul class="flex list-inside">
          {#each tags as tag}
            <li class="text-sm mx-1 px-1 dark:text-[--dark-foreground-color] text-[--light-foreground-color] bg-[var(--main-accentuation-color)] rounded">{tag}</li>
          {/each}
        </ul>
      </div>
  