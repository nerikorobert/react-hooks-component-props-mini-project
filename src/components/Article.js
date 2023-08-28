function Article({title, date="January 1, 1970",  preview, minutes}){
    let coffeTag;
    (minutes < 30 ?( 
        coffeTag = <p>{Array((Math.round(minutes/5))+1).join('☕')} {minutes} min read</p>
    ): (
        coffeTag =<p>{Array((Math.round(minutes/10))+1).join('🍱')} {minutes} min read</p>
    ))
     
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}  <span>{coffeTag}</span></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;