import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            <Text>About Screen</Text>
            <Text>My To Do List App</Text>
            <Text>Version 1.0</Text>
            <Text>Author: Ace Manuyag</Text>
            <Text>Date: November 20, 2023</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>      
    );
}