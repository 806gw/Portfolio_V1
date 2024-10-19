import * as C from "@src/allFiles";
import * as S from "./style";

const Header = () => {
    const items = ["Hongje Seong", "Frontend", "& Dev"];
    const delay = 0.2;

    return (
        <S.Header>
            <C.HeaderItem items={items} delay={delay} />
        </S.Header>
    );
}

export default Header;
