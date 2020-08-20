import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import air_map from '../../images/air_map.png'
import apexa from '../../images/apexa.png'
import wedding from '../../images/wedding.jpg'
import gram from '../../images/gram.png'
import CarouselItem from './CarouselItem'

import { ProjectContainer, ProjectCol, HeaderCol, MainCol } from './style'

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <ProjectContainer id="project">
      <ProjectCol className="row">
        <HeaderCol className="three columns">
          <h1>
            <span>Project</span>
          </h1>
        </HeaderCol>
        <MainCol className="nine columns">
          <Slider {...settings}>
            <CarouselItem
              img={air_map}
              text="在研能科技開發的空氣地圖，結合政府空污站點以及公司開發的移動空污裝置，讓使用者可以找到離自己最近的空氣狀況。"
            />
            <CarouselItem
              img={apexa}
              text="這是一個空氣查詢平台，讓有裝置的使用者可以看每台裝置的現在所在地空氣狀況，以及可以查詢以往的歷史資料。"
            />
            <CarouselItem
              img={wedding}
              text="在結婚時所寫的 Side Project，結合 LINE Bot 讓來賓加入玩遊戲以及留言祝福新人。"
            />
            <CarouselItem
              url="https://gram.jianruimmp.com"
              img={gram}
              text={`結合 Firebase、Firestore 來上傳圖片，可以瀏覽及儲存。`}
            />
          </Slider>
        </MainCol>
      </ProjectCol>
    </ProjectContainer>
  );
}

export default Project
