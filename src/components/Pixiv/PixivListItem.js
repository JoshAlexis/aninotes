import React from 'react'

const PixivListItem = ({ pixivName, idPixiv, Link, Content, Favorite, Quality }) => {
  return (
    <>
      <tr>
        <td className="px-3 py-4 whitespace-nowrap">
          {pixivName}
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          <a href={Link} className="text-indigo-600 hover:text-indigo-900 mx-1">{idPixiv}</a>
        </td>
        <td className="px-3 py-4 whitespace-nowrap">
          {Content}
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          {Quality}
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          {Favorite}
        </td>
        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href={`/edit/${idPixiv}`} className="text-indigo-600 hover:text-indigo-900 mx-1">Edit</a>
        </td>
      </tr>
    </>
  )
}

export default PixivListItem
