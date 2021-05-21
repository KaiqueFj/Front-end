import { GetStaticProps } from "next";
import styles from "./home.module.scss";
import Image from "next/image";
import Head from "next/Head";
import Link from "next/Link";
import { api } from "../services/api";

type Episode = {
  id: string;
  name: string;
};

type HomeProps = {
  allEpisodes: Episode[];
};

export default function Home({ allEpisodes }: HomeProps) {
  const episodeList = [...allEpisodes];

  return (
    <div className={styles.homepage}>
      <Head>
        <title>Home | Podcastr</title>
      </Head>

      <section className={styles.allEpisodes}>
        <h2>All Episodes</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {allEpisodes.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td style={{ width: 72 }}></td>

                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.name}</a>
                    </Link>
                  </td>
                  {/* 
                  <td>{episode.members}</td>
                  <td style={{ width: 100 }}>{episode.publishedAT}</td>
                  <td>{episode.durationAsString}</td>
                  <td></td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("users/home", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      name: episode.name,
    };
  });

  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  };
};
