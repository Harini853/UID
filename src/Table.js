import React from 'react'
import './Table.css'
const Table = () => {
  return (
    <table className='table table-container table-striped  mt-5' >
      <tr>
        <th>S.no</th>
        <th>Products</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>
          1
        </td>
        <td>
          Apple MGND3HNA - M1 CHIP
        </td>
        <td>
          ₹92,907
        </td>
      </tr>
      <tr>
        <td>
          2
        </td>
        <td>
          Apple MNEH3HNA- M2 PRO
        </td>
        <td>
          ₹1,20,807
        </td>
      </tr>
      <tr>
        <td>
          3
        </td>
        <td>
          Apple MGN63HNA- M1 CHIP
        </td>
        <td>
          ₹92,907
        </td>
      </tr>
      <tr>
        <td>
          4
        </td>
        <td>
          Apple MLXY3HNA- 2 CHIP
        </td>
        <td>
          ₹1,11,507
        </td>
      </tr>
      <tr>
        <td>
          5
        </td>
        <td>
          Apple MTD82HNA- M1 CHIP
        </td>
        <td>
          1,02,299
        </td>
      </tr>
    </table>
  )
}

export default Table