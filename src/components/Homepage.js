import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main id="index-main">
      <div id="index-div">
        <h1>Welcome</h1>
        <p>
          This page fetches data from an external API (fakestoreapi.com) and
          shows it to you in an organized manner.
        </p>
        <hr />
        <h3>/ Categories</h3>
        <div className="d-flex flex-row flex-wrap justify-content-evenly">
          <CategoryLink
            name="Women's Clothing"
            id="women-clothing"
            icon="fas fa-venus"
            link="/women-clothing"
          />
          <CategoryLink
            name="Men's Clothing"
            id="men-clothing"
            icon="fas fa-mars"
            link="/men-clothing"
          />
          <CategoryLink
            name="Electronics"
            id="electronics"
            icon="fas fa-hdd"
            link="/electronics"
          />
          <CategoryLink
            name="Jewelery"
            id="jewelery"
            icon="fas fa-ring"
            link="/jewelery"
          />
        </div>
      </div>
      <footer>
        © Copyright 2021 /{" "}
        <a href="http://lucasberra.com">Lucas Santiago Berra</a>, Bs.As.
      </footer>
    </main>
  );
};

const CategoryLink = ({ name, link, id, icon }) => {
  return (
    <Link to={link} id={id} className="category-link">
      <i className={icon}></i>
      <span>{name}</span>
    </Link>
  );
};

export default Homepage;
