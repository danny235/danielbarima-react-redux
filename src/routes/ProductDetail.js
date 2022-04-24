import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearProduct, setProduct } from "../app/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);
  
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://aveosoft-react-assignment.herokuapp.com/products/${productId}`
      );
      if (response.status === 200) {
        dispatch(setProduct(response?.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProduct();
    return () => dispatch(clearProduct());
  }, []);
  return (
    <div style={styles.container}>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div style={styles.productContainer}>
          <div style={styles.imageContainer}>
            <img src="" alt={product.name} />
          </div>
          <div style={styles.productContent}>
            <p>{product.name}</p>
            <p style={styles.price}>$ {product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: 10,
  },
  productContainer:{
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      flexWrap: 'wrap',
      marginTop: 30
  },
  imageContainer: {
      border: '1px solid #000',
      width: '40%',
      height: 350
  },
  productContent: {
      width: '50%',
      textAlign: 'center'
  },
  price: {
      marginTop: 50,
      marginBottom: 50
  }
};

export default ProductDetail;
