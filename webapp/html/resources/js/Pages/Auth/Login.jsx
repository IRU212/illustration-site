import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import styles from '../../../../public/css/auth.module.scss'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className={styles.Login}>
            <Head title="Log in" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="Email" className={styles.Title} />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                        className={styles.Input}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="password" value="Password" className={styles.Title} />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                        className={styles.Input}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className={styles.Title}>
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton processing={processing} className={styles.Button}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
