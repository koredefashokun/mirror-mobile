import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { getEntries } from '../utils/entries';
import { getPublication } from '../utils/publication';

const Publication = () => {
  const [data, setData] = React.useState<any>(null);
  const { params } = useRoute();

  const getData = React.useCallback(async () => {
    const data = await Promise.all([
      getPublication(params?.domain as string),
      getEntries(params?.domain as string),
    ]);
    setData(data);
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={{ flex: 1 }}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Publication;
