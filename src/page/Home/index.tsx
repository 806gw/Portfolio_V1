import * as C from "@src/allFiles"
import * as S from "./style"

const Home = () => {
    return (
        <>
            <S.TopCont>
                <S.HomeCont>
                    <C.Header />
                    <C.Main />
                    <C.Footer />
                </S.HomeCont>
            </S.TopCont>
        </>
    )
}
export default Home