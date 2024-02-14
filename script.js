function timelineOne(){
    var tl = gsap.timeline({scrollTrigger :{
        trigger:"#home",
        starts:"top top",
        pin:true,
        scrub:2,
    
    }});
    tl
    
    .to(" #overlay #center",{
        left:"50%",
        ease:Power1,
        
    },)
    .to(" #homeimg img",{
        scale: 1.75,
        ease:Power1,
        
    },"same")
    .to(" #homeimg img",{
        scale: 1.33,
        ease:Power1,
        
    },"samesame")
    .to(" #homeimg img",{
        scale: 1,
        ease:Power1,
        
    },"same same")
    
    .to(" #circle #btm img",{
        rotate:"-180deg",
        ease:Power1,
        stagger: .02,
    },"same")
     
    .to("#circle",{
        scale:.2,
        ease:Power1,
    },"same")
    .to("#smcircle",{
        scale:.002,
        ease:Power1,
    },"samesame")
    .to("#circle",{
        scale:.0002,
        ease:Power1,
    },"samesame")
    .to("#overlay #imagecontainer img",{
        scale: 0,
        delay:.09,
        ease:Power1,
    },"same")
     
    .to("#overlay span",{
        opacity:0,
        ease:Power1,
    },"same")
    .to("#overlay #blue",{
        top:"50%",
        width:"20vh",
        height:"20vh",
        ease:Power1,
    },"same")
    .to("#overlay #blue",{
        opacity:0,
        ease:Power1,
    },"samesame")
    .to("#overlay h1",{
        top:"110%",
        ease:Power1,
    },"same")
    
    .to("#overlay h2",{
        top:"70%",
        rotate: 0,
        ease:Power1,
    },"samesame")
    .to("#card",{
        top:"0%",
        delay:.5,
        ease:Power1,
    },"samesame")
    .to("#rightcard",{
        right:"3%",
        ease:Power1,
    },"samesame")
    .to("#card",{
        top:"-70%",
        delay:.9,
        ease:Power1,
    },"same same")
    .to("#rightcard",{
        opacity:0,
        ease:Power1,
    },"same same")


}
   



   function timelineTwo(){

    gsap.set("#soverlay #stop .circle",{top:"150%",scale:.5})


    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            start:"top top",
            pin:true,
            scrub:2,
        }
    })

    tl2
    .to("#soverlay .circle",{
        scale:1,
        top:"50%",
        ease:Power1,
        stagger:.1,
    })
    .to("#soverlay .circle",{
        top:"50%",
        left:"50%",
        ease:Power1,
        
    })
    .to("#soverlay .circle",{
         scale:.5,
        ease:Power1,
        
    })
    .to("#soverlay .circle",{
        scale: 10,
       ease:Power1,
       
   })

   .to("#soverlay h1",{
    left: 0,
   ease:Power1,
   
},`same`)
.to("#soverlay h1",{
    left: "-110%",
    delay: .5,
   ease:Power1,
   
},`same`)
.to("#soverlay .circle",{
    background:`linear-gradient(to right,rgb(16, 82, 158),rgba(15, 220, 168, 0.623), rgba(153, 189, 168, 0.623))`,
   ease:Power1,
   
},`same`)

.to("#smbottom h3:nth-child(1)",{
    opacity: 0,
    delay:".01",
   ease:Power1,
   
},`same`)

.to("#smbottom h3:nth-child(2)",{
    opacity: 1,
    delay:.5,
   ease:Power1,
   
},`same`)

.to("#smbottom #number h4:nth-child(1)",{
    top:"-100%",
   ease:Power1,
   
},`same`)


.to("#smbottom #number h4:nth-child(2)",{
    opacity:1,
    delay:.1,
   ease:Power1,
   
},`same`)
.to("#smbottom #number h4:nth-child(2)",{
    top:"-100%",
   ease:Power1,
   
},)
.to("#smbottom #number h4:nth-child(3)",{
    opacity: 1,
    delay:"-.1",
   ease:Power1,
   
},)
.to("#slide",{
    left:"5%",
   ease:Expo.expoinOut,
   delay:.5,
},)

.to("#stop .box",{
    top:"0%",
    stagger:.1,
   ease:Power1,
   
},)

 

.to("#stop #kuchhu",{
    backgroundColor:"#dadada",
    opacity:1,
    delay:1,
   ease:Power1,
   
},)
 
.to("#stop #satter1",{
    left:"-10%",
    opacity:1,
   ease:Power1,
   
},)
  
.to("#stop #satter2",{
    left:"-10%",
    opacity:1,
   ease:Power1,
   
},)
 



   }




timelineOne();
 timelineTwo();