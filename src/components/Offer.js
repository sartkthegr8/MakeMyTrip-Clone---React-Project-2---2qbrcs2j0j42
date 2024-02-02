import React from "react";
import { useState ,useEffect } from "react";

function Offer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    shortProducts();
  }, []);
  const shortProducts = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/offers",

        {
          method: "GET",

          headers: {
            projectId: "ywhyenbsclpi",
          },
        }
      );

      const json = await response.json();

      setData(json.data.offers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      {data.map((item) => (
        <div>
          <img
            src={item.newHeroUrl}
            alt={item.name}
            className="product-image"            
            // onError={handleImageError}
          />
        <h1>{item.tncCtaText}</h1>
        </div>
      
        

      ))}
    </div>
  );
}

export default Offer;
