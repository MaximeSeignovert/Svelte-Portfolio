<SectionLayout id="contact" title="Contact">
  <div class="z-10 max-w-[600px] my-0 mx-auto mb-[20px]">
    <form on:submit|preventDefault={submitForm} class="flex flex-col">
      <label class="mb-[5px]" for="name">Nom :</label>
      <input 
        class="z-10 mb-[15px] p-[10px] rounded text-black dark:text-white bg-white/30 dark:bg-gray-600/30 backdrop-blur shadow ring-[--main-accentuation-color] focus:ring-2 outline-none" 
        type="text" 
        id="name" 
        bind:value={formData.name} 
        required
      >
  
      <label class="mb-[5px]" for="email">E-mail :</label>
      <input 
        class="z-10 mb-[15px] p-[10px] rounded text-black dark:text-white bg-white/30 dark:bg-gray-600/30 backdrop-blur shadow ring-[--main-accentuation-color] focus:ring-2 outline-none" 
        type="email" 
        id="email" 
        bind:value={formData.email} 
        required
      >
  
      <label class="mb-[5px]" for="message">Message :</label>
      <textarea class="z-10 max-h-[200px] mb-[15px] p-[10px] rounded text-black dark:text-white bg-white/30 backdrop-blur dark:bg-gray-600/30 shadow ring-[--main-accentuation-color] focus:ring-2 outline-none" id="message" bind:value={formData.message} required></textarea>
  
      <button class="bg-[var(--main-accentuation-color)] dark:text-[--dark-foreground-color] text-[--light-foreground-color] p-2.5 cursor-pointer rounded shadow hover:opacity-80" type="submit">Envoyer</button>
    </form>
  </div>  
  <Toaster />
</SectionLayout>

<script>
	import toast, { Toaster } from 'svelte-french-toast';
  import SectionLayout from "../components/SectionLayout.svelte";
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  const toastDefaultStyle = `border-radius: 200px;background: var(--main-background-color);color: var(--main-foreground-color);`;

  const submitForm = async () => {
    const response = await fetch('https://formspree.io/f/xzbnrelk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Toast message envoyé
      toast.success('Votre message a été envoyé avec succès !', {style: toastDefaultStyle,position: "bottom-right",duration: 2000});

      // Réinitialise le formulaire après l'envoi
      formData = {
        name: '',
        email: '',
        message: ''
      };
    } else {
      // Toast Erreur
      toast.error('Une erreur s\'est produite lors de l\'envoi du message.', {style: toastDefaultStyle,position: "bottom-right",duration: 2000});
    }
  };
</script>