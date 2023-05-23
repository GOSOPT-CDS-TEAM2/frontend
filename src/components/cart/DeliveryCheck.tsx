import { useState } from 'react';
import { styled } from 'styled-components';

import { CheckBigIcon } from '../../assets/icon';

const DeliveryCheck = () => {
  const [deliveryCheck, setDeliveryCheck] = useState(true);
  const [progressAmount, setProgressAmount] = useState('100%');
  return (
    <St.DeliveryCheckContainer>
      <St.OliveyoungDelivery>
        <label>
          <input
            type="checkbox"
            checked={deliveryCheck}
            onChange={() => {
              setDeliveryCheck(!deliveryCheck);
              setProgressAmount(progressAmount === '0%' ? '100%' : '0%');
            }}
          />
          올리브영 배송
        </label>
        <div>
          <button type="button">오늘드림 이동</button>
          <button type="button">선택삭제</button>
        </div>
      </St.OliveyoungDelivery>
      <St.ProgressBar progressAmount={progressAmount}>
        <span>무료 배송</span>
        <div className="progressBarContainer">
          <progress max="100"></progress>
        </div>
      </St.ProgressBar>
    </St.DeliveryCheckContainer>
  );
};

export default DeliveryCheck;

const St = {
  DeliveryCheckContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  OliveyoungDelivery: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ProgressBar: styled.aside<{
    progressAmount: string;
  }>`
    progress {
      opacity: 0;
    }
    .progressBarContainer {
      position: relative;
      background: #eee;
      height: 0.6rem;
      border-radius: 2rem;
      overflow: hidden;
    }

    .progressBarContainer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 0.6rem;
      width: 100%;
      width: ${({ progressAmount }) => progressAmount};
      border-radius: 2rem;
      background: ${({ theme }) => theme.colors.red_300};

      transition: all ease-in-out 2s 0s;
    }
  `,
};
