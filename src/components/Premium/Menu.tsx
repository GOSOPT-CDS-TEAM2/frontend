import styled from 'styled-components';

const Menu = () => {

  const menuList = ["전체", "스킨케어", "메이크업/미용소품", "헤어/바디", "남성", "프래지던스"].map((item, idx) => { 
    return <St.Button type = "button" key={idx}>{item}</St.Button>;
  });
  return (
    <St.MenuContainer>
      {menuList}
    </St.MenuContainer>

  );
};

export default Menu;

const St = {
  MenuContainer: styled.nav`
    display: flex;
    align-items: center;
    gap: 2.1rem;
    
    width: 100vw;
    height: 4.4rem;
    padding-left: 2rem;
    
    box-shadow: 0rem 0.1rem 0rem rgba(0, 0, 0, 0.05);

    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    
    padding: 0rem;
    margin: 1.5rem 0rem 0.9rem 0rem;

    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_500};
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;
  `,

};
