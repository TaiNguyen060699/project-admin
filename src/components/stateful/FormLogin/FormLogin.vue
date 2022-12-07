
<script setup>
import { defineProps, ref } from 'vue';
import { LOGIN_ACCOUNT } from '@/store/actions.type';
import { useStore } from 'vuex'

const props = defineProps({
    disabledEnter: {
        type: Boolean,
        default: false
    }
})
const store = useStore()
const formInput = ref({
    email: null,
    password: null
})
const submit = async () => {
    const params = {
        email: formInput.email,
        password: formInput.password
    }
    const res = await store.dispatch('authen/LOGIN_ACCOUNT', params)
    if (!res) return
    this.$router.replace("/123")
}

</script>

<template>
    <div class="login-form">
        <h2>Login</h2>
        <div class="login-form__desc">Welcome onboard with us!</div>
        <form @submit.top.prevent="submit" ref="form">
            <div class="form-group">
                <label for="">Username</label>
                <input v-model="formInput.email" type="text" placeholder="Enter your username">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input v-model="formInput.password" type="password" placeholder="Enter your password">
            </div>
            <button class="btn">LOGIN</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login-form {
    width: 479px;
    height: 479px;
    background: linear-gradient(109.46deg, #233329 1.57%, #63D471 100%);
    opacity: 0.5;
    backdrop-filter: blur(30px);
    border-radius: 27px;
    padding: 30px;
    margin: auto;

    h2 {
        padding-bottom: 10px;
        font-weight: 400;
        font-size: 40px;
        line-height: 39px;
        color: $black-1;
        border-bottom: 1px solid #FFFFFF;
        text-align: left;
    }

    &__desc {
        padding-top: 10px;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: $black-1;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        input {
            width: 100%;
            padding: 16px;
            border-radius: 7px;
        }

        label {
            padding: 15px 0;
            color: $black-1;
        }
    }

    .btn {
        margin-top: 35px;
        width: 100%;
        padding: 16px;
        background: #A5D9D0;
        border-radius: 7px;
    }
}
</style>