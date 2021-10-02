import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

const Item = () => {
  const { itemId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json = json.filter((item) => parseInt(itemId) === item.id);
        setData(json[0]);
        setLoading(false);
      })
      .catch((err) => console.log("An error has occured: ", err));
  }, []);

  return (
    <>
      <main>
        {!loading && (
          <div>
            <Link
              to={`/${data.category}`}
              id="list-btn"
              className="btn btn-secondary"
            >
              <i className="fas fa-arrow-left"></i> Back to list
            </Link>
          </div>
        )}

        <div id="content">
          {!loading && (
            <div id="targetContainer">
              <div className="itemBody">
                <img src={data.image} alt={data.title} />

                <div>
                  <h4>{data.title}</h4>
                  <h5>-{data.category}-</h5>
                  <hr />
                  <h6>Description:</h6>
                  <p>{data.description}</p>
                  <hr />
                  <h5>Price: US${data.price}</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {loading && (
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
