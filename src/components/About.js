function About({imageUrl="https://via.placeholder.com/215", blogText}){
    return (
        <aside>
            <img src={imageUrl} alt="blog logo"></img>
            <p>{blogText}</p>
        </aside>
    )
}

export default About;