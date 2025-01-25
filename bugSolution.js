// bugSolution.js
import * as Linking from 'expo-linking';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [error, setError] = useState(null);

  const handlePress = async () => {
    try {
      await Linking.openURL('https://www.example.com', {useSystemBrowser: false}); //open with custom browser
      // Add a small delay to allow the app to settle after returning from the external browser
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View>
      <Button title="Open URL" onPress={handlePress} />
      {error && <Text>{error}</Text>}
    </View>
  );
}
