import styled from 'styled-components';

import { MemberShipEvent1, MemberShipEvent2, MemberShipEvent3 } from '../../assets/image';

const Event = () => {
  return (
    <St.EventContainer>
      <h1>멤버십 이벤트</h1>
      <div>
        <img src={MemberShipEvent1} alt="첫 구매 100원부터 이벤트"></img>
      </div>
      <button type="button">혜택 알람 받기</button>
    </St.EventContainer>
  );
};

export default Event;

const St = {
  EventContainer: styled.div`
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.fonts.Head4}
    color:${({ theme }) => theme.colors.gray_900};

    & > h1 {
      padding: 0 1.4rem;
      margin-top: 6.3rem;
    }

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 4.1rem;
      margin: 1.9rem 1.7rem 0 1.7rem;

      ${({ theme }) => theme.fonts.Title2}
      color:${({ theme }) => theme.colors.gray_700};
      background: ${({ theme }) => theme.colors.gray_000};
      border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
      border-radius: 0.4rem;

      cursor: pointer;
    }
  `,
};
