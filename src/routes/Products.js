import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategories, setProducts } from "../app/actions/productActions";

const RenderItem = ({ product, idValue }) => {
  const { id, name, model, categoryId, price, description } = product;
  if (idValue != categoryId) return null;
  return (
    <div style={styles.productItem} key={id}>
      <div style={styles.imageContainer}>
        <img src="" alt={name} />
      </div>
      <div>
        <Link to={`/product/${id}`}>
          <p>{name}</p>
        </Link>
        <p>{model}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

const Products = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/products"
      );
      if (response.status === 200) {
        dispatch(setProducts(response?.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/categories"
      );
      if (response.status === 200) {
        dispatch(setCategories(response?.data));
        setSelectedId(response?.data[0]?.id);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchProducts();
    return;
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.headerText}>Product Category</h2>
        <select
          onChange={(e) => setSelectedId(e.target.value)}
          style={styles.selectContainer}
        >
          {categories.map((category) => {
            return (
              <option key={category?.id} value={category?.id}>
                {category?.name}
              </option>
            );
          })}
        </select>
      </div>
      <div style={styles.productList}>
        {products.map((product, i) => {
          return <RenderItem key={i} product={product} idValue={selectedId} />;
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "400",
    marginRight: 10,
  },
  productList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "40%",
  },
  productItem: {
    display: "flex",
    height: 200,
    width: 150,
    padding: 10,
    marginBottom: 20,
    border: "1px solid #000",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imageContainer: {
    height: 200,
    width: "80%",
    marginBottom: 20,
    border: "1px solid #000",
  },
  selectContainer: {
    width: 150,
    height: 40,
    outline: "none",
  },
};

export default Products;
