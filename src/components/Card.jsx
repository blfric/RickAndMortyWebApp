
const Card = ({ data }) => {

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-image">
            <img src={data.image} alt={data.name}/>
          </div>
          <div className="flip-card-basic-data">
            <h1>Name: {data.name}</h1> 
            <p>Status: {data.status}</p> 
            <p>Species: {data.species}</p> 
          </div>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-data">
            <h1>Name: {data.name}</h1> 
            <p>Status: {data.status}</p> 
            <p>Species: {data.species}</p> 
            <p>Location: {data.location.name}</p> 
            <p>Origin: {data.origin.name}</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;