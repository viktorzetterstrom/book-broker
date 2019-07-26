import React, { useContext } from 'react';
import { FlexContainerVertical } from '.';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';

const formatTimeStamp = ts => {
  const d = new Date(ts);
  const time = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  const date = `${d.getDate()}/${d.getMonth() + 1}`;
  return `${time} - ${date}`;
};

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
  > a {
    color: white;
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }

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
  margin-top: 10px;
  width: 100%;
  padding: 15px 0px;
  border-radius: 3px;
`;

export const Messages = ({ messages, ownerName }) => {
  const userContext = useContext(UserContext);

  return (
    <MessageContainer>
      <FlexContainerVertical>
        {
          messages
            .map(({ message, username, timestamp, user_id }, i) =>
              userContext.user.username === username
                ? <Message key={i} user>{message}
                  <MessageUser user><Link to={`/profiles/${user_id}`}>{username}</Link></MessageUser>
                  {
                    ownerName === username
                      ? <TradeOwner user>Owner</TradeOwner>
                      : <></>
                  }

                  <MessageTimestamp user>{formatTimeStamp(timestamp)}</MessageTimestamp>
                </Message>
                : <Message key={i}>{message}
                  <MessageUser><Link to={`/profiles/${user_id}`}>{username}</Link></MessageUser>
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