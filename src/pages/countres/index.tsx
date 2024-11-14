import React, { useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer} from "@tanstack/react-virtual";
import { getAllCountries } from "@/api/all-country";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";

export type Country = {
  name: string;
  population: number;
  capital: string;
  about: string;
  image: string;
  id: string;
  like: number;
  georgianName: string;
  georgianCapital: string;
  georgianAbout: string;
};

const CountryList: React.FC<{ lang?: string }> = ({ lang = "en" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<Country[], Error>({
    queryKey: ["allCountries"],
    queryFn: ({ pageParam = 1 }) => getAllCountries({ pageParam: pageParam as number }),
    getNextPageParam: (lastPage) => (lastPage.length > 0 ? currentPage + 1 : undefined),
    initialPageParam: 1,
  });

  const countries = data?.pages.flat() || [];
  const totalPages = Math.ceil(countries.length / itemsPerPage);

  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: itemsPerPage,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 500,
    overscan: 5,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  if (virtualItems.some((item) => item.index === countries.length - 1) && hasNextPage && !isFetchingNextPage) {
    fetchNextPage();
  }

  if (isLoading) return <div>Loading countries...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentCountries = countries.slice(start, end);

  return (
    <section className={mainStyle["container"]}>
      <h2 className={mainStyle["section-title"]}>All Countries</h2>
      <div ref={parentRef} className={style["country-list-container"]}>
        <div
          style={{
            height: rowVirtualizer.getTotalSize(),
            position: "relative",
          }}
        >
          {virtualItems.map((virtualRow) => {
            const country = currentCountries[virtualRow.index];
            if (!country) {
              return (
                <div
                  key={virtualRow.index}
                  style={{
                    height: 500,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {isFetchingNextPage ? "Loading more countries..." : "No more countries"}
                </div>
              );
            }

            return (
              <div
                key={country.id}
                ref={rowVirtualizer.measureElement}
                className={style["country-card"]}
                data-index={virtualRow.index}
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <div className={style["country-card-image"]}>
                  <img
                    src={country.image}
                    alt={`${country.name} flag`}
                    className={style["country-image"]}
                  />
                </div>
                <h3 className={style["country-name"]}>
                  {lang === "ka" ? country.georgianName : country.name}
                </h3>
                <p>
                  Capital:{" "}
                  {lang === "ka" ? country.georgianCapital : country.capital}
                </p>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>{lang === "ka" ? country.georgianAbout : country.about}</p>
                <p>Likes: {country.like}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style["pagination-controls"]}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {isFetchingNextPage && <div>Loading more countries...</div>}
    </section>
  );
};

export default CountryList;
