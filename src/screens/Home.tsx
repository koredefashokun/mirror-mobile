import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const testPublications = ['dev', 'miguel', 'd'];

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {testPublications.map((t, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => navigate('Publication', { domain: t })}
          >
            <Text>{t}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default Home;
