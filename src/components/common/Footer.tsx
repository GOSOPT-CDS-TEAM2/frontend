import styled from 'styled-components';

import { BarIcon, BlackArrowIcon, CallIcon, ChannelIcon, CircleArrowIcon, FacebookIcon, InstaIcon, YoutubeIcon } from '../../assets/icon';

const Footer = () => {
  
  const ServiceList = ['온라인몰 콜센터', '매장 콜센터', '1:1문의', '고객센터'].map((item, idx) => {
    return (
      <St.ServiceBtn type = "button" key = {idx}> 
        {(idx === 0 || idx === 1) && <img className= "call" src={CallIcon} alt="전화아이콘" />}
        {item} 
        {(idx !== 3) && <img className = "bar" src = {BarIcon} alt = "바 아이콘" />}
      </St.ServiceBtn>
    );
  });

  const LawList = ['이용약관', '개인정보처리방침', '청소년보호방침', '법적고지'].map((item, idx) => {
    return (
      <small key ={idx}> 
        {item}
        {(idx != 3) && <img className = "bar" src = {BarIcon} alt = "바 아이콘" />}  
      </small>
    );
  });

  const IconList = [
    { imgSrc: InstaIcon, imgAlt: '인스타 아이콘' },
    { imgSrc: FacebookIcon, imgAlt: '페북 아이콘' },
    { imgSrc: ChannelIcon, imgAlt: '샤넬 아이콘' },
    { imgSrc: YoutubeIcon, imgAlt: '유튜브 아이콘' },
  ].map(({ imgSrc, imgAlt }) => {
    return (
      <img key = {imgSrc} src = {imgSrc} alt = {imgAlt} />
    );
  });
  
  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
  };

  return (
    <St.FooterContainer>

      <St.Footer>
        
        <St.ServiceCenter>
          {ServiceList}
        </St.ServiceCenter>

        <St.CompanyName> 
            씨제이올리브영(주)
          <img src = {BlackArrowIcon} alt = "화살표" />
        </St.CompanyName>

        <St.IconContainer>
          {IconList}
        </St.IconContainer>

        <St.LawContainer> 
          {LawList}
        </St.LawContainer>
        <St.Download>
            APP 다운로드
        </St.Download>
        <St.UpIcon className = "moveTopBtn" onClick={handleOnClick}>
          <img src = {CircleArrowIcon} alt = "올라가기 아이콘" />
        </St.UpIcon>
      </St.Footer>

    </St.FooterContainer>
  );
};

export default Footer;

const St = {

  FooterContainer: styled.div`
  width: 100vw;
  height: 26.8rem;
  `,

  Footer: styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 22rem;

  background-color: ${({ theme }) => theme.colors.gray_100};
  `,

  ServiceCenter : styled.section`
  display: flex;

  height: 1.8rem;
  margin-top: 2.3rem;
  `,

  ServiceBtn : styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0rem;

  .call {
    margin-right: 0.3rem;
  }

  .bar {
    margin : 0 0.7rem;
  }

  border: none;
  ${({ theme }) => theme.fonts.SubTitle3};
  color: ${({ theme }) => theme.colors.gray_500};
  background: none;
  `,

  CompanyName: styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2.3rem;
  ${({ theme }) => theme.fonts.Title2};
  color: ${({ theme }) => theme.colors.gray_900};
  `,

  IconContainer : styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  margin-top: 1.2rem;

  img {
    width: 3.6rem;
    height: 3.6rem;
  }
  `,

  LawContainer: styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.3rem;

  ${({ theme }) => theme.fonts.SubTitle3};
  color: ${({ theme }) => theme.colors.gray_300};
  
  small {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .bar {
        height: 0.9rem;
        margin : 0 0.7rem;
    }
}
  `,

  Download : styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 14.9rem;
  height: 3.2rem;
  
  margin: 1.7rem 0rem 0.8rem 0rem;
  
  border-radius: 0.3rem;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.gray_200};

  ${({ theme }) => theme.fonts.Title2};
  color: ${({ theme }) => theme.colors.gray_700};
  `,
  
  UpIcon : styled.button`
  position: fixed;
  
  padding: 0;
  border : none;
  width: 3.8rem;
  height: 3.8rem;
  bottom: 9.5rem;
  right: 1.3rem;
  background : none;

  z-index: 2;
  `,
};
