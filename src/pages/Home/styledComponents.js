import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 0;
`
export const SubContainer = styled.div`
  display: flex;
  padding: 0;
`

export const HomeVideosContainer = styled.div`
  height: 100%;
  background-color: ${props => (props.isThemeDark ? '#181818' : '#f1f5f9')};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 30px 20px 30px 20px;
`

export const BannerSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
`

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 60%;
`

export const NxtWatchLogo = styled.img`
  @media screen and (max-width: 768px) {
    height: 50%;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    height: 80%;
    width: 80%;
  }
`

export const BannerText = styled.p`
  font-weight: bold;
  color: #000000;
`

export const GetItNowButton = styled.button`
  border: 1px solid #000000;
  background-color: transparent;
  border-radius: 1px;
  padding: 10px;
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`

export const CrossCloseButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const VideosContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`

export const VideosCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 575.98px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SearchInputContainer = styled.div`
  border: 1px solid #606060;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const SearchBar = styled.input`
  width: 100%;
  outline: none;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isThemeDark ? '#f9f9f9' : '0f0f0f')};
`

export const HrBar = styled.hr`
  width: 0.5px;
  height: auto;
  align-self: stretch; /* This makes it stretch in flex container */
  background-color: #606060;
  border: none;
  margin: 0; /* Optional: remove default spacing */
`

export const SearchIconCard = styled.button`
  border: none;
  padding: 10px 20px 10px 20px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
