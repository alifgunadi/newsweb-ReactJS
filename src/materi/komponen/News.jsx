import React, { useState, useEffect } from 'react';


function News() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const apiKey = '9963d8018be64f6d92816e2533c73a1e';
    const apiUrlGeneral = `https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=${apiKey}`;
    // const apiUrlEntertainment = `https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=${apiKey}`;

    fetch(apiUrlGeneral)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchQuery.toLowerCase());
  });



  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search articles" />
    
            <ul>
                {filteredArticles.map((article) => (
                <li key={article.url}>
                    <a href={article.url}>{article.title}</a>
                    <p>{article.description}</p>
                </li>
                ))}
            </ul>
     
    </div>
  );
}

export default News;
