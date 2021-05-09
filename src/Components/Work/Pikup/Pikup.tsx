import React from 'react';

// importing styles
import {PikupContainer, PikupDisc, PikupImg} from '../Pikup/PikupStyles';

function Pikup(){
    return(
        <PikupContainer>
          <PikupDisc>
            <h1>Man spends too much time on Codepens despite advice; no plans to stop</h1>
            <p>
            Sometimes, Internet users land themselves in an uncommon situation where an app or website can be used for both work and personal situations. Well, a young front-end designer was spending up to 13 hours on the site, Codepen for work and her hobby, which unfortunately, is also coding.

The designer, whose work includes a To-Do Terrarium, clarified, "Well, I didn't have to use it for work but it was already part of my workflow. It just made sense as it was more efficient." The biggest issue, she said, is that she would hop on Codepen for work, but would get distracted by pens made by others in the community for unexpectedly long periods of time, which then causes her to spend even more time on the site.

"I mean, that's terrible right?" she asked. Codepen, which brands itself as the best place to build, test, and discover front-end code, has declined to comment at this time.    
            </p>    
          </PikupDisc> 
          <PikupImg>
            <img src="https://theneelofficial.me/img/pikup.fde9f5b61b90afeba9240d698a774e62.jpeg" width="400"/>
          </PikupImg> 
        </PikupContainer>
    );
}

export default Pikup;