import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {
  RouteProp,
  useRoute,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Markdown from 'react-native-markdown-display';
import { Icon } from '../components/icons';
import { getEntry } from '../utils/entries';
import { AppStackParamList } from '../types/navigation';

const Post = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'Post'>>();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>();
  const { goBack } = useNavigation<NavigationProp<AppStackParamList>>();

  const getPost = React.useCallback(async () => {
    const data = await getEntry(params.digest);
    setLoading(false);
    setData(data);
  }, []);

  React.useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {loading || !data ? (
        <ActivityIndicator />
      ) : (
        data && (
          <ScrollView style={{ paddingHorizontal: 16 }}>
            <View
              style={{ width: '100%', height: 50, justifyContent: 'center' }}
            >
              <Pressable onPress={goBack} style={{ marginLeft: -8 }}>
                <Icon name='chevron-left' size={28} />
              </Pressable>
            </View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              {data.title}
            </Text>
            <Markdown>{data.body}</Markdown>
          </ScrollView>
        )
      )}
    </SafeAreaView>
  );
};

export default Post;
