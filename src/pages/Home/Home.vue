<script setup lang="ts">
import MainTemplate from '../../templates/MainTemplate/index';
import Container from '../../components/Container/index';
import CountDown from '../../components/CountDown/index';
import MainForm from '../../components/MainForm/index';

</script>

<template>
  <MainTemplate>
    <Container>
      <CountDown />
    </Container>
    <Container>
      <MainForm />
    </Container>
  </MainTemplate>
</template>