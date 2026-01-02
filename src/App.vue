<script setup lang="ts">
import { PlayCircleIcon } from 'lucide-vue-next';
import Container from './components/Container/index';
import CountDown from './components/CountDown/index';
import Cycles from './components/Cycles/index';
import DefaultButton from './components/DefaultButton/index';
import DefaultInput from './components/DefaultInput/index';
import Logo from './components/Logo/index';
import Menu from './components/Menu/index';
import Footer from './components/Footer/index';

</script>

<template>
  <Container>
    <Logo />
  </Container>
  <Container>
    <Menu />
  </Container>
  <Container>
    <CountDown />
  </Container>
  <Container>
    <form class="form">
      <div class="formRow">
        <DefaultInput labelText="Label" id="meuInput" type="text" placeholder="Digite algo" />
      </div>
      <div className="formRow">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton color="green">
          <PlayCircleIcon />
        </DefaultButton>
      </div>
    </form>
  </Container>
  <Container><Footer /></Container>
</template>

<style scoped></style>
