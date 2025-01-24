import { useEffect, useState ,useCallback} from 'react';
import { DataItem } from '../types/data.types';

/**
 * Fetches data from the API and provides an infinite scroll functionality.
 * It handles loading state and whether there is more data to fetch.
 * @returns An object with the following properties:
 *  - data: The fetched data.
 *  - isLoading: Whether the data is being fetched.
 *  - hasMore: Whether there is more data to fetch.
 *  - fetchNextPage: A function to fetch the next page of data.
 */
export const useFetchData = () => {

const [data, setData] = useState<DataItem[]>([]);
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);


const fetchData = useCallback(async (pageNumber: number) => {
    setIsLoading(true);
    setTimeout(async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit={10}&_page=${pageNumber}`);
            const result = await response.json();
            if (result.length > 0) {
                setData((prevData) => [...prevData, ...result]);
                setPage(pageNumber);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }, 2000);
}, []);

const fetchNextPage = useCallback(() => {
    if (hasMore && !isLoading) {
      fetchData(page + 1);
    }
  }, [hasMore, isLoading, page]);


useEffect(() => {
    fetchData(1);
}, []);


return { data, isLoading, hasMore, fetchNextPage };


}