import {Wrap} from "./PastConcert.styled";
import {AddressInfo, ClubInfo, Date} from "./PastConcert.styled";

const PastConcert = () => {
    return (
        <>
            <Wrap>
                <Date>
                    13.08.20
                </Date>
                <ClubInfo>
                    Клуб “Mosaique”
                </ClubInfo>
                <AddressInfo>
                    г. Санк-Петербург, Конюшенная пл., 2
                </AddressInfo>
            </Wrap>
        </>
    )
}

export default PastConcert;