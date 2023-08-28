import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
      <Header name={blogData.name} />
      </header>
      <aside>
      <About imageUrl={blogData.image} blogText={blogData.about}/>
      </aside>
      <main>
      <ArticleList articles={blogData.posts} />
      </main>
      
    </div>
  );
}

export default App;

