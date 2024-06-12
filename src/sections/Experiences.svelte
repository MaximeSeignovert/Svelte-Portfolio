<script>
  import ExperienceCard from "../components/ExperienceCard.svelte";
  import experiences from '../data/experiences.json';
</script>

<section class="p-[20px]">
  <h2 id="experience" class="text-2xl font-semibold pb-5 text-center">Experience</h2>
  <div class="relative w-[10px] h-[100vh] dark:bg-gray-900 bg-gray-100 shadow rounded left-[50%]"/>
  <div class="flex flex-col items-center">
    {#each experiences as {title, date,lieu,entreprise, description, tags, lien}}
    <ExperienceCard {title} {date}{lieu}{entreprise} {description} {tags} {lien} />
    {/each}
  </div>
  
</section>
