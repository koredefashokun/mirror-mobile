import React from 'react';
import { View, Text, FlatList, Pressable, ListRenderItem } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Markdown from 'react-native-markdown-display';
import { AppStackParamList } from '../../types/navigation';
import { getExcerpt } from '../../utils/excerpt';

interface EntriesProps {
  entries: any;
}

interface ContinueReadingButtonProps {
  onPress(): void;
}

const ContinueReadingButton: React.FC<ContinueReadingButtonProps> = ({
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: 45,
        width: '100%',
        borderRadius: 11.25,
        backgroundColor: 'rgb(216, 236, 253)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{ color: 'rgb(0, 126, 246)', fontSize: 17, fontWeight: '500' }}
      >
        Continue Reading
      </Text>
    </Pressable>
  );
};

// Maybe useCallback instead? We'll see.

const keyExtractor = (entry: any) => entry.digest;

const Entries: React.FC<EntriesProps> = ({ entries }) => {
  const { navigate } = useNavigation<NavigationProp<AppStackParamList>>();

  const handleContinueReading = React.useCallback((digest: string) => {
    navigate('Post', { digest });
  }, []);

  const renderItem: ListRenderItem<any> = React.useCallback(
    ({ item }) => (
      <View>
        <Text>{item.title}</Text>
        <Markdown>{getExcerpt(item.body)}</Markdown>

        {item.body.split('\n\n').length > 4 && (
          <ContinueReadingButton
            onPress={() => handleContinueReading(item.digest)}
          />
        )}
      </View>
    ),
    []
  );

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={entries}
      />
    </View>
  );
};

export default Entries;
