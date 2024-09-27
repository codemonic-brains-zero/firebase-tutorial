import React, { useContext, useState } from 'react';
import MyContext from '../context/data/myContext';
import { Link } from 'react-router-dom';

const Products = () => {

    const context = useContext(MyContext);
    const { allProducts, deleteProduct, editProductHandle } = context;

    const [search, setSearch] = useState('');

    return (
        <div className="p-4 bg-slate-300 m-10 rounded-xl">
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search by product name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-xl pl-2 pr-28 py-1"
                />
                <a
                    href='/add'
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Product
                </a>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="border-b px-4 py-2">Sr No</th>
                        <th className="border-b px-4 py-2">Product Image</th>
                        <th className="border-b px-4 py-2">Product Name</th>
                        <th className="border-b px-4 py-2">Price</th>
                        <th className="border-b px-4 py-2">Category</th>
                        <th className="border-b px-4 py-2">Date</th>
                        <th className="border-b px-4 py-2">Edit</th>
                        <th className="border-b px-4 py-2">Delete</th>
                    </tr>
                </thead>
                {allProducts
                    .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item, index) => {
                        const { id, name, category, price, imageUrl, date } = item;
                        return (
                            <tbody key={id}>
                                <tr>
                                    {/* < tr key={id} > */}
                                    <td className="border-b px-4 py-2 text-center">{index + 1}.</td>
                                    <td className="border-b px-4 py-2 text-center">
                                        <img src={imageUrl} alt={name} className="w-12 h-12 object-cover" />
                                    </td>
                                    <td className="border-b px-4 py-2 text-center">{name}</td>
                                    <td className="border-b px-4 py-2 text-center">₹{price}</td>
                                    <td className="border-b px-4 py-2 text-center">{category}</td>
                                    <td className="border-b px-4 py-2 text-center">{date}</td>
                                    <td className="border-b px-4 py-2 text-center">
                                        <Link to={'/update'}
                                            onClick={() => editProductHandle(item)}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded text-center"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                    <td className="border-b px-4 py-2">
                                        <button
                                            onClick={() => {
                                                if (window.confirm('Are you sure you want to delete this product?')) {
                                                    deleteProduct(item);
                                                }
                                            }}
                                            className="bg-red-500 text-white px-2 py-1 rounded text-center"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                    )}
            </table>
        </div >
    );
};

export default Products;
