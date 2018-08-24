window.onload=function () {
    let navigation=document.getElementsByClassName("navigation")[0];
    let navigationBox=document.getElementsByClassName("navigationBox");
    let lis=navigation.getElementsByTagName("li");
    for (let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function(){
            navigationBox[i].style.display="block";
        }
        lis[i].onmouseleave=function(){
            navigationBox[i].style.display="none";
        }
    }
    let car=document.getElementsByClassName("car")[0];
    let carBox=document.getElementsByClassName("carBox")[0];
    car.onmouseenter=function(){
        carBox.style.height="98px";
        carBox.style.boxShadow="0 2px 2px 2px rgba(0,0,0,0.1)";

    }
    car.onmouseleave=function(){
        carBox.style.height="0";
        carBox.style.boxShadow="none";
    }



    let appliance_header_right=document.getElementsByClassName("appliance_header_right")[0];
    let appliance_bodyBox=document.getElementsByClassName("appliance_bodyBox");
    function xxk(xxkname){
        let lis1=xxkname.getElementsByTagName("li");
        for (let i=0;i<lis1.length;i++){
            lis1[i].onmouseenter=function(){
                for(let j=0;j<lis1.length;j++){
                    appliance_bodyBox[j].style.zIndex="5";
                }
                appliance_bodyBox[i].style.zIndex="10";
            }
        }
    }
    xxk(appliance_header_right);


    let banner=document.getElementsByClassName("banner")[0];
    console.log(banner);
    let bannerImg=document.getElementsByClassName("banner_img")[0];
    console.log(bannerImg);
    let lis2=bannerImg.getElementsByTagName("li");
    console.log(lis2);
    let bannerRound=document.getElementsByClassName("banner_round")[0];
    let lis3=bannerRound.getElementsByTagName("li");
    console.log(lis3);
    let btnleft=document.getElementsByClassName("btnleft")[0];
    let btnright=document.getElementsByClassName("btnright")[0];
    console.log(btnright, btnleft);



    let t=setInterval(sjhs,1000);
    let num=0;
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(sjhs,1000);
    }
    function sjhs(){
        num++;
        if(num==lis2.length){
            num=0;
        }
        for (let i=0;i<lis2.length;i++){
            lis2[i].style.zIndex="5";
            lis3[i].style.background="#92897c";
        }
        lis2[num].style.zIndex="10";
        lis3[num].style.background="#fff";
    }
    function sjhs1(){
        num--;
        if(num<0){
            num=lis2.length-1;
        }
        for (let i=0;i<lis2.length;i++){
            lis2[i].style.zIndex="5";
            lis3[i].style.background="#92897c";
        }
        lis2[num].style.zIndex="10";
        lis3[num].style.background="#fff";

    }

    btnright.onclick=function(){
        sjhs();
    }
    btnleft.onclick=function(){
        sjhs1();
    }

    for(let i=0;i<lis3.length;i++){
        lis3[i].onclick=function () {
            for (let j=0;j<lis2.length;j++){
                lis2[j].style.zIndex="5";
                lis3[j].style.background="#92897c";
            }
            lis2[i].style.zIndex="10";
            lis3[i].style.background="#fff";
            num=i;
        }
    }

}

    //console.log(lis1,appliance_bodyBox);
