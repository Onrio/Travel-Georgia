import React, { useRef } from 'react';
import { useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer } from '@tanstack/react-virtual';
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
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1,
    });

    const countries = data?.pages.flat() || [];
    const parentRef = useRef(null);

    const rowVirtualizer = useVirtualizer({
        count: countries.length + (hasNextPage ? 1 : 0),
        getScrollElement: () => parentRef.current,
        estimateSize: () => 500,
        overscan: 5,
    });


    rowVirtualizer.getVirtualItems().forEach((virtualRow) => {
        if (virtualRow.index === countries.length - 1 && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    });

    if (isLoading) return <div>Loading countries...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section className={mainStyle["container"]}>
            <h2 className={mainStyle["section-title"]}>All Countries</h2>
            <div ref={parentRef} className={style["country-list-container"]}>
                <div
                    style={{
                        height: rowVirtualizer.getTotalSize(),
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const country = countries[virtualRow.index];
                        if (!country) {
                            return (
                                <div
                                    key={virtualRow.index}
                                    style={{
                                        height: 500,
                                        transform: `translateY(${virtualRow.start}px)`,
                                    }}
                                >
                                    {isFetchingNextPage ? 'Loading more countries...' : 'No more countries'}
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
                                    <img src={country.image} alt={`${country.name} flag`} className={style["country-image"]} />
                                </div>
                                <h3 className={style["country-name"]}>
                                    {lang === "ka" ? country.georgianName : country.name}
                                </h3>
                                <p>Capital: {lang === "ka" ? country.georgianCapital : country.capital}</p>
                                <p>Population: {country.population.toLocaleString()}</p>
                                <p>{lang === "ka" ? country.georgianAbout : country.about}</p>
                                <p>Likes: {country.like}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            {isFetchingNextPage && <div>Loading more countries...</div>}
        </section>
    );
};

export default CountryList;
