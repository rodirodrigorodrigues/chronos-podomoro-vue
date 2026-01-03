<script setup lang="ts">
import Container from '../../components/Container/index';
import Logo from '../../components/Logo/index';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';
</script>

<template>
  <Container>
    <Logo />
  </Container>
  <Container>
    <Menu />
  </Container>
  <slot />
  <Container>
    <Footer />
  </Container>
</template>