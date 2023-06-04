import Head from "next/head";

function MyHead({ pageTitle, desc, author, keyword }) {
  return (
    <Head>
      <meta name="keywords" content={keyword} />
      <meta name="description" content={desc} />
      <meta name="author" content={author} />
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <title>{pageTitle} | Brando Bogar&apos;s Website</title>
    </Head>
  );
}

export default MyHead;
