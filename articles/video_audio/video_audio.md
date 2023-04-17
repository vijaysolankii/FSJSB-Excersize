Video
    > The <video> tag allows to embed video very easily on webpage and it introduced in HTML5.
    it defined as "
    <video>
        <source src="media/path" type="video/mp4">
        <p>this video is not supported</p>
    </video>
    " 

    In above video tag we defined source tag which is responsible to load video file in webpage with help of src attribute apart from that we can also define type of that video 

    src : Attribute used to provide path of video.  
        e.g. src = "disk/media/filename"
    tpye : Attribute used to provide media type based upon src tag.
        e.g. type="video/mp4" 
             type="video/ogg" 
             type="video/webm" 


    In Video we can also add additional attributes like controls,muted,autoplay,loop,height,width,poster

    controls : It provide the controls for the video like play,pause,full screen,audio control,video speed and many others
    muted : This attribute used to mute the video 
    autoplay : This used to autoplay video when webpage is loaded. 
               Note : it can't run without loop and muted attribute. 
    loop : This used play video infinite time when web page loaded
    height : This attribute specify height of video. 
    width : This attribute specify width of video. 
    poster : This attribute is special. it provide image before video play. it is intended to be used for splash screen or advertising screen
    




Audio
    > The <audio> tag is same as video element but there is minor changes. it also introduced in html5
    it defined as "
        <audio>
            <source src="media/path" type="audio/mp4">
            <p>this audio is not supported</p>
        </audio>
    "

    audio tag only provide audio not any graphical representation

    it also has same attributes src which do same same work like video  

    In audio tag we have the control and preload attributes

    https://codepen.io/stevef/pen/KwPgwa?editors=1010
    