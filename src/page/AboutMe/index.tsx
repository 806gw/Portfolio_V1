import * as S from "./style";

import React from "react";

interface DelayProps {
    delay: number;
}

const AboutMe: React.FC<DelayProps> = ({ delay }) => {
    return (
        <S.AboutMe>
            <S.ContentCont delay={`${delay}s`}>
                <h2>About me</h2>
                <S.ContentWrap delay={`${delay + 1}s`}>
                    안녕하세요, 현재 경북소프트웨어고등학교에 재학중인 <big style={{ color: "#3ccf91", fontWeight: 600 }}>성홍제</big>입니다. <br />
                    사람들이 필요한 서비스를 만드는 개발자가 되기 위해 노력하고 있습니다. <br />
                    창의적인 사고를 통해 경험의 가치를 극대화합니다.
                </S.ContentWrap>
                <S.ContentWrap delay={`${delay + 1.5}s`}>
                    Hello, my name is <big style={{ color: "#3ccf91", fontWeight: 600 }}>Hongje Seong</big> and I am currently attending Gyeongbuk Software High School.
                    I'm working hard to become a developer who creates services that people need.
                    Maximize the value of your experience through creative thinking.
                </S.ContentWrap>
                <S.ContentWrap delay={`${delay + 2}s`}>
                    More about me? <a href="https://hongje-dev.notion.site/064fef310ae2418fa36304d85e581085" style={{ color: "#3ccf91", fontWeight: 600 }}>[click me]</a>
                </S.ContentWrap>
            </S.ContentCont>
        </S.AboutMe>
    );
};

export default AboutMe;
