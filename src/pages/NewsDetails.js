import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import service from "../service";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { formatDate } from "../util";
export default function NewsDetails() {
  const path = [
    { name: "首页", href: "/" },
    { name: "新闻", href: "/news" },
    { name: "详情", href: "/news_details" },
  ];
  let [params, setParams] = useSearchParams()
  let nid = params.get("nid")
  let nav = useNavigate()
  let [news, setNews] = useState([])
  // console.log(params.get("nid"))
  useEffect(function () {
    service.newsDetail(nid)
      .then((result) => {
        setNews(result)
        // console.log(data)
      })
      .catch((err) => console.log(err))
  }, [])
  if (!nid) {
    nav('/news')
    return
  }
  return (
    <>
      <div className="header_box">
        <Header></Header>
      </div>
      <Breadcrumb path={path}></Breadcrumb>
      <div className="main container">
        <div className="news_details">
          <h2>{news.title}</h2>
          <span>发布时间：{formatDate(news.pubTime, "long")}</span>
          {/* <div className="news_content">
            {news.content}
          </div> */}
          <div className="news_content"
            dangerouslySetInnerHTML={{ __html: news.content }}>

          </div>
        </div>
      </div>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  )
}
