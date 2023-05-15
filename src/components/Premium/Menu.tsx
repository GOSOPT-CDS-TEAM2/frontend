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
    height: 5.2rem;
  `,

  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.4rem;
    height: 4.4rem;
    
    padding: 0rem;
    
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 40.0rem;
    letter-spacing: -0.04em;
    line-height: 2.0rem;
    
    background-color: white;
    border: none;
  `,

};
