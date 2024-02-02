import React from 'react'

const Invoice = () => {
    const products = [
        { name: 'Product 1', qty: 34, rate: 120, total: 'INR 4,080' },
        { name: 'Product 2', qty: 34, rate: 120, total: 'INR 4,080' },
        { name: 'Product 1', qty: 34, rate: 120, total: 'INR 4,080' },
        // Add more products as needed
      ];
  return (
    <div>

<div className="p-8">
        <h1 className="text-2xl font-bold mb-6">INVOICE GENERATOR</h1>
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Product</th>
                    <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Qty</th>
                    <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Rate</th>
                    <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Total</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.name} className="hover:bg-gray-100">
                        <td className="py-4 px-6 border-b">{product.name}</td>
                        <td className="py-4 px-6 border-b">{product.qty}</td>
                        <td className="py-4 px-6 border-b">{product.rate}</td>
                        <td className="py-4 px-6 border-b">{product.total}</td> 
                    </tr> 
                ))}
            </tbody> 
        </table> 
        {/* Add more details like Total and GST here */}
        {/* ... */}
    </div> 

    </div>
  )
}

export default Invoice