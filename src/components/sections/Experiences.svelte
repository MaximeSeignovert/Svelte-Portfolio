<script>
  import SectionLayout from "../../components/SectionLayout.svelte";
  import ExperienceCard from "../../components/ExperienceCard.svelte";
  import experiences from '../../data/experiences.json'; 
</script>

<SectionLayout id="experience" title="Experience">
  <div class="relative flex flex-col items-center">
    <!-- Ligne verticale (cachée en mobile) -->
    <div class="absolute hidden sm:flex justify-center h-full w-[4px] bg-gradient-to-b from-[--main-accentuation-color] via-[--main-accentuation-color] via-90% to-transparent"></div>

    {#each experiences.reverse() as {title, date, lieu, entreprise, description, tags, lien}, i}
      <div class=" relative flex w-full sm:w-[90%] {i % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center mb-8">
        <!-- Point sur la timeline (caché en mobile) -->
        <div class="absolute hidden sm:flex justify-center items-center w-5 h-5 bg-[--main-accentuation-color] rounded-md" style="left: 50%; transform: translateX(-50%);"></div>
        
        <!-- Espacement pour la carte -->
        <div class="z-20 w-full sm:w-1/2 {i % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'} sm:ml-0">
          <ExperienceCard {title} {date} {lieu} {entreprise} {description} {tags} {lien} />
        </div>
      </div>
    {/each}
  </div>
</SectionLayout>
