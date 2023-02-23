import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { Person } from './Person';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// https://swapi.dev/api/people/
// {
//   "count": 82,
//   "next": "https://swapi.dev/api/people/?page=2",
//   "previous": null,
//   "results": [
//       {
//           "name": "Luke Skywalker",
//           "hair_color": "blond",
//           "eye_color": "blue",
//         }
//   ]
// }

export function InfinitePeople() {
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['sw-people'],
      ({ pageParam = initialUrl }) => {
        console.log(pageParam);
        return fetchUrl(pageParam);
      },
      {
        getNextPageParam: (lastPage) => {
          return lastPage.next || undefined;
        },
      }
    );

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      {isFetching && <div className="loading">Loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((page) => {
          console.log('page.results', page.results);

          return page.results.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
            />
          ));
        })}
      </InfiniteScroll>
    </>
  );
}
