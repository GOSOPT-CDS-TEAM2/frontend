import styled from 'styled-components';

const Menu = () => {
  return (
    <St.MenuContainer>
      <St.Button> 전체 </St.Button>
      <St.Button> 오특 </St.Button>
      <St.Button> 신상 </St.Button>
      <St.Button> 랭킹 </St.Button>
      <St.Button> 기획전 </St.Button>
      <St.Button> 이벤트 </St.Button>
    </St.MenuContainer>

  );
};

export default Menu;

const St = {
  MenuContainer: styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 4.4rem;

    margin: 0rem;

    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  `,

  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.4rem;
    height: 3.6rem;
    
    margin: 0.8rem 1rem 0rem 0rem;
    padding: 0rem;
    
    
    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_500};
    font-size: 1.4rem;
    font-weight: 40.0rem;
    letter-spacing: -0.04em;
    line-height: 2.0rem;
    
    background-color: white;
    border: none;
  `,

};
