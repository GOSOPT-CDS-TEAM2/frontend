import styled from 'styled-components';

import { BarIcon, BlackArrowIcon, CallIcon, ChannelIcon, FacebookIcon, InstaIcon, YoutubeIcon } from '../../assets/icon';

const Footer = () => {
  const ServiceList = ['온라인몰 콜센터', '매장 콜센터', '1:1문의', '고객센터'].map((item, idx) => {
    return (
      <St.ServiceBtn type = "button" key = {idx}> 
        {(idx === 0 || idx == 1) && <img className= "call" src={CallIcon} alt="전화아이콘" />}
        {item} 
        {(idx != 3) && <img className = "bar" src = {BarIcon} alt = "바 아이콘" />}
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
          <img src = {InstaIcon} alt = "인스타 아이콘" />
          <img src = {FacebookIcon} alt = "페북 아이콘" />
          <img src = {ChannelIcon} alt = "샤넬 아이콘" />
          <img src = {YoutubeIcon} alt = "유튜브 아이콘" />
        </St.IconContainer>

        <St.LawContainer> 
          {LawList}
        </St.LawContainer>

      </St.Footer>
      <St.MenuBar>
            
      </St.MenuBar>
    </St.FooterContainer>
  );
};

export default Footer;

const St = {
  FooterContainer: styled.div`
  width: 100vw;
  height: 30.2rem;
  `,
  Footer: styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 22rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
  `,
  MenuBar: styled.nav`
  height: 8.2rem;
  `,
  ServiceCenter : styled.section`
  display: flex;
  height: 1.8rem;
  margin-top: 2.2rem;
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
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }
  ${({ theme }) => theme.fonts.SubTitle3};
  color: ${({ theme }) => theme.colors.gray_500};
  
  background: none;
  border: none;
  `,

  CompanyName: styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.3rem;
  ${({ theme }) => theme.fonts.Title2};
  color: ${({ theme }) => theme.colors.gray_900};
  `,

  IconContainer : styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  margin-top: 1.1rem;
  `,
  LawContainer: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.9rem;
  ${({ theme }) => theme.fonts.SubTitle3};
  color: ${({ theme }) => theme.colors.gray_300};
  
  small {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .bar {
        height: 0.9rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
}
  `,
};
