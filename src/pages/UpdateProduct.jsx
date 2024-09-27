import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import MyContext from '../context/data/myContext';

const UpdateProduct = () => {

    const context = useContext(MyContext);
    console.log("My Context: ", context);

    const { products, setProducts, editProduct } = context;

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto bg-slate-200 mt-10 p-6 rounded-md shadow-md">
                <div className="flex items-center mb-6">
                    <a href="/list">
                        <FaArrowLeft
                            // onClick={handleBackClick}
                            className="text-gray-700 cursor-pointer hover:text-gray-900 transition duration-200 mr-3"
                        />
                    </a>
                    <h2 className="text-2xl font-bold text-center flex-grow">Add a Product</h2>
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={products.name}
                        onChange={(e) => setProducts({ ...products, name: e.target.value })}
                        className="block w-full text-gray-700 border rounded-md p-2"
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={products.price}
                        onChange={(e) => setProducts({ ...products, price: e.target.value })}
                        className="block w-full text-gray-700 border rounded-md p-2"
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Product Image</label>
                    <input
                        type="text"
                        name="imageUrl"
                        // accept="image/*"
                        value={products.imageUrl}
                        onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                        className="block w-full text-gray-700 border rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={products.category}
                        onChange={(e) => setProducts({ ...products, category: e.target.value })}
                        className="block w-full text-gray-700 border rounded-md p-2"
                        placeholder="Enter category"
                        required
                    />
                </div>

                <button
                    type="submit" onClick={editProduct}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Update Product
                </button>
            </div>
        </>
    );
};

export default UpdateProduct;
