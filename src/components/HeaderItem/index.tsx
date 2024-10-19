import * as S from "./style";

import React from "react";
import GithubIcon from "../../assets/github.svg"
import MailIcon from "../../assets/mail.svg"

interface HeaderItemProps {
    items: string[];
    delay: number;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ items, delay }) => {
    return (
        <S.HeaderContent>
            {items.map((item, index) => (
                <S.Item key={index} delay={`${delay * index}s`}>
                    <h1>
                        {item}
                    </h1>
                </S.Item>
            ))}
            <S.IntrodWrap>
                <S.Introd delay={`${delay * items.length}s`}>
                    🚀 Currently focus on Frontend (React / TypeScript)
                </S.Introd>
                <S.Introd delay={`${delay * (items.length + 1)}s`}>
                    🏫 Gyeongbuk Software High School Student
                </S.Introd>
            </S.IntrodWrap>
            <S.ContentCont delay={`${delay * (items.length + 1.5)}s`}>
                <S.ContactWrap>
                    <a href="https://github.com/806gw" target="blank" className="contactLink">
                        <img src={GithubIcon} alt="github-icon" className="githubIcon" />
                        Github
                    </a>
                </S.ContactWrap>
                <S.ContactWrap>
                    <a href="mailto:shjea4364@naver.com" target="blank" className="contactLink">
                        <img src={MailIcon} alt="github-icon" className="mailIcon" />
                        Mail
                    </a>
                </S.ContactWrap>
            </S.ContentCont>
        </S.HeaderContent>
    );
};

export default HeaderItem;
