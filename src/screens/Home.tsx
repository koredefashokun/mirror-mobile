import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppStackParamList } from '../types/navigation';

const testPublications = ['dev', 'miguel', 'd'];

const Home = () => {
  const { navigate } = useNavigation<NavigationProp<AppStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginVertical: 8 }}>
        Home
      </Text>
      {testPublications.map((t, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => navigate('Publication', { domain: t })}
            style={{ marginVertical: 2 }}
          >
            <Text style={{ fontSize: 18 }}>{`${t}.mirror.xyz`}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default Home;
