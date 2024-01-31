import { useParams } from "next/navigation";
import Link from "next/link";
const SearchResults = (data: any) => {
  const { searchQuery } = useParams<{ searchQuery: string }>();

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {data?.map((item: any) => (
          <li key={item.id}>
            <Link href={`/item/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
