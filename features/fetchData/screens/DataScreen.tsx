import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useFetchData } from '../hooks/useFetchData';
import Item from '../components/Item';
import { SearchTextInput } from '../components/SearchTextInput';
import { useFilterData } from '../hooks/useFilterData';
import { EmptyListComponent } from '../components/EmptyListComponent';

const DataScreen = () => {
    
  const { data, fetchNextPage, isLoading, hasMore } = useFetchData();
  const [searchText, setSearchText] = useState('');
  const filteredData = useFilterData(data, searchText);

  return (
    <SafeAreaView style={styles.container}>
      <SearchTextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search ..."
      />
      {isLoading && <LoadingSpinner />}
      <FlatList
        data={searchText ? filteredData : data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Item item={item} />}
        onEndReached={hasMore ? fetchNextPage : null}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        ListEmptyComponent={EmptyListComponent}
        scrollEnabled={!isLoading}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ opacity: isLoading ? 0.5 : 1 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
});

export default DataScreen;
