import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from "react";
import {ethers, providers} from "ethers";
import BAUL_ABI from "@/utils/Baul.abi.json"
import NFTABI from "@/utils/NFT.abi.json"

const inter = Inter({ subsets: ['latin'] })

const RPC = process.env.NEXT_PUBLIC_RPC_URL as string;
const RPC_PROVIDER = new providers.JsonRpcProvider(RPC);
const NFT_ADDRESS = process.env.NEXT_PUBLIC_NFT_ADDRESS as string;
const BAUL_ADDRESS = process.env.NEXT_PUBLIC_BAUL_ADDRESS as string;

const NFTContract = new ethers.Contract(
    NFT_ADDRESS,
    NFTABI,
    RPC_PROVIDER
);
const BAULContract = new ethers.Contract(
    BAUL_ADDRESS,
    BAUL_ABI,
    RPC_PROVIDER
);
export default function Home() {

  const [busd, setBusd] = useState(0);
  const [usdt, setUsdt] = useState(0);
  const [nft, setNft] = useState(0);
  useEffect(() => {

    const init = async () => {
      const usdt = await BAULContract.balanceOfUSDT();
      const busd = await BAULContract.balanceOfBUSD();
      const nft = await NFTContract.totalSupply();
      setNft(Number(nft));
      setBusd(parseInt(ethers.utils.formatUnits(busd,"ether")));
      setUsdt(parseInt(ethers.utils.formatUnits(usdt,"ether")));
    }
      init();
  }, []);


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
            <code className={styles.code}>NFT: {NFT_ADDRESS} <br/> Baul: {BAUL_ADDRESS} </code>
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
            <h4 className={styles.headlines}>Cantidad de nfts: <span> {nft} </span></h4>
            <h4 className={styles.headlines}>BUSD en baul:  <span> {busd} $</span></h4>
            <h4 className={styles.headlines}>USDT en baul:  <span> {usdt} $</span></h4>
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
