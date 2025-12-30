<script lang="ts">
import { defineComponent } from 'vue';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-vue-next";

export default defineComponent({
    components: {
        HistoryIcon,
        HouseIcon,
        SettingsIcon,
        SunIcon
    }
})
</script>

<template>
    <nav class="menu">
        <a class="menuLink" href="#">
            <HistoryIcon />
        </a>
        <a class="menuLink" href="#">
            <HouseIcon />
        </a>
        <a class="menuLink" href="#">
            <SettingsIcon />
        </a>
        <a class="menuLink" href="#">
            <SunIcon />
        </a>
    </nav>
</template>

<style scoped>
.menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
}

.menuLink {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    text-decoration: none;
    background-color: var(--primary);
    color: var(--text-over-primary);
    transition: 0.1s;
    padding: 1.2rem;
    border-radius: 0.8rem;
}

.menuLink:hover {
    filter: brightness(50%);
}

.menuLink svg {
    width: 2.4rem;
    height: 2.4rem;
}
</style>
