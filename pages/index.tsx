import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from './index.styles';
import styles from '../styles/Home.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Twitter 2.0</title>
      <meta name="description" content="Twitter Clone 2.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
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

export default Home;
