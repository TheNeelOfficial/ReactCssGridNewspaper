import React from 'react';

// imporing utils
import {getCurrentDate} from '../../utils/getCurrentDate';

// importing styles
import {HeaderContainer, Title, SubTitle, SubTitleContents,SubTitleElement} from './HeaderStyles';

function Header(){
    return(
        <HeaderContainer>
            <Title>
                The React News
            </Title>
            <SubTitle>
                <SubTitleContents>
                    <SubTitleElement>TheNeelOfficial</SubTitleElement>
                    <SubTitleElement>Melbourne {getCurrentDate()}</SubTitleElement>
                    <SubTitleElement>$0.00</SubTitleElement>
                </SubTitleContents>
            </SubTitle>
        </HeaderContainer>
    );
}

export default Header;