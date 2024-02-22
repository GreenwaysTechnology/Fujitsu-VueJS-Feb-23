<script setup>
const logoUrl = "/src/assets/logo.svg"
const isEnabled = true
const isHidden = false
</script>
<template>
    <div>
        <h1>Bind Directives</h1>
        <div>
            <h2>Static Binding</h2>
            <img src="./assets/logo.svg" height="100" width="100" />
        </div>
        <div>
            <h2>Dynamic Binding with v-bind</h2>
            <img v-bind:src="logoUrl" height="100" width="100" />
        </div>
        <div>
            <h2>Dynamic Binding with v-bind shortcut</h2>
            <img :src="logoUrl" height="100" width="100" />
        </div>
        <div>
            <h2>Dynamic Binding with Button Enabled and Disabled state</h2>
            <button :disabled="isEnabled">Hello</button>
        </div>
        <div>
            <h2>Dynamic Binding with Article Show and Hidden</h2>
            <article :hidden="isHidden">
                <p>This is article</p>
            </article>
        </div>
    </div>
</template>