import React from 'react'
import {SquarePen, Trash} from 'lucide-react'

const ShowProducts = () => {
  return (
    <>
    <div>
      <p className='text-2xl font-bold mb-3'>Products</p>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque veniam qui.</td>
              <td>$20</td>
              <td>Image</td>
              <td className='flex gap-2'>
                <button className="btn btn-soft btn-info btn-sm"><SquarePen /></button>
                <button className="btn btn-soft btn-error btn-sm"><Trash /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default ShowProducts
