import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  //状态数据 - 广告列表
  let [adList, setAdList] = useState([]);
  //状态数据 - 当前显示的广告序号   cur - current，当前的
  let [curAd, setCurAd] = useState(0);

  //生命周期 - 组件挂载时，异步请求广告列表
  useEffect(function () {
    //TODO: 此处的广告列表应该从服务器端接口异步请求获得
    let adList = [
      { aid: 10, pic: "/images/banner_01.jpg", href: "/product?pid=3" },
      { aid: 13, pic: "/images/banner_02.jpg", href: "/product?pid=4" },
      { aid: 15, pic: "/images/banner_03.jpg", href: "/product?pid=6" },
      { aid: 17, pic: "/images/banner_04.jpg", href: "/product?pid=7" },
    ];
    setAdList(adList);
  }, []);

  //生命周期 - 在adList获得数据后执行，启动轮播定时器
  //生命周期方法中必须能够使用curAd，且是最新的值 —— 如果有定时器使用的旧值，此定时器在新数据到来时需要销毁
  useEffect(
    function () {
      let timer = null;
      //创建一个定时器，可以使用到新数据，且会修改新数据
      if (adList.length) {
        timer = setInterval(function () {
          let i = curAd + 1;
          i = i >= adList.length ? 0 : i;
          setCurAd(i);
        }, 2000);
      }
      return function () {
        //销毁掉之前的定时器（这种定时器使用的是之前的旧数据）
        clearInterval(timer);
      };
    },
    [adList, curAd] //注意：此处依赖列表需要添加curAd
  );

  //点击“上一张”后切换到上一张广告
  function prev() {
    let i = curAd - 1;
    i = i < 0 ? adList.length - 1 : i;
    setCurAd(i);
  }
  //点击“下一张”切换到下一张广告
  function next() {
    let i = curAd + 1;
    i = i >= adList.length ? 0 : i;
    setCurAd(i);
  }
  return (
    <div className="banner">
      {/* 图片列表 */}
      <ul>
        {adList.map((ad, i) => (
          <li
            key={ad.aid}
            style={{
              background: `url(${ad.pic}) center 0 no-repeat`,
              display: i === curAd ? "block" : "none",
              zIndex: i === curAd ? 20 : 10,
            }}
          >
            <Link to={ad.href} className="link"></Link>
          </li>
        ))}
      </ul>
      {/* 左右箭头 */}
      <span className="cut prev" onClick={prev}></span>
      <span className="cut next" onClick={next}></span>
      {/* 小圆点指示器 */}
      <div className="indicator">
        {adList.map((ad, i) => (
          <a
            key={i}
            href="/#"
            className={i === curAd ? "cur" : undefined}
            onClick={() => setCurAd(i)}
          ></a>
        ))}
      </div>
    </div>
  );
}
