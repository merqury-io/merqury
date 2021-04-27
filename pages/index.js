import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import ChatBubble from '../components/ChatBubble';
import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';

export default function Home() {

	const [errors, setErrors] = useState(false);
	const [emails, setEmails] = useState({});

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`https://api.emailjs.com/api/v1.1/history?user_id=user_gEU8MfLqRcGrWPPBSdAG7&accessToken=9aaa2af0fbb41bc229fb7057b40757f6&page=1&count=50`);
			res
				.json()
				.then(res => setEmails(res))
				.catch(err => setErrors(err));
		}

		fetchData();
		
	});

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
				<span>
					{JSON.stringify(emails, null, 2)}
				</span>
				<span>
					has error: {JSON.stringify(errors, null, 2)}
				</span>
				<ChatBubble />
			
			</div>
		</div>
	)
}
