<template>
  <div class="about">
    <fieldset>
      <legend>Choose your monster's features:</legend>

      <div>
        <input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">header content</label>
      </div>

      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">list content</label>
      </div>
    </fieldset>

    <div class="form-container">
      <h2>NEW VALUES OF CONTENT</h2>

      <div class="input-group">
        <label for="text1">Title</label>
        <p>TITLE</p>
        <input v-model="titleval" type="text" id="text1" placeholder="Enter the title value">
      </div>

      <div class="input-group">
        <label for="text2">Description</label>
        <p>DESCRIPTION</p>
        <input v-model="descriptionval" type="text" id="text2" placeholder="Enter the description value">
      </div>

      <button @click="updatevals">Submit</button>

      <p>{{ descrition }}</p>
    </div>

  </div>
</template>

<script>

export default {
  
data(){
  return {
    titleval:"",
    descriptionval:""
  }
},

methods: {
    updatevals(){
      this.$store.state.steps[1].popover.description=this.descriptionval;
      this.$store.state.steps[1].popover.title=this.titleval;
    }
},
computed: {
  descrition() {
    return this.$store.state.steps[1].popover.description;
  }
}
}
</script>

<style scope>
p,
label {
  font:
    1rem 'Fira Sans',
    sans-serif;
}

input {
  margin: 0.4rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.form-container {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.input-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #333;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
