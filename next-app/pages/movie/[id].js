import Link from "next/link";

export default function Movie({ movie }) {
    return (
    <>
        <h1>{movie.title}</h1>
        <img src={movie.poster_path} />
        <p>{movie.overview}</p>
        <Link href="/movies"><a>go back to movies page</a></Link>
    </>
    )
}

export async function getServerSideProps({ query }) {
    const res = await fetch(`http://localhost:4000/movies/${query.id}`);
    const movie = await res.json();

    return { props: { movie } };
}