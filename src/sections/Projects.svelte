<script>
    import ProjectCard from "../components/ProjectCard.svelte";
    import projets from '../data/projets.json';
</script>

<section class="p-[20px] flex flex-col items-center ">
  <h2 id="projects" class="text-2xl font-semibold pb-5 text-center">Projets</h2>
  <div class="flex flex-row flex-wrap items-center justify-center max-w-[1400px]">
    {#each projets as {title, date, description, tags, lien, lienImage}}
    <ProjectCard {title} {date} {description} {tags} {lien} {lienImage}/>
    {/each}
  </div>
</section>