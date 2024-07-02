<script>
    import Fa from 'svelte-fa'
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<footer class="w-[100vw] bg-gray-800 text-white p-5 flex justify-around items-center">
    
    <div>
      <ul class="list-none flex space-x-4">
        <a target="_blank" href="https://github.com/MaximeSeignovert" class="text-white flex flex-row items-center">
          <Fa icon={faGithub} />
          <li class="px-2 no-underline hover:underline">Github</li>
        </a>
        
        <a target="_blank" href="https://www.linkedin.com/in/maxime-seignovert-735145317/" class="text-white flex flex-row items-center">
          <Fa icon={faLinkedin} />
          <li class="px-2 no-underline hover:underline">Linkedin</li>
        </a>

      </ul>
    </div>
    <div >
      <p class="flex flex-row flex-justify cursor-pointer my-[5px]">Powered by <img class="w-4 ml-2 backdrop-filter-" alt="Icone Svelte" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"/></p>
    </div>
  </footer>