import Head from "next/head";

export default function Seo(props: any) {
  return (
    <Head>
      <title>{props.title} | nextMovies</title>
    </Head>
  );
}
