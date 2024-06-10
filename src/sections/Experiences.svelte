<script>
  import ExperienceCard from "../components/ExperienceCard.svelte";
  import experiences from '../data/experiences.json';
</script>

<section class="p-[20px]">
  <h2 id="experience" class="text-2xl font-semibold pb-5 text-center">Experience</h2>
  <div class="flex flex-col items-center">
    {#each experiences as {title, date,lieu,entreprise, description, tags, lien}}
    <ExperienceCard {title} {date}{lieu}{entreprise} {description} {tags} {lien} />
    {/each}
  </div>
  
</section>
