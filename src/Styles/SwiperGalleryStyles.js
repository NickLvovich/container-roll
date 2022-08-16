import styled from "styled-components";
import {Swiper} from "swiper/react";

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-top: ${props => props.first ? '550px' : '20px'};
  &.swiper{
    .swiper-slide{
      display: flex;
      flex-flow: column;
      justify-content: space-around;
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        background: #E5E7EB;
        opacity: 0.4;
      }
      .swiper-pagination-bullet-active{
        opacity: 1;
      }
    }
  }
  @media (min-width: 768px) {
    margin-top: ${props => props.first ? '250px' : '20px'};
  }  
  @media (min-width: 1024px) {
    margin-top: ${props => props.first ? '250px' : '20px'};
  }
`;

export const Img = styled.img`
  display: block;
  width: 23vw;
  object-fit: cover;
`;
