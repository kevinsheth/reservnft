import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";

const supportedChains = ["31337", "11155111"]

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Duke FinTech 564 Blockchain Group 5</title>
        <meta name="description" content="Duke FinTech 564 Blockchain Group 5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
              Nice bro! You are connected to a supported chainId: {chainId}
            </div>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
    </div>
  );
}