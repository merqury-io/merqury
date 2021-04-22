import Head from 'next/head';
import ChatBubble from '../components/ChatBubble';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ChatBubble />
		
		</div>
	)
}
