import Link from "next/link";
import { useEffect, useState } from "react";
import {useRouter} from 'next/router';

import { MainLayout } from "../components/MainLayout";
import { SearchBox } from "../components/SearchBox";

export default function Movies({ movies: serverMovies }) {
    const [movies, setMovies] = useState(serverMovies);
    const router = useRouter();

    const handleSearch = async (searchText) => {
        router.push({
            pathname: '/search/[text]',
            query: { text: searchText },
        });
    }

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4000/movies');
            const data = await response.json();
            setMovies(data);
        }

        if (!serverMovies) {
            load();
        }
    }, [])

    if (!movies) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
    <MainLayout title={'Movies page'}>
        <h1>Movies page</h1>
        <SearchBox onSearch={handleSearch}/>
        <ul>
            {
                movies.data.map(movie => (
                <li key={movie.id}>
                    <Link href={"/movie/[id]"} as={`/movie/${movie.id}`}>
                        <a>{movie.title}</a>
                    </Link>
                </li>
                ))
            }
        </ul>
    </MainLayout>
    )
}

Movies.getInitialProps = async ({ req }) => {
    if (!req) {
        return { movies: null };
    }

    const res = await fetch('http://localhost:4000/movies');
    const movies = await res.json();

    return { movies };
}