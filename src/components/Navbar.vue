<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light  ">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Profile</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sekolah">History Pendidikan</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Kerja">Pengalaman Kerja</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/TentangSaya">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contantperson">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
