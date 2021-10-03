import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppStackParamList } from '../types/navigation';
import { getEntries } from '../utils/entries';
import { getPublication } from '../utils/publication';

import Entries from '../components/publication/Entries';

const Publication = () => {
  const [publication, setPublication] = React.useState<any>();
  const [entries, setEntries] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);
  const { params } = useRoute<RouteProp<AppStackParamList, 'Publication'>>();

  const getData = React.useCallback(async () => {
    const [publication, entries] = await Promise.all([
      getPublication(params.domain),
      getEntries(params.domain),
    ]);

    setPublication(publication.publication);
    setEntries(entries);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SafeAreaView style={styles.container}>
      {loading || !publication || !entries ? (
        <ActivityIndicator />
      ) : (
        publication &&
        entries && (
          <Entries
            avatarURL={publication.avatarURL}
            name={publication.displayName}
            ensLabel={publication.ensLabel}
            entries={entries}
          />
        )
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  domain: {
    fontSize: 16,
  },
});

export default Publication;
