'use client';

import { FormEvent } from 'react';
const DeleteProductButton = () => {
    function handleClick(e: FormEvent<HTMLButtonElement>) {
        // Prevent form from auto-submitting
        if (!confirm('Are you sure you want to delete this product?')) {
            e.preventDefault(); // stop submit
        }
    }

    return (
        <button
            onClick={handleClick}
            className="text-red-600 hover:bg-red-600 hover:text-gray-50 px-2 rounded-md"
        >
            Delete
        </button>
    );
};
export default DeleteProductButton;
