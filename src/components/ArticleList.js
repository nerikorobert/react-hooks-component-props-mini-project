import Article from "./Article"

function ArticleList({articles}){
    let myArticles=articles
    const articlesMap=myArticles.map((article)=>{
        console.log(articles)
        return <Article key={article.id} title={article.title} date={article.date}  preview={article.preview} minutes={article.minutes}/>
    })
    return (
        <main>
            {articlesMap}
        </main>
    )
}

export default ArticleList;