function Card(props){
    return(
        <div class="card">
        <img src={`https://source.unsplash.com/random/400×400/?${props.title}`} alt="Unsplash Image"></img>
        <div class="card-content">
          <h2>{props.title}</h2>
          <p>Some description or additional information about the card content.</p>
        </div>
      </div>
    );
}

export default Card;