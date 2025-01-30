<script>
    import SectionLayout from "../components/SectionLayout.svelte";
    import ProjectCard from "../components/ProjectCard.svelte";
    import projets from '../data/projets.json';
    import { fade } from 'svelte/transition';
    import { SquareArrowOutUpRight  } from 'lucide-svelte';
    
    // Ajout d'une variable pour le projet sélectionné
    let selectedProject = projets[0];
</script>

<SectionLayout id="projects" title="Projets" customClass="bg-gradient-to-b from-transparent to-opacity-5">
  <!-- Version desktop avec sélection à gauche et détails à droite -->
  <div class="hidden md:flex flex-row gap-8 w-full">
    <!-- Liste des projets à gauche -->
    <div class="z-20 w-1/3 space-y-4 overflow-y-auto max-h-[600px]">
      {#each projets as projet}
        <div 
          class="z-20 relative cursor-pointer p-4 rounded-lg bg-white/30 dark:bg-gray-600/30 backdrop-blur shadow
          {selectedProject === projet ? 'after:absolute after:right-0 after:top-0 after:w-1 after:h-full after:bg-[var(--main-accentuation-color)] after:rounded-r-lg after:transition-all after:duration-300 after:ease-in-out' : ''}"
          on:click={() => selectedProject = projet}
        >
          <div class="flex items-center">
            <img src="{projet.lienImage}" alt="{projet.title} logo" class="w-8 h-8 mr-4" />
            <div>
              <h3 class="text-xl font-bold transition-colors duration-200">{projet.title}</h3>
              <p class="text-base dark:text-gray-400 text-gray-700 transition-colors duration-200">📅 {projet.date}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Conteneur pour les détails -->
    <div class="z-20 relative h-full w-2/3">
      {#key selectedProject}
        <div class="absolute w-full rounded-lg p-6 bg-white/30 dark:bg-gray-600/30 backdrop-blur shadow"
             transition:fade={{ duration: 200 }}>
          <h2 class="text-2xl font-bold mb-4">{selectedProject.title}</h2>
          <p class="text-base dark:text-gray-400 text-gray-700 mb-2">📅 {selectedProject.date}</p>
          <p class="mb-6 text-base dark:text-gray-300 text-gray-700">{selectedProject.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each selectedProject.tags as tag}
              <span class="text-sm px-2 py-1 dark:text-[--dark-foreground-color] text-[--light-foreground-color] bg-[var(--main-accentuation-color)] rounded">{tag}</span>
            {/each}
          </div>
          {#if selectedProject.lien}
            <a href={selectedProject.lien} target="_blank" rel="noopener noreferrer" 
               class="w-fit mt-4 px-4 py-2 transition-colors duration-200
               bg-[var(--main-accentuation-color)] dark:text-[--dark-foreground-color] text-[--light-foreground-color] rounded-lg flex items-center justify-center gap-2 hover:text-opacity-80">
              <SquareArrowOutUpRight class="size-5" />
              Voir le projet
            </a>
          {/if}
        </div>
      {/key}
    </div>
  </div>

  <!-- Version mobile -->
  <div class="md:hidden flex flex-row flex-wrap items-center justify-center">
    {#each projets as {title, date, description, tags, lien, lienImage}}
      <ProjectCard {title} {date} {description} {tags} {lien} {lienImage}/>
    {/each}
  </div>
</SectionLayout>

