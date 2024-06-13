<script>
    import { currentTheme } from '../scripts/themeStore';
  import { onMount } from 'svelte';

  let themes = [];
  let selectedTheme = '';

  // Charger les thèmes depuis le fichier JSON
  async function loadThemes() {
    const response = await fetch('src/data/theme.json');
    themes = await response.json();
    console.log(themes)

    // Initialiser le thème sélectionné
    if (themes.length > 0) {
      selectedTheme = themes[0].Name;
      changeTheme(themes[0]);
    }
  }

  function changeTheme(theme) {
    document.documentElement.style.setProperty('--dark-accentuation-color', theme.darkColor);
    document.documentElement.style.setProperty('--light-accentuation-color', theme.lightColor);


    // Mettre à jour le favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = theme.imgLink;

    // Mettre à jour le store du thème actuel
    currentTheme.set(theme);
  }

  function handleSelectChange(event) {
    const selectedThemeName = event.target.value;
    const selectedTheme = themes.find(theme => theme.Name === selectedThemeName);
    changeTheme(selectedTheme);
  }

  onMount(() => {
    loadThemes();
  });

</script>

<style>

</style>

<select class="cursor-pointer rounded bg-transparent border border-[var(--main-foreground-color)] p-[5px] m-[5px] mr-[10px]" on:change={handleSelectChange}>
  {#each themes as theme}
    <option class="bg-[var(--main-background-color)] text-[var(--main-foerground-color)]" value={theme.Name}>{theme.Name}</option>
  {/each}
</select>