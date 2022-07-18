import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
export default function News() {

const path=[
  {name:'首页',href:'/'},
  {name:'公司动态',href:'/news'},
  {name:'新闻列表',href:'/news'},
]

  return (
    <>
      {/* header */}
      <div className="header_box">
        <Header></Header>
      </div>
      {/* breadcrumb*/}
      <Breadcrumb path={path}></Breadcrumb>
      {/* main */}
      
      {/* footer */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  )
}
