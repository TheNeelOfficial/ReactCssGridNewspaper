import React from 'react';

// imporing utils
import {getCurrentDate} from '../../utils/getCurrentDate';

// importing styles
import {HeaderContainer, Title, SubTitle, SubTitleContents,SubTitleElement} from './HeaderStyles';

function Header(){
    return(
        <HeaderContainer>
            <Title>
                Neel Baggam
            </Title>
            <SubTitle>
                <SubTitleContents>
                    <SubTitleElement>{getCurrentDate()}</SubTitleElement>
                    <SubTitleElement>Fullstack Developer</SubTitleElement>
                    <SubTitleElement>Melbourne</SubTitleElement>
                </SubTitleContents>
            </SubTitle>
        </HeaderContainer>
    );
}

export default Header;