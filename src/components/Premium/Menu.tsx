import styled from 'styled-components';

const Menu = () => {

  const menuList = ["전체", "오특", "신상", "랭킹", "기획전", "이벤트"].map((item, idx) => { 
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
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 4.4rem;

    box-shadow: 0rem 0.1rem 0rem rgba(0, 0, 0, 0.05);
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
    
    background-color: ${({ theme }) => theme.colors.gray_000};;
    border: none;
  `,

};
