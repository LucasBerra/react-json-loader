import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "../App";

const Item = () => {
  const { data, loading } = useContext(Context);
  const { itemId } = useParams();
  const [itemData, setItemData] = useState();
  const [pageCategory, setPageCategory] = useState();

  useEffect(() => {
    const filter = data.filter((i) => parseInt(itemId) === i.id);
    setItemData(filter[0]);
  }, [data, itemId]);

  useEffect(() => {
    if (itemData) {
      const currentCategory = itemData.category;

      if (currentCategory === "women's clothing") {
        setPageCategory("women-clothing");
      } else if (currentCategory === "men's clothing") {
        setPageCategory("men-clothing");
      } else {
        setPageCategory(currentCategory);
      }
    }
  }, [itemData]);

  return (
    <>
      <main>
        {itemData && (
          <div>
            <Link
              to={`/${pageCategory}`}
              id="list-btn"
              className="btn btn-secondary"
            >
              <i className="fas fa-arrow-left"></i> Back to list
            </Link>
          </div>
        )}

        <div id="content">
          {itemData && (
            <div id="targetContainer">
              <div className="itemBody">
                <img src={itemData.image} alt={itemData.title} />

                <div>
                  <h4>{itemData.title}</h4>
                  <h5>-{itemData.category}-</h5>
                  <hr />
                  <h6>Description:</h6>
                  <p>{itemData.description}</p>
                  <hr />
                  <h5>Price: US${itemData.price}</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {!itemData && (
        <div className="item-loader">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
