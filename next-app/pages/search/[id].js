import Link from "next/link";

import { MainLayout } from "../../components/MainLayout";

export default function Search({ search }) {
    return (
        <MainLayout title={'Movies page'}>
            <h1>Search page</h1>
            {search.data.length ? (
            <ul>
                {
                    search.data.map(movie => (
                    <li key={movie.id}>
                        <Link href={"/movie/[id]"} as={`/movie/${movie.id}`}>
                            <a>{movie.title}</a>
                        </Link>
                    </li>
                    ))
                }
            </ul>
            ) : (<p>No movies found</p>)}
            <Link href="/movies"><a>go back to movies page</a></Link>
        </MainLayout>
    )
}

export async function getServerSideProps({ query }) {
    const res = await fetch(`http://localhost:4000/movies?search=${query.id}&searchBy=title`);
    const search = await res.json();

    return { props: { search } };
}