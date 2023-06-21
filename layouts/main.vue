import { LayoutsNavbar, LayoutsFooter } from '../.nuxt/components';
<template>
    <div>
        <LayoutsNavbar />

        <main>
            <slot />
        </main>

        <LayoutsFooter />
    </div>
</template>