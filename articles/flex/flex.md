Flex : 


Intro : 
In this Blog we will cover the basics of flexbox. how it works ? why it is important ?

==> CSS Flexible Box Layout, commonly known as Flexbox, is a CSS 3 web layout model. It is in the W3C's candidate recommendation stage. 
==> The flex layout allows responsive elements within a container to be automatically arranged depending on viewport size.

Let's learn how to create navbar using flex look below image
https://prnt.sc/SelX-icVNBW7


flex
=> Giving property flex to it's parent it arrange all it's child to one flow as you can see in below image
https://prnt.sc/hA4r8HFrtRGk

=> You can set gap property to provide space between each child in flex 
https://prnt.sc/KsQwyZ3ZXP0-



usecase 1 > Navbar

=> flex-basis
    This flex-basis property is specified as <number> | auto | (0,1)
    e.g.
        flex-basis  : auto  
        flex-basis  : 0 
        flex-basic  : <number>  
    => it deine initial size of a flex item. It sets the size of the content box unless otherwise set with box-sizing. review in below image.

    https://prnt.sc/pBUDgroabgww

flex-direction 
    This flex-direction property is specified as row | column | row-reverse | column-reverse
    e.g.
        flex-direction : row // default set to row https://prnt.sc/isJdZCGeuF-F
        flex-direction : column // https://prnt.sc/gqFfBOrMlqOV
        flex-direction : row-reverse // https://prnt.sc/8UwUuNhg8wYZ
        flex-direction : column-reverse // https://prnt.sc/RMpb6uV_mYh9

    The flex-direction CSS property sets to flex-parent and it define the flex-child directions in horizontally/horizontally reverse and vertically/vertically reverse.

flex-grow
    The flex-grow property is specified as a single <number>.
    e.g. 
        flex-grow : 0 // https://prnt.sc/87iRcx6fPEFo
        flex-grow : 1 // https://prnt.sc/nYiG8zGN0KD-
        flex-grow : <number> // work only when you set parent with flex-wrap

    This Property allows us to give custom width to flex child.when flex grow is set to "1" then all flex child  take their auto width depending upon container size. 
    
    
    if flex grow is set to "0" then flex child take default width.
    https://prnt.sc/nYiG8zGN0KD-


flex-shrink
    The flex-shrink specified as a single <number>

    e.g.
        flex-shrink : <number>

    flex-shrink property allow us to reduce/maximize the width of flex children and set according to container width. https://prnt.sc/0NIXUCg4RSB1 

flex-wrap 
    flex wrap specified as a follow <wrap> | <nowrap>
    e.g.
        flex-wrap : wrap
        flex-wrap : nowrap // default property 

    flex-wrap property is one of the most important property in css for responsive design. This wrap all flex child inside container and assure that all children never goes out of it's parent/container fit accordingly to it's parent width.

    by default flex-wrap : nowrap property applied flex parent look in below example https://prnt.sc/i4hiANcuEOfk
    https://prnt.sc/jL5zTG9ocZCP
     

flex-flow
    flex flow property defines all flex children vertically/horizontally direction and also defines flex wrap.
    e.g.
        flex-flow : row nowrap // default https://prnt.sc/PQL4HAUobBk7
        flex-flow : row-reverse nowrap  // https://prnt.sc/chNXt5C2CAma
        flex-flow : row wrap // https://prnt.sc/ps_MGZI9piF7
        flex-flow : row-reverse wrap  // https://prnt.sc/HizacRuUOljr
        flex-flow : column nowrap // https://prnt.sc/4yWHCUA1CGOg
        flex-flow : column-reverse nowrap // https://prnt.sc/R0axbtCAB5_s 
        flex-flow : column wrap // https://prnt.sc/4yWHCUA1CGOg
        flex-flow : column-reverse wrap // https://prnt.sc/R0axbtCAB5_s 
        

justify-content 
    justify content specified as flex-start | flex-end | center | space-between | space-around | space-evenly 

    e.g.
        justify-content : flex-start | left | start // default https://prnt.sc/ACW9rFJ596c1
        justify-content : flex-end | right | end // https://prnt.sc/BCrkl9xDvqVD
        justify-content : center // https://prnt.sc/9dR2e7QPxC0W
        justify-content : space-between // https://prnt.sc/i6FZPsaWtPw1
        justify-content : space-around // https://prnt.sc/dxQo7h4HqHzA
        justify-content : space-evenly // https://prnt.sc/5Z8UYLNN8L1J

    The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of container.

align-items 
    Align Items content specified as flex-start | flex-end | center | baseline | stretch 

    e.g.
        align-items : flex-start // https://prnt.sc/sAjI85sUk8BD
        align-items : flex-end // https://prnt.sc/lSXfyp2hq2TI
        align-items : center // https://prnt.sc/wWjLcB-l3Cbm
        align-items : baseline // https://prnt.sc/sAjI85sUk8BD
        align-items : stretch // default https://prnt.sc/MGhK8S2uGIes

    The CSS align-items property set the item vertically/horizontally align with specified above value in main-axis of flex container.

flexbox vs grid 