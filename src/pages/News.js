import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import service from "../service";
import { Link } from "react-router-dom";
import { formatDate } from "../util";
import Pager from "../components/Pager";

export default function News() {
  const path = [
    { name: "首页", href: "/" },
    { name: "公司动态", href: "/news" },
    { name: "新闻列表", href: "/news" },
  ];
  let [newsList, setNewsList] = useState([]);
  let [pageNum, setPageNum] = useState(0);
  let [pageCount, setPageCount] = useState(0);
  useEffect(function () {
    LoadData(1)
  }, []);

  function LoadData(num) {
    console.log("父组件正在加载指定页号数据", num)
    service
      .newsSelect(num)
      .then((data) => {
        console.log(data);
        setPageCount(data.pageCount);
        setPageNum(data.pageNum);
        setNewsList(data.data);
      })
      .catch((err) => console.log(err));

  }

  return (
    <>
      {/* header */}
      <div className="header_box">
        <Header></Header>
      </div>
      {/* breadcrumb*/}
      <Breadcrumb path={path}></Breadcrumb>
      {/* main */}
      <div className="main container">
        <div className="news">
          <ul>
            {newsList.map((n, i) => (
              <li key={n.nid}>
                <span>{formatDate(n.pubTime)}</span>
                <Link to={`/news_details?nid=${n.nid}`}>{n.title}</Link>
              </li>
            ))}

            {/*<li><span>2016-02-21</span><a href="">净美仕新风净化系统　助力校园新风行动</a></li>*/}
            {/*<li><span>2016-02-21</span><a href="">全国新风行动全面启动 助推净美仕战略升级</a></li>*/}
            {/*<li><span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a></li>*/}
          </ul>
        </div>

        {/* 分页导航*/}
        <Pager
          LoadData={LoadData}
          pageCount={pageCount} pageNum={pageNum}></Pager>
      </div>
      {/* footer */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
