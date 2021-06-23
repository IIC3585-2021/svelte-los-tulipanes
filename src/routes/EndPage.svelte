<script>
    import { cats } from '../store';
    $: likedCats = cats.likedCatNames()
    // console.log(cats)
    const handling = () => {
        alert("Tu registro ha sido exitoso")
        location.reload()
    }
</script>

<h2>Your liked cats:</h2>
  <div id="cat-list">
    {#each likedCats as cat}
        <div class="cat">
            <p>{ cat }</p>
        </div>
    {/each}
  </div>
  <div id="end">
    <h2>Want to know when they're available for adoption?</h2>
    <div id="form">
      <input v-model="mail" placeholder="Your email here" />
      <button on:click={handling}>
        <font-awesome-icon icon="check" size="2x" />
      </button>
    </div>
  </div>

  <style>
    #cat-list {
      overflow: scroll;
      overflow-x: hidden;
      width: 100%;
      margin: auto;
      text-align: center;
      font-size: 1.2rem;
    }
    
    #cat-list .cat p {
      margin: 0.2em 0em;
    }
    
    #end {
      text-align: center;
      margin-bottom: 1em;
    }
    
    #form {
      display: flex;
      align-content: flex-end;
      justify-content: center;
    }
    </style>