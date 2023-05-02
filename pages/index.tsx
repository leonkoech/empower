import Head from "next/head";
import Main from "./main/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Empower Recovery Center</title>
        <meta name="description" content="Empower Recovery Center Arizona. Expert Mental Health and Psychiatric Care in Arizona. We offer compassionate inpatient and outpatient services for addiction and mental health disorders." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Main></Main>
    </>
  );
}
