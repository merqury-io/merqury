import Head from 'next/head';
import ChatBubble from '../components/ChatBubble';
import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.main}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<div className={styles.container}>

				<ChatBubble />
			
			</div>
		</div>
	)
}
