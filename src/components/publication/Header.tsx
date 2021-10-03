import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Icon } from '../icons';
import { AppStackParamList } from '../../types/navigation';

interface HeaderProps {
  name: string;
  ensLabel: string;
  avatarURL: string;
}

const Header: React.FC<HeaderProps> = ({ name, ensLabel, avatarURL }) => {
  const { goBack } = useNavigation<NavigationProp<AppStackParamList>>();

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} style={{ marginLeft: -8 }}>
        <Icon name='chevron-left' size={28} />
      </Pressable>
      <View
        style={{
          height: 58,
          width: 58,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D3D3D3',
          marginLeft: 8,
          borderRadius: 29,
        }}
      >
        <Image
          source={{ uri: avatarURL }}
          style={{ height: 56, width: 56, borderRadius: 28 }}
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.domain}>{`${ensLabel}.mirror.xyz`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    marginLeft: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  domain: {
    fontSize: 16,
    color: '#D3D3D3',
  },
});

export default Header;
