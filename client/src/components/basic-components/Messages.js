import React, { useContext } from 'react';
import { Button, FlexContainerVertical } from '.';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';

const formatTimeStamp = ts => new Date(ts).toLocaleTimeString();

const Message = styled.div`
  padding: 20px;
  margin: 10px 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.315);
  width: 55%;
  position: relative;
  background-color: var(${props =>
    props.user
      ? '--primary-color'
      : '--secondary-color'});
  align-self: ${props =>
    props.user
      ? 'flex-end'
      : 'flex-start'};
  font-size: 10px;
`;

const MessageTimestamp = styled.div`
  position: absolute;
  ${props =>
    props.user
      ? `right:-4px;
         bottom: -4px;`
      : `left:-4px;
         bottom: -4px;`};
  color: white;
  padding: 4px;
  border-radius: 3px;
  background-color: var(${props =>
    props.user
      ? '--primary-color-dark'
      : '--secondary-color-dark'});
`;

const MessageUser = styled.div`
  position: absolute;
  ${props =>
    props.user
      ? `right:-4px;
         top: -4px;`
      : `left:-4px;
         top: -4px;`};
  color: white;
  padding: 4px;
  border-radius: 3px;
  background-color: var(${props =>
    props.user
      ? '--primary-color-dark'
      : '--secondary-color-dark'});
`;

const TradeOwner = styled.div`
  position: absolute;
  ${props =>
    props.user
      ? `left:-4px;
         top: -4px;`
      : `right:-4px;
         top: -4px;`};
  color: white;
  padding: 4px;
  border-radius: 3px;
  background-color: black;
`;

const MessageContainer = styled.div`
  background-color: var(--gray-light);
  margin-top: 30px;
  width: 80%;
  border-radius: 3px;
`;

export const Messages = ({ messages, ownerName }) => {
  const userContext = useContext(UserContext);

  return (
    <MessageContainer>
      <FlexContainerVertical>
        {
          messages
            .map(({ message, username, timestamp }) =>
              userContext.user.username === username
                ? <Message user>{message}
                  <MessageUser user>{username}</MessageUser>
                  {
                    ownerName === username
                      ? <TradeOwner user>Owner</TradeOwner>
                      : <></>
                  }

                  <MessageTimestamp user>{formatTimeStamp(timestamp)}</MessageTimestamp>
                </Message>
                : <Message>{message}
                  <MessageUser>{username}</MessageUser>
                  {
                    ownerName === username
                      ? <TradeOwner>Owner</TradeOwner>
                      : <></>
                  }
                  <MessageTimestamp>{formatTimeStamp(timestamp)}</MessageTimestamp>
                </Message>
            )
        }
      </FlexContainerVertical>
    </MessageContainer>
  )
}