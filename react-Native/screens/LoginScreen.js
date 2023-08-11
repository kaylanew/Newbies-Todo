import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        setEmailError('');
        setPasswordError('');
        if (!email) {
            setEmailError('Please fill in email');

        }
        if (!password) {
            setPasswordError('Please fill in password');
            return;
        }
    }

    return (
        <View>
            <Text>Login Screen</Text>
            <TextInput placeholder='Email...' onChangeText={text => setEmail({ text })} />
            {emailError && <Text>{emailError}</Text>}
            <TextInput placeholder='Password...' onChangeText={text => setPassword({ text })} />
            {passwordError && <Text>{passwordError}</Text>}
            <Button title="Login" onPress={(handleLogin)} />
            <Button title="Forgot Password / Sign Up" onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
    )
};

export default LoginScreen;