import React from 'react';
import styled from 'styled-components';

const Emojis = (props) => {
    const {emoji, text} = props;

    const EmojiContainer = styled.li`
        font-size: 1.3rem;
        line-height: 1.4;
        text-align: left;
        transition: all 250ms ease;
        

        &:hover{
          transform: translateY(-3px);
          color: var(--primary);
          transition: all 250ms ease;
        }
    `

    const EmojiSpan = styled.span`
        font-size: 1.7rem;
    `
  return (
    <EmojiContainer>
        <EmojiSpan> {emoji} </EmojiSpan>
        {text}
    </EmojiContainer>
  )
}

export default Emojis
