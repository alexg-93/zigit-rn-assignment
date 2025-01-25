import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useFetchData } from '../hooks/useFetchData';
import Item from '../components/Item';
import { SearchTextInput } from '../components/SearchTextInput';
import { useFilterData } from '../hooks/useFilterData';
import { EmptyListComponent } from '../components/EmptyListComponent';
import { useTheme } from '@/features/settings/hooks/useTheme';

const DataScreen = () => {
  const { colors } = useTheme();  
  const { data, fetchNextPage, isLoading, hasMore } = useFetchData();
  const [searchText, setSearchText] = useState('');
  const filteredData = useFilterData(data, searchText);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <SearchTextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search ..."
      />
      {isLoading && <LoadingSpinner color={colors.primary} />}
      <FlatList
        data={searchText ? filteredData : data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Item item={item} />}
        onEndReached={hasMore ? fetchNextPage : null}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <View style={[styles.separator, { backgroundColor: colors.background }]} />}
        ListEmptyComponent={EmptyListComponent}
        scrollEnabled={!isLoading}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.listContent,
          { opacity: isLoading ? 0.5 : 1, backgroundColor: colors.background }
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  separator: {
    height: 15,
  },
  listContent: {
    flexGrow: 1,
  },
});

export default DataScreen;
