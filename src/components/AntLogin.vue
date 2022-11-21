<template>
    <a-layout-content>
        <a-form
            :model="formState"
            name="normal_login"
            class="login-form"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
            <a-form-item
                label="Username"
                name="name"
                :rules="[{ required: true, message: 'Please input your username!' }]"
            >
                <a-input v-model:value="formState.name">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon"/>
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item
                label="Password"
                name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]"
            >
                <a-input-password v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon"/>
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-form-item name="remember" no-style>
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Forgot password</a>
            </a-form-item>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <a href="">register now!</a>
            </a-form-item>

        </a-form>
    </a-layout-content>
</template>
<script lang="ts">
import {defineComponent, reactive, computed} from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {Layout, LayoutContent} from "ant-design-vue";
import axios from "axios";

interface FormState {
    name: string;
    password: string;
    remember: boolean;
}

export default defineComponent({
    components: {
        ALayout: Layout,
        ALayoutContent: LayoutContent,
        UserOutlined,
        LockOutlined,
    },
    setup() {
        const formState = reactive<FormState>({
            name: '',
            password: '',
            remember: true,
        });
        const onFinish = (values: any) => {
            const response = axios.post('http://localhost:83/admin/login', values)
                .then(function (response) {
                    console.log('Response Success:', response);
                })
                .catch(function (error) {
                    console.log('Response Error:', error);
                });
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        const disabled = computed(() => {
            return !(formState.name && formState.password);
        });
        return {
            formState,
            onFinish,
            onFinishFailed,
            disabled,
        };
    },
});
</script>
<style>
#components-form-demo-normal-login .login-form {
    max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
    float: right;
}

#components-form-demo-normal-login .login-form-button {
    width: 100%;
}
</style>
