import { useState, useMemo } from 'react';
import { DataItem } from '../types/data.types';

/**
 * Custom hook that filters the given data based on the search text.
 *
 * @param data The array of DataItem objects to be filtered.
 * @param searchText The text used to filter the data based on the title field.
 * @returns An array of DataItem objects whose titles include the search text.
 */

export const useFilterData = (data: DataItem[], searchText: string) => {

    const [filteredData, setFilteredData] = useState<DataItem[]>([]);

    useMemo(() => {
        if (!searchText.trim()) return data;
        const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    }, [data, searchText]);

    return filteredData;
};

