<template>
  <body>

    <header>
      <h1 id="element1">Your Company Name</h1>
      <p>Welcome to our awesome landing page!</p>
      <button @click="startDriver">TURU BAŞLAT</button>
    </header>

    <main>
      <section class="content-block">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </section>

      <section class="content-block">
        <h2>Our Services</h2>
        <ul>
          <li id="element2">Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section class="content-block">
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p id="element3">Phone: +123 456 7890</p>
        <a href="#" class="button">Get in Touch</a>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>

  </body>
</template>

<script>
export default {
  mounted(){
       
  },
  name: 'HelloWorld',
  data() {
    return {
      
    }
  },
  methods: {
    startDriver() {
      this.$store.dispatch('startDriver')
    },
    stopDriver() {
      this.$store.dispatch('stopDriver');
    }
    
  },
  computed: {
    name() {
      return this.data 
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

main {
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

.content-block {
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #555;
}

ul li{
  list-style: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}
</style>
