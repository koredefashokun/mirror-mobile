import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderProps {
  name: string;
  ensLabel: string;
  avatarURL: string;
}

const Header: React.FC<HeaderProps> = ({ name, ensLabel, avatarURL }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: avatarURL }}
        style={{ height: 56, width: 56, borderRadius: 28 }}
      />
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
    marginLeft: 8,
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
