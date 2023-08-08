import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(res.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading, addProduct };
};

export default useProducts;
