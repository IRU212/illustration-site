import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import styles from '../../../../public/css/auth.module.scss'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className={styles.Register}>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Name" className={styles.Title} />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                        className={styles.Input}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="email" value="Email" className={styles.Title} />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
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
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                        className={styles.Input}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="password_confirmation" value="Confirm Password" className={styles.Title} />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        handleChange={onHandleChange}
                        required
                        className={styles.Input}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className={styles.ButtonPosotion}>
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className={styles.Button} processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
