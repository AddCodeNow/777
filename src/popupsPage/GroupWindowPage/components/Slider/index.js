import SliderItemImage from './assets/t-shirt-little.png';
import Slider from 'react-slick';
import {SliderItem, TrashItemAdmin} from "./Slider.styled";
import trashIcon from '../../assets/trashIcon.svg';

export const SliderBoard = ({useAdmin}) => {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  }
  return (
    <Slider {...settings}>

      <SliderItem>
        <img src={SliderItemImage} alt="slider img"/>
        {
          useAdmin &&
          <TrashItemAdmin>
            <img src={trashIcon} alt="trash icon"/>
          </TrashItemAdmin>
        }

      </SliderItem>
      <SliderItem>
        <img src={SliderItemImage} alt="slider img"/>
        {
          useAdmin &&
          <TrashItemAdmin>
            <img src={trashIcon} alt="trash icon"/>
          </TrashItemAdmin>
        }

      </SliderItem>
      <SliderItem>
        <img src={SliderItemImage} alt="slider img"/>
        {
          useAdmin &&
          <TrashItemAdmin>
            <img src={trashIcon} alt="trash icon"/>
          </TrashItemAdmin>
        }

      </SliderItem>
      <SliderItem>
        <img src={SliderItemImage} alt="slider img"/>
        {
          useAdmin &&
          <TrashItemAdmin>
            <img src={trashIcon} alt="trash icon"/>
          </TrashItemAdmin>
        }

      </SliderItem>
      <SliderItem>
        <img src={SliderItemImage} alt="slider img"/>
        {
          useAdmin &&
          <TrashItemAdmin>
            <img src={trashIcon} alt="trash icon"/>
          </TrashItemAdmin>
        }

      </SliderItem>
      <SliderItem>
        <img src={SliderItemImage} alt="slider img"/>
        {
          useAdmin &&
          <TrashItemAdmin>
            <img src={trashIcon} alt="trash icon"/>
          </TrashItemAdmin>
        }

      </SliderItem>
    </Slider>
  )
}
