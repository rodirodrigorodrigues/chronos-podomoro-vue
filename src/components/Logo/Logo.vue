<script lang="ts">
import { defineComponent } from 'vue'
import { Timer } from 'lucide-vue-next'

export default defineComponent({
    components: {
        Timer,
    },
})
</script>


<template>
    <div class="logo">
        <a class="logoLink" href="#">
            <Timer />
            <span>Chronos</span>
        </a>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    padding-top: 3.2rem;
}

.logoLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-size: 4.2rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--primary);
    transition: 0.1s;
}

.logoLink:hover {
    filter: brightness(50%);
}

.logoLink svg {
    width: 6.4rem;
    height: 6.4rem;
}
</style>