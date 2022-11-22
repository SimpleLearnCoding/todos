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


/**
 * 定义页面接口
 * 使用 路由地址 为 key
 */
interface Api {
    '/admin/login': {
        name: string;
        password: string;
        remember: boolean;
    },
}

interface Response {
    code: number;
    message: string;
    data: string | null;
}

export default defineComponent({
    components: {
        ALayout: Layout,
        ALayoutContent: LayoutContent,
        UserOutlined,
        LockOutlined,
    },
    setup() {
        /**
         * 初始化表单信息
         * 请注意此处定义应与 interface Api['/admin/login'] 一致
         * 如果不一致也没关系，以定义的数据为准（并不会以接口过滤），只是可以起到字段提示作用
         */
        const formState = reactive<Api['/admin/login']>({
            name: 'test',
            password: '123456',
            remember: true,
        });

        /**
         * 使用 import.meta.env.* 来访问环境变量
         */
        const apiHost = import.meta.env.VITE_BACKEND_HOST || 'http://localhost:83';

        /**
         * 提交表单且数据验证成功后回调事件
         * @link https://antdv.com/components/form-cn
         *
         * notice:
         * 经测试，这里传入的 values 结构与表单的结构一致，其 key 为表单项的 name 属性值
         * 如需正确结构的请求数据，应在 template 中准确配置 formState 的值，
         * 然后发送请求时使用 formState 变量
         *
         * 如果传入的 values 配置正确，则可以直接使用 values
         */
        const onFinish = (values: Api['/admin/login']) => {

            console.log('Form Data: ', values);

            /**
             * Axios Example
             *
             * @link https://www.axios-http.cn/docs/post_example
             */
            axios.post(apiHost + `/admin/login`, values)
                .then(function (response) {
                    console.log('Request Success:', response);

                    /**
                     * 使用类型接口，并进行验证
                     * ex:
                     * const data = <Response>response.data;
                     */
                    const data = <Response>response.data;
                    if (data.code !== 1) {
                        throw new Error(`请求有误! 错误信息：${data.message}`);
                    } else {
                        console.log('Response Result:', data.data);
                    }
                })
                .catch(function (error) {
                    throw new Error(`请求异常捕获! 错误信息：${error}`);
                });
        };

        /**
         * 提交表单且数据验证失败后回调事件
         * @link https://antdv.com/components/form-cn
         */
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
