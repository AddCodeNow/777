import {useState} from "react";
import styled from "styled-components";

import {CartPopup} from "../CartPage";
import {GroupWindowPopup} from "../GroupWindowPage";
import {BuyMerchPopup} from "../BuyMerch";
import {AddTrackPopup} from "../AddTrack";
import {DonationsPopup} from "../Donations";
import {WriteToUsPopup} from "../WriteToUs";
import {ProfilePopup} from "../Profile";
import {EditPlaylistPopup} from "../EditPlaylist";
import {ToggleDarkOrLight} from "../../components/ToggleDarkOrLight";
import {UseDarkLightMode} from "../../Styled/useDarkLightMode";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(23, 33, 43, 0.85);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Inner = styled.div`
  width: fit-content;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 30px;
  background: #222E3C;
  border-radius: 20px;
  @media (max-width: 586px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
  }
`



const Popup = styled.div`
  max-width: 100px;
  width: 100%;
  margin: 0 auto;
  height: 100px;
  border-radius: 15px;
  background-color: #356EA8FF;
  box-shadow: 6px 6px 10px 1px rgba(53, 110, 168, 0.2);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s;
  opacity: 1;

  &:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }

  &:active {
    opacity: 0.5;
  }
`

const PopupBoard = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  const [theme, toggleTheme ] = UseDarkLightMode();

  return (

      <Wrapper>
        <ToggleDarkOrLight theme={theme} toggleTheme={toggleTheme}>
          {theme}
        </ToggleDarkOrLight>
        <Inner>
          <Popup
            onClick={() => setShow(true)}
          >
            Cart Page
          </Popup>
          {
            show &&
            <CartPopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow(false)}
            />
          }
          <Popup
            onClick={() => setShow2(true)}
          >
            Group Window
          </Popup>
          {
            show2 &&
            <GroupWindowPopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow2(false)}
            />
          }

          <Popup
            onClick={() => setShow3(true)}
          >
            BuyMerch
          </Popup>
          {
            show3 &&
            <BuyMerchPopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow3(false)}
            />
          }
          <Popup
            onClick={() => setShow4(true)}
          >
            Add Track
          </Popup>
          {
            show4 &&
            <AddTrackPopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow4(false)}
            />
          }

          <Popup
            onClick={() => setShow5(true)}
          >
            Donations
          </Popup>
          {
            show5 &&
            <DonationsPopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow5(false)}
            />
          }

          <Popup
            onClick={() => setShow6(true)}
          >
            Write to us
          </Popup>
          {
            show6 &&
            <WriteToUsPopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow6(false)}
            />
          }

          <Popup
            onClick={() => setShow7(true)}
          >
            Profile
          </Popup>
          {
            show7 &&
            <ProfilePopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow7(false)}
            />
          }

          <Popup
            onClick={() => setShow8(true)}
          >
            Edit Playlist
          </Popup>
          {
            show8 &&
            <EditPlaylistPopup
              theme={theme} toggleTheme={toggleTheme}
              onClick={() => setShow8(false)}
            />
          }
        </Inner>
      </Wrapper>
  )
}

export default PopupBoard;