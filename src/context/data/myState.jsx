import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { fireDB } from '../../firebase/FirebaseConfig';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore';

const MyState = (props) => {

    const [products, setProducts] = useState({
        name: '',
        price: '',
        category: '',
        imageUrl: '',
        time: Timestamp.now(),
        date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric"
        })
    });

    // Add Products Function
    const addProduct = async () => {
        if (!products.name || !products.price || !products.category || !products.imageUrl) {
            return alert('All fields are required');
        }

        const productRef = collection(fireDB, 'products');

        try {
            await addDoc(productRef, products);
            getProducts(); // Refresh product list
            alert("Product Added Successfully");

            setTimeout(() => {
                window.location.href = '/list';
            }, 1000);

            setProducts({
                name: '',
                price: '',
                category: '',
                image: '',
                time: Timestamp.now(),
                date: new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric"
                })
            });
        } catch (error) {
            console.log(error);
        }
    };

    const [allProducts, setAllProducts] = useState([]);

    // Get Products Function
    const getProducts = () => {
        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const productArray = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setAllProducts(productArray);
            });

            return unsubscribe; // Return unsubscribe function for cleanup
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const unsubscribe = getProducts();
        return () => {
            if (unsubscribe) {
                unsubscribe(); // Cleanup subscription on unmount
            }
        };
    }, []);

    //Update Products Function
    const editProductHandle = (item) => {
        setProducts(item);
    }

    //Edit Handle Function
    const editProduct = async () => {
        try {
            await setDoc(doc(fireDB, 'products', products.id), products);
            getProducts();
            alert("Product updated successfully...");
            setTimeout(() => {
                window.location.href = '/list';
            }, 800)
            setProducts('');
        } catch (error) {
            console.log(error);
        }
    }

    //Delete Product Function
    const deleteProduct = async (item) => {
        try {
            await deleteDoc(doc(fireDB, 'products', item.id));
            getProducts();
            alert("Products Deleted Successfully");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MyContext.Provider value={{ products, setProducts, addProduct, allProducts, editProductHandle, editProduct, deleteProduct }}>
            {props.children}
        </MyContext.Provider>
    );
};

export default MyState;
