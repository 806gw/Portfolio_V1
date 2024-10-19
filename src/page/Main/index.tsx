import * as S from "./style"

const Main = () => {
    return (
        <S.Main>
            <S.ContentCont>
                <h2>About me</h2>
                <S.ContentWrap>
                    안녕하세요, 현재 경북소프트웨어고등학교에 재학중인 <big style={{ color: "#3ccf91", fontWeight: 600 }}>성홍제</big>입니다. <br />
                    사람들이 필요한 서비스를 만드는 개발자가 되기 위해 노력하고 있습니다. <br />
                    창의적인 사고를 통해 경험의 가치를 극대화합니다.
                </S.ContentWrap>
                <S.ContentWrap>
                    Hello, my name is <big style={{ color: "#3ccf91", fontWeight: 600 }}>Hongje Seong</big> and I am currently attending Gyeongbuk Software High School.
                    I'm working hard to become a developer who creates services that people need.
                    Maximize the value of your experience through creative thinking.
                </S.ContentWrap>
            </S.ContentCont>
        </S.Main>
    )
}
export default Main