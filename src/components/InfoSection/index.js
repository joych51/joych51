import React, { useState, useEffect } from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
        TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText,
                    description, buttonLabel, img, alt, primary, dark, dark2, toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
      if(window.scrollY >= 80) setScrollNav(true);
      else setScrollNav(false);
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, [])
  return (
    <>
      <InfoContainer lightBg = { lightBg } id = { id }>
        <InfoWrapper>
          <InfoRow imgStart = { imgStart }>
            <Column1>
              <TextWrapper>
                <TopLine>{ topLine }</TopLine>
                <Heading lightText = { lightText }>{ headLine }</Heading>
                <Subtitle darkText = { darkText }>{ description }</Subtitle>
                <BtnWrap scrollNav = { scrollNav }>
                  <Button to = "resume"
                   smooth = { true }
                   duration = { 500 }
                   spy = { true }
                   exact = "true"
                   offset = { -80 }
                   primary = { primary ? 1 : 0 }
                   dark = { dark ? 1 : 0 }
                   dark2 = { dark2 ? 1 : 0 }
                   onClick = { toggle }
                  >{ buttonLabel }</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src = { img } alt = { alt }/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
