<script>
import { scrollToSection } from "../scripts/utils";

</script>

<section class="p-[20px]">
<h2 id="about" class="text-2xl font-semibold pb-5 text-center">A propos</h2>

<div class="flex justify-center flex-col sm:flex-row w-[100%]">
  <div class="flex flex-col w-[80%] sm:w-[40%]  h-fit top-[10px] max-sm:mb-5 sm:mr-5 sm:pl-10">
    <h3 class="font-bold tracking-tighter text-5xl ">Maxime Seignovert</h3>
    <p class="text-[--main-accentuation-color] font-bold">Développeur logiciel Junior</p>
  </div>
  <div class="z-10 sm:w-[50%] sm:pr-[75px]">
    <p class="text-lg mb-4 text-justify">Bienvenue sur mon portfolio ! Je suis <span class="text-[--main-accentuation-color] font-bold">développeur</span> logiciel passionné actuellement basé à Grenoble.<br>
      
      J'ai eu l'opportunité de travailler sur une variété de projets stimulants.<br></p>

      <p class="text-lg mb-4 text-justify">Mon experience en tant que développeur s'étend sur divers langages de programmation et technologies, notamment <span class="text-[--main-accentuation-color] font-bold">Javascript, C#/.NET, React, Python, Node.js,</span> etc.
      
      Ce qui me distingue en tant que développeur, c'est mon engagement envers la <span class="text-[--main-accentuation-color] font-bold">qualité</span>, la <span class="text-[--main-accentuation-color] font-bold">créativité</span> et la <span class="text-[--main-accentuation-color] font-bold">collaboration</span>.</p>
      
      <p class="text-lg mb-4 text-justify">Je vous invite à parcourir mon portfolio pour découvrir mes réalisations et n'hésitez pas à me <a class="text-[--main-accentuation-color] font-bold hover:underline" href="#contact" on:click={(event) => scrollToSection('contact', event, 80)}>contacter</a> si vous avez un projet en tête ou si vous souhaitez simplement échanger. Au plaisir de collaborer avec vous !
      </p>

  </div>
  
</div>

</section>
