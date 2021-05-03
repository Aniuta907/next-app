import Link from "next/link";

import { MainLayout } from "../components/MainLayout";
import classes from "../styles/404.module.scss"

export default function ErrorPage () {
    return (
        <MainLayout title={'Error page'}>
            <h1 className={classes.error}>Error 404</h1>
            <Link href="/"><a>home page</a></Link>
        </MainLayout>
    )
}