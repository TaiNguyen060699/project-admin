<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    disable: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    },
    nativeType: {
        type: String,
        default: ''
    }
})

const emit = defineEmits('click')
const handleClick = () => {
    emit('click')
}

</script>

<template>
    <button class="btn" :disabled="(disable || loading)" @click="handleClick" :type="nativeType">
        <template v-if="loading">
            <i v-if="loading" class="ion-refresh icon-loading"></i>
        </template>
        <template v-if="icon && !loading">
            <i :class="icon"></i>
        </template>
        <slot></slot>
    </button>
</template>

<style lang="scss">
.icon-loading {
    animation: 1.2s 0s spinAround ease-out both infinite;
    display: inline-block
}
</style>

