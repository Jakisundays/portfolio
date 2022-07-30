import React from 'react'
import styled from 'styled-components';

const MediaIcons = (props) => {
    const {link, icon, label} = props;
    const MediaLink = styled.a``
    const MediaIcon = styled.i``


  return (
    <MediaLink target="_blank" href={link} aria-label={label}>
        <MediaIcon className={icon}/>
    </MediaLink>
  )
}

export default MediaIcons

