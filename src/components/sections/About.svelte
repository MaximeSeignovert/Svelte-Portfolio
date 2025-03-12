<script>
  import { scrollToSection } from "../../scripts/utils";
  import SectionLayout from "../../components/SectionLayout.svelte";
</script>

<SectionLayout id="about" title="À propos">
  <div class="flex justify-center flex-col sm:flex-row w-full">
    <div class="flex flex-col w-[80%] sm:w-[40%] h-fit top-[10px] max-sm:mb-5 sm:mr-5 sm:pl-10">
      <h3 class="font-bold tracking-tighter text-5xl">Maxime Seignovert</h3>
      <p class="text-[--main-accentuation-color] font-bold">Développeur logiciel Junior</p>
    </div>
    <div class="z-0 sm:w-[50%] sm:pr-[75px]">
      <p class="text-lg mb-4 text-justify">
        Bienvenue sur mon portfolio ! Je suis <span class="text-[--main-accentuation-color] font-bold">développeur logiciel passionné</span>, actuellement en
        <span class="text-[--main-accentuation-color] font-bold">4ème année d'informatique à l'ESGI Grenoble</span>, spécialisé en Parcours Architecture Logiciel. 
        J'ai la chance d'être en alternance chez <span class="text-[--main-accentuation-color] font-bold">Horizontal Software</span>, où j'exerce en tant que développeur logiciel.
      </p>

      <p class="text-lg mb-4 text-justify">
        Au fil de mes expériences, j'ai travaillé sur une large variété de projets, utilisant différentes technologies et langages de programmation, notamment
        <span class="text-[--main-accentuation-color] font-bold">JavaScript, C#/.NET, React, Vite.js, Python, Node.js</span>, et bien d'autres. Mon engagement envers la
        <span class="text-[--main-accentuation-color] font-bold">qualité</span>, la <span class="text-[--main-accentuation-color] font-bold">créativité</span> et la
        <span class="text-[--main-accentuation-color] font-bold">collaboration</span> me permet de réaliser des solutions innovantes et efficaces.
      </p>

      <p class="text-lg mb-4 text-justify">
        Je vous invite à parcourir mon portfolio pour découvrir mes projets et réalisations. N'hésitez pas à me
        <a class="text-[--main-accentuation-color] font-bold hover:underline" href="#contact" on:click="{(event) => scrollToSection('contact', event, 80)}">contacter</a>
        si vous avez une idée à concrétiser ou si vous souhaitez simplement échanger. Au plaisir de collaborer avec vous !
      </p>
    </div>
  </div>
</SectionLayout>
  