<footer>
    <div>
      <h3>Adresse</h3>
      <p>123 Rue de la Programmation</p>
      <p>Ville, Pays</p>
    </div>
    <div>
      <h3>Réseaux Sociaux</h3>
      <ul>
        <li><a href="#">Github</a></li>
        <li><a href="#">Linkedin</a></li>
      </ul>
    </div>
    <div >
      <p class="flex flex-row flex-justify cursor-pointer">Made With 🧡 Powered by <img class="w-4 ml-2" alt="Icone Svelte" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"/></p>
    </div>
  </footer>
  
  <style>
    footer {
      background-color: #333;
      color: white;
      padding: 20px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
    }
  
    h3 {
      font-size: 1.2em;
      margin-bottom: 10px;
    }
  
    p {
      margin: 5px 0;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      margin-bottom: 5px;
    }
  
    a {
      color: white;
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  