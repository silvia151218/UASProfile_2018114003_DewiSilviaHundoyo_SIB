<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">TTL</th>
          <th scope="col">Alamat</th>
          <th scope="col">Gol Darah</th>
           <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dewi Silvia Hundoyo</td>
          <td>Cirebon, 19 Desember 1999</td>
          <td>Cirebon</td>
          <td>O</td>
           <td>dewi.silvia1912@gmail.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import { onMounted } from '@vue/runtime-core';

export default {
  name: "Home",
  components: {
    Slider,
  },
  setup(){
    let pembeli = ref ([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/pembeli')
      .then(Response => {
        pembeli.value = response.data.data.data
      }) 
      .catch(eror => {
        console.log(error)
      })
    })
    
    return {
      pembeli
    }
  }
};
</script>
