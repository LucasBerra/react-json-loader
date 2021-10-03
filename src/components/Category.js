import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "../App";

const titleCase = (str) => {
  var splitString = str.toLowerCase().split(" ");
  for (var i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
  }
  return splitString.join(" ");
};

const Category = () => {
  const { data, loading } = useContext(Context);
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState();

  let pageCategory = category;
  if (pageCategory === "women-clothing") {
    pageCategory = "women's clothing";
  } else if (pageCategory === "men-clothing") {
    pageCategory = "men's clothing";
  }

  useEffect(() => {
    if (!loading) {
      setCategoryData(data.filter((i) => i.category === pageCategory));
      document.querySelector("#loading").style.backgroundColor =
        "rgb(194, 243, 194)";
    }
  }, [data, loading, pageCategory]);

  return (
    <main>
      <div id="title">
        <h2 id="page-value">{titleCase(pageCategory)}</h2>
        <span id="loading" className="loading-style">
          {categoryData ? `${categoryData.length} items.` : "Loading..."}
        </span>
      </div>

      <div id="content">
        <div id="targetContainer">
          {!categoryData && (
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {categoryData &&
            categoryData.map((item) => {
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
