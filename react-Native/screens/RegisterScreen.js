import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from "react-native";


function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
    const [regFailedError, setRegFailedError] = useState('');

    const handleRegister = () => {

        setRegFailedError('');

        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Please fill in email');
        }
        if (!password) {
            setPasswordError('Please fill in password');
            return;
        }
        if (password !== confirmPassword) {
            setPasswordError('Please fill in password');
            return;
        }
        if (!isRegistrationSuccess) {
            setRegFailedError('Registration failed, please try again')
        }
    }

    return (
        <View>
            <TextInput
                value={email}
                placeholder={'Email'}
                onChangeText={(text) => setEmail(text)}
            />
            {emailError && <Text>{emailError}</Text>}

            <TextInput
                value={password}
                placeholder={'Password'}
                onChangeText={(text) => setPassword(text)}
            />
            {passwordError && <Text>{passwordError}</Text>}
            <TextInput
                value={confirmPassword}
                placeholder={'Confirm Password'}
                onChangeText={(text) => setConfirmPassword(text)}
            />
            <Button title={'Sign Up'} onPress={(handleRegister)} />
        </View>
    )
};

export default RegisterScreen;