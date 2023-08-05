import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
    }

    return (
        <View>
            <Text>Login Screen</Text>
            <TextInput placeholder='Email...' onChangeText={text => setEmail({text})} />
            <TextInput placeholder='Password...' onChangeText={text => setPassword({text})} />
            <Button title="Login" />
            <Button title="Forgot Password / Sign Up" />
        </View>
    )
};

export default LoginScreen;