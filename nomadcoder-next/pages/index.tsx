import Seo from "../components/seo";
import { useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";
const API_KEY = "8ee0a535e520c10664813954d0e39ff4";

export default function Home() {
  const [movies, setMovies] = useState<any[]>();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <Seo title="Home"></Seo>
      <div>
        {movies ? (
          movies?.map((movie: any) => (
            <div key={movie.id}>{movie.original_title}</div>
          ))
        ) : (
          <h4>Loading...</h4>
        )}
        {/* {!movies && <h4>Loading</h4>}
        {movies?.map((movie: any) => (
          <div key={movie.id}>{movie.original_title}</div>
        ))} */}
      </div>
    </>
  );
}
