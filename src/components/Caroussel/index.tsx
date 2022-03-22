import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { SwiperStyles } from './SwiperStyles';
import 'swiper/swiper-bundle.css';
import { Container } from './styles';

SwiperCore.use([Navigation, Pagination]);

interface Breakpoints {
    slidesSm: number;
    slidesMd: number;
    slidesLg: number;
    slidesXl: number;
}

interface CarousselProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    cards: JSX.Element[];
    title: string;
    slides?: Breakpoints;
}

const Caroussel: React.FC<CarousselProps> = ({ cards, slides, title }) => {
    return (
        <Container>
            <h1>{title}</h1>
            <SwiperStyles>
                <Swiper tag="section" wrapperTag="ul" style={{ listStyle: 'none' }}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    spaceBetween={20}
                    breakpoints={{
                      320: {
                        slidesPerView: slides ? slides.slidesSm : 1,
                      },
                      480: {
                        slidesPerView: slides ? slides.slidesSm : 1,
                      },
                      768: {
                        slidesPerView: slides ? slides.slidesMd :2,
                      },
                      1024: {
                        slidesPerView: slides ? slides.slidesLg : 3,
                      },
                      1440: {
                        slidesPerView: slides ? slides.slidesXl : 5,
                      },
                    }}
                    navigation
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={`${index}`} tag="li">{card}</SwiperSlide>
                    ))}
                </Swiper>
            </SwiperStyles>
        </Container >
    );
}

export default Caroussel;