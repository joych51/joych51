import React from "react";
import icon1 from '../../images/C++.svg';
import icon2 from '../../images/Java.svg';
import icon3 from '../../images/frontend.png';
import { ServicesContainer, ServicesH1, ServicesWrapper,
        ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements"

const Services = () => {
  return(
      <ServicesContainer id = "skill">
        <ServicesH1>Skill</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src = { icon1 } />
            <ServicesH2>C++</ServicesH2>
            <ServicesP><br/>Experience: 2 years</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src = { icon2 } />
            <ServicesH2>Java</ServicesH2>
            <ServicesP><br/>Experience: 2 years</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src = { icon3 } />
            <ServicesH2>Front-End</ServicesH2>
            <ServicesP>HTML5 | CSS3 | JavaScript | React</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
  );
};

export default Services;
