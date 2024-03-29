import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

export default function About() {

  const path=[
    {name:'首页',href:'/'},
    {name:'公司',href:'/news'},
    {name:'列表',href:'/news'},
  ]
  return (
    <>
      {/* header */}
      <div className="header_box">
        <Header></Header>
      </div>

      {/* breadcrumb */}
      <Breadcrumb path={path} ></Breadcrumb>

      {/* main */}
      <div className="main container">
        <div className="about">
          <div className="about_img"><img src="/images/gsjj.jpg" alt="" /></div>
          <p>北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。</p>
          <p>M fresh 含义</p>
          <p>标识分为M和fresh二个部份，M为Me&Million，中文译为：我及亿万人；fresh中文译为：清新；M fresh代表净美仕希望我们及亿万人都可以享受到清新的空气。</p>
          <p>净美仕秉承“你的空间，我的空气”这一企业理念，引领国际空气净化器产业的发展。伴随着国际空气净化器产业进步，净美仕从最初的车载净化器发展到现在大型公共空间空气净化设备，逐步实现从负离子净化、臭氧除异味、HEPA过滤、静电集尘到静电集尘+HEPA过滤+活性炭除醛除异味的全效过滤等60余款空气过滤产品的研发与生产;净美仕专注于改善呼吸健康，融合全球顶尖的空气净化技术，与欧美等科技机构合作研发，产品在全球132个国家使用、先后与200多个知名空气净化机品牌合作。产品分“净”“美”“仕”3个系列。</p>
          <p>净美仕相信，解决人类生活空气污染课题就是在开拓通往未来人类健康新时代的道路。净美仕将凭借自身企业的综合实力，不断开拓创新，充分发挥国际合作的技术研发特色，努力为实现人类呼吸健康提供更多更好的空气净化器产品。</p>
          <p>净美仕——自足中国 走遍世界 做有责任心的民族品牌!</p>
          <p>净美仕文化</p>
          <p>"创新、高效、服务"是净美仕企业文化的DNA，面临着新的发展机遇，净美仕秉持"人才发展"和"给客户发展空间"两大战略，不断创新探索，用快乐颠覆生活，打造员工、用户和合作伙伴共同分享的"创业天地"。</p>
          <p>"创新、高效、服务"是净美仕企业文化的DNA，是每个净美仕人所共有的文化基因。</p>
        </div>
      </div>

      {/* footer */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
