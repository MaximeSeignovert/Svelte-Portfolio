<script>
    export let title = "Titre par défaut";
    export let description = "Description par défaut";
    export let date = "Date par défaut";
    export let lieu = "Paris 75000";
    export let entreprise = "Entreprise par défaut";
    /**
     * @type {any[]}
     */
     export let tags = [];
    export let lien = "";
  </script>
  
  <a href="{lien}" target="_blank" >
    <div class="p-5 max-w-[500px] my-5 dark:bg-gray-900 bg-gray-100 rounded-lg shadow transition hover:scale-105">
        <p class="mb-2 text-xl font-semibold">{title}</p>
        <p class=" text-base dark:text-gray-400 text-gray-700">📅 {date}</p>
        <p class="mb-4 text-base dark:text-gray-400 text-gray-700">📍 {lieu}, {entreprise}</p>
        <p class="mb-4 text-base dark:text-gray-300 text-gray-700">{description}</p>
        <ul class="flex list-inside">
          {#each tags as tag}
            <li class="text-base mx-1 px-1 bg-[var(--main-accentuation-color)] rounded text-white">{tag}</li>
          {/each}
        </ul>
      </div>
    </a>
  