<script>
    export let title = "Titre par défaut";
    export let description = "Description par défaut";
    export let date = "Date par défaut";
    export let lieu = "Ville 99000";
    export let entreprise = "Entreprise par défaut";
    /**
     * @type {any[]}
     */
     export let tags = [];
    export let lien = "";
  </script>
  
  
    <div class="z-10 p-5  max-w-[800px] my-5 bg-white/30 dark:bg-gray-600/30 backdrop-blur rounded-lg shadow transition hover:scale-105 ">
        <a href="{lien}" target="_blank" ><p class="mb-2 text-xl font-semibold hover:underline">{title}</p></a>
        <p class=" text-base dark:text-gray-400 text-gray-700">📅 {date}</p>
        <p class="mb-4 text-base dark:text-gray-400 text-gray-700">📍 {lieu}, {entreprise}</p>
        <p class="mb-4 text-base dark:text-gray-300 text-gray-700">{description}</p>
        <ul class="flex list-inside">
          {#each tags as tag}
            <li class="text-base mx-1 px-2 dark:text-[--dark-foreground-color] text-[--light-foreground-color] bg-[var(--main-accentuation-color)] rounded">{tag}</li>
          {/each}
        </ul>
      </div>