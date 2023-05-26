import { useState, useEffect } from "react";
import axios from "axios";

function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, []);

  return (
    <div>
      <h3>List of Beers</h3>
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <a href="/beers/:beerId">View More</a>
        </div>
      ))}
    </div>
  );
}

export default BeersList;
