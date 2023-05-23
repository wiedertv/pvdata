import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Informacion Plusvalica</title>
        <meta name="description" content="Aplicacion para ver la informacion de los contratos de plusvalica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Contratos de Plusvalica&nbsp;<br/>
            <code className={styles.code}>NFT: 0xBa84f596Dc68EE3c64CD7c037469E82aa1779C3c <br/> Baul: 0x358d019b5E370bfe69FB452a7A6773ec77540edC </code>
          </p>
          <div>
            <a
              href="https://www.dcorp.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/logo.png"
                alt="Dcorp Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.wrapper}>
            <h3>Balances</h3>
            <h4 className={styles.headlines}>Cantidad de nfts: <span> 46 </span></h4>
            <h4 className={styles.headlines}>BUSD en baul:  <span> 400mil $</span></h4>
            <h4 className={styles.headlines}>USDT en baul:  <span> 400mil $</span></h4>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              BAUL <span>-&gt;</span>
            </h2>
            <p>

            </p>
          </a>

          <a
              href="#"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              NFT <span>-&gt;</span>
            </h2>
          </a>

          <a
              href="#"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              QA PV <span>-&gt;</span>
            </h2>
          </a>

          <a
              href="#"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              QA CC <span>-&gt;</span>
            </h2>
          </a>
        </div>
      </main>
    </>
  )
}
