import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getEntry } from '../utils/entries';
import { AppStackParamList } from '../types/navigation';

const Post = () => {
  const { params } = useRoute<RouteProp<AppStackParamList, 'Post'>>();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>();

  const getPost = React.useCallback(async () => {
    const data = await getEntry(params.digest);
    setLoading(false);
    setData(data);
  }, []);

  React.useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? <ActivityIndicator /> : <Text>{JSON.stringify(data)}</Text>}
    </SafeAreaView>
  );
};

export default Post;
