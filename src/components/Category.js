import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const url = "https://fakestoreapi.com/products";

const titleCase = (str) => {
  var splitString = str.toLowerCase().split(" ");
  for (var i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
  }
  return splitString.join(" ");
};

const Category = () => {
  let { pageCategory } = useParams();
  if (pageCategory === "women-clothing") {
    pageCategory = "women's clothing";
  } else if (pageCategory === "men-clothing") {
    pageCategory = "men's clothing";
  }

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json = json.filter((item) => item.category === pageCategory);
        setData(json);
        setLoading(false);
        document.querySelector("#loading").style.backgroundColor =
          "rgb(194, 243, 194)";
      })
      .catch((err) => console.log("An error has occured: ", err));
  }, []);

  return (
    <main>
      <div id="title">
        <h2 id="page-value">{titleCase(pageCategory)}</h2>
        <span id="loading" className="loading-style">
          {loading ? "Loading..." : `${data.length} items.`}
        </span>
      </div>

      <div id="content">
        <div id="targetContainer">
          {loading && (
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {!loading &&
            data.map((item) => {
              const { id, title, price, description, image } = item;

              return (
                <Link to={`/item/${id}`} className="listItem" key={id}>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <h5>Price: US${price}</h5>
                  </div>
                  <div id="listItem--img">
                    <img src={image} alt={title} />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Category;
