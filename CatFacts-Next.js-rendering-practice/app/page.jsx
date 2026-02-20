/*I 've learned that using {
    cache: "no-store",
  } will allow me to make my api calls on the server side, which will be always updated. 
   If I use SSG in here, like without options, then when I run npm run build and npm start, 
   when I refresh the page my fetched data and time stamp doesn't update. Because its 
   static now and I have to rebuild it each time and push the new version, 
   which would be crazy XD (I've deleted the timestamp with the update.)*/

async function getCatFacts() {
  const response = await fetch("https://catfact.ninja/facts");
  const data = await response.json();
  return data.data;
}

//If there is no query just return catFact,
//If query is true, return filtered catFacts that includes query

//Learned how to use searchParams in Next.js
export default async function Home({ searchParams }) {
  const { query } = await searchParams;
  const catFacts = await getCatFacts();

  const filteredFacts = query
    ? catFacts.filter((obj) =>
        obj.fact.toLowerCase().includes(query.toLowerCase()),
      )
    : catFacts;

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>
        <form className="search-form">
          <label htmlFor="cat-fact-query" className="sr-only">
            Search cat facts
          </label>
          <input
            type="search"
            id="cat-fact-query"
            name="query"
            placeholder="Search cat facts..."
            className="search-input"
            autoComplete="off"
            defaultValue={query}
          />
        </form>
        <div className="facts-list">
          {filteredFacts.map((fact, index) => (
            <div key={index} className="fact-card">
              <p className="fact-text">{fact.fact}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
