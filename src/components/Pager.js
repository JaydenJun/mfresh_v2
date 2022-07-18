import React from 'react'
import { Link } from 'react-router-dom'

export default function Pager({ pageCount, pageNum, LoadData }) {
  console.log("分页条", pageCount, pageNum)
  return (
    <div className="pages">
      <Link onClick={() => LoadData(pageNum - 1)} to="" className={pageNum === 1 ? 'default' : undefined}>上一页</Link>
      {pageNum - 2 >= 1 && <Link onClick={() => LoadData(pageNum - 2)} to="" >{pageNum - 2}</Link>}
      {pageNum - 1 >= 1 && <Link onClick={() => LoadData(pageNum - 1)} to="" >{pageNum - 1}</Link>}
      <Link to="" className='cur'>{pageNum}</Link>
      {pageNum + 1 <= pageCount && <Link onClick={() => LoadData(pageNum + 1)} to="" >{pageNum + 1}</Link>}
      {pageNum + 2 <= pageCount && <Link onClick={() => LoadData(pageNum + 2)} to="" >{pageNum + 2}</Link>}
      <Link
        onClick={() => pageNum + 1 <= pageCount && LoadData(pageNum + 1)}
        to="" className={pageNum === pageCount ? 'default' : undefined}>下一页</Link>
    </div>
  )
}
