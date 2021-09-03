import React from "react";

export const MetaTags = (ogUrl,ogImage) => (<React.Fragment>
    <meta property="og:type" content="article"/>
<meta property="og:url" content={ogUrl}/>
<meta property="og:image" content={ogImage}/>
    </React.Fragment>
)
