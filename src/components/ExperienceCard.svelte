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
  
  
    <div class="z-10 p-5 w-full bg-white/30 dark:bg-gray-600/30 backdrop-blur rounded-lg shadow transition hover:scale-[1.02]">
        <a href="{lien}" target="_blank" ><p class="mb-2 text-xl font-semibold hover:underline">{title}</p></a>
        <p class=" text-base dark:text-gray-400 text-gray-700">📅 {date}</p>
        <p class="mb-4 text-base dark:text-gray-400 text-gray-700">📍 {lieu}, {entreprise}</p>
        <p class="mb-4 text-base dark:text-gray-300 text-gray-700">{description}</p>
        <ul class="flex flex-wrap list-inside gap-2">
          {#each tags as tag}
            <li class="text-sm px-2 py-1 dark:text-[--dark-foreground-color] text-[--light-foreground-color] bg-[var(--main-accentuation-color)] rounded">{tag}</li>
          {/each}
        </ul>
      </div>