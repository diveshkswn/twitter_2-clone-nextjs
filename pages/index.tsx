import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import * as S from './index.styles';
import styles from '../styles/Home.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import { fetchUsers } from './api/users';

const Home: NextPage = () => {
  useEffect(() => {
    // document.documentElement.classList.add('dark'); // for dark theme
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter 2.0</title>
        <meta name="description" content="Twitter Clone 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-slate-900">
        <Sidebar />
        <S.StyledP textColor="blue">
          ppppppppppppp
        </S.StyledP>
        <S.StyledP>
          pppppppppppppsss
        </S.StyledP>

      </main>

    </div>
  );
};
export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await fetchUsers();
//   return {
//     props: { users: data },
//   };
// };
