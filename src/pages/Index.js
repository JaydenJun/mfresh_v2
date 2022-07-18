import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import service from "../service";
import { Link } from "react-router-dom";
import { formatDate } from "../util";

export default function Index() {
  //状态变量 - 新闻列表
  let [newsList, setNewsList] = useState([]);

  //生命周期 - 组件挂载时, 发起异步请求，获取新闻列表
  useEffect(function () {
    service
      .newsSelect()
      .then((result) => {
        console.log(result);
        //result就是解析后的完整的响应消息主体数据
        setNewsList(result.data); //result.data就是所有的新闻列表
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* header */}
      <div className="header_box">
        <Header></Header>
      </div>

      {/* banner */}
      <Carousel></Carousel>

      {/* main */}
      <div className="main container">
        <div className="ind_con1">
          <h2 className="title">
            <Link to="/product" className="more">
              more
            </Link>
            净美仕产品
          </h2>
          <ul className="clearfloat">
            <li>
              <Link to="/product" className="link">
                <img src="/images/01.jpg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/product?type=1" className="link">
                <img src="/images/02.jpg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/product?type=2" className="link">
                <img src="/images/03.jpg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="ind_con2 clearfloat">
          <div className="ind_about">
            <h2 className="title">
              <Link to="/about" className="more">
                more
              </Link>
              关于净美仕
            </h2>
            <p>
              北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。{" "}
              <Link to="/about">查看更多</Link>
            </p>
          </div>
          <div className="ind_news">
            <h2 className="title">
              <Link to="/news" className="more">
                more
              </Link>
              公司动态
            </h2>
            <ul>
              {newsList.map((n, i) => (
                <li key={n.nid}>
                  <span>{formatDate(n.pubTime)}</span>
                  <Link
                    style={{
                      display: "inline-block",
                      width: "320px",
                      whiteSpace: "nowrap", //文字在空白处：不换行
                      overflow: "hidden", //内容如果溢出：隐藏
                      textOverflow: "ellipsis", //文本溢出：使用省略号
                    }}
                    to={"/news_details?nid=" + n.nid}
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
