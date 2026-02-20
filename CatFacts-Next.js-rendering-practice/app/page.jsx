async function getCatFact() {
  /*I 've learned that using {
    cache: "no-store",
  } will allow me to make my api calls on the server side, which will be always updated. 
   If I use SSG in here, like without options, then when I run npm run build and npm start, 
   when I refresh the page my fetched data and time stamp doesn't update. Because its 
   static now and I have to rebuild it each time and push the new version, 
   which would be crazy XD */
  const res = await fetch("https://catfact.ninja/fact", {
    cache: "no-store",
  });
  return await res.json();
}

export default async function Home() {
  const catFact = await getCatFact();
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>
        <div className="fact-card">
          <p className="timestamp">Rendered at: {timestamp}</p>
          <p className="fact-text">{catFact.fact}</p>
        </div>
      </main>
    </div>
  );
}
