import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/seo";

export default function Home({ results }: any) {
  const router = useRouter();
  const onClick = (id: string) => {
    router.push(`/movies/${id}`);
  };
  return (
    <>
      <Seo title="Home"></Seo>
      <div className="container">
        {results ? (
          results.map((movie: any) => (
            <div
              onClick={() => onClick(movie.id)}
              className="movie"
              key={movie.id}
            >
              <Image
                width={100}
                height={150}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="postImage"
              />
              <Link href={`/api/movies/${movie.id}`}>
                {movie.original_title}
              </Link>
            </div>
          ))
        ) : (
          <h4 className="loading">Loading...</h4>
        )}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie .img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover .img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie .link {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
