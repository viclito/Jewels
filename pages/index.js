// import "../css/home.css";
import logo from "@/public/images/logo.png";
import bis from "@/public/images/bis.png";
import best1 from "@/public/images/best1.jpg";
import best2 from "@/public/images/best2.jpg";
import best3 from "@/public/images/best3.jpg";
import playstore from "@/public/images/playstore.png";
import appstore from "@/public/images/app-store.png";
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import youtube from "@/public/images/youtube.png";
import instagram from "@/public/images/instagram.png";

import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";


import {FaStar} from "react-icons/fa"
import {motion,  useTransform, useScroll} from "framer-motion"



import data from "@/public/data/landpage.json";
import video from "@/public/data/testimonial.json";
import newlaunch from "@/public/data/newlaunch.json";
import collection from "@/public/data/collection.json";
import collection2 from "@/public/data/collection2.json";
import promise from "@/public/data/promises.json";




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-47%"]);

  return (
    <div>
      <Head>
        <title>Mookuthi</title>
      </Head>
      
      {/* navbar starts */}

      <div className="head">
        <div className="innerhead">
          <div className="lists">
            <div className="list">GOLD</div>
            <div className="list">SILVER</div>
            <div className="list">DIAMOND</div>
            <div className="list">SCHEMES</div>
          </div>
          <div className="logo">
            <Image src={logo} alt="" height={50} />
          </div>
          <div className="lists">
            <div className="list">LOG IN</div>
            <div className="list">SEARCH</div>
            <div className="list">CART</div>
          </div>
        </div>
      </div>

      {/* navbar ends */}

      {/* landpage starts */}

      <div className="container">
        <div className="innercontainer">
          <div className="left">
            <div className="bgimg"></div>
            <div className="text">
              
                  <h1>Grand Gold Ring Sale</h1>
              

              <Layout><h2>Designed Just For You</h2></Layout>
              <p>To make your day special ,With your special one</p>
              <div className="assurence">
                <h4>WITH</h4>


                <div className="img"><Image src={bis} alt="" width={200} /></div>
                

                <h4>ASSURANCE</h4>
              </div>
              <div className="btn">
                <motion.button initial={{opacity : 0, x: -70}}
              animate={{ opacity: 1 ,x:0}}
              transition={{ type:"tween", duration:1 ,delay:.6}}>Select</motion.button>
                <motion.p initial={{opacity : 0, x: -140, scale:0}}
              animate={{ opacity: 1 ,x:0 ,scale:1}}
              transition={{ type:"spring", duration:.4 ,delay:1.5 ,bounce:2}}> ---Your precious memory</motion.p>
              </div>
            </div>
          </div>

          <>
          <div className="right">
            <Swiper
              slidesPerView={1}
              loop={true}
              spaceBetween={0}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="scroll">
                    <img src={item.img} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </>
        </div>
      </div>

      {/* landpage ends */}

      {/* bestsellers start */}

      <div className="bestseller">
        <div className="innerbest">
          <div className="title">Our Best Sellers</div>
          <div className="wholebox">

            <Layout>
              <div className="outerbox">
                <div className="boxes">
                  <div className="box one">
                    <Image src={best1} alt="" fill />
                  </div>
                  <h1>Necklas</h1>
                  <p>Worthy thing to wear in a worthy place to make the place more worthy</p>
                </div>
              </div>
            </Layout>

            <Layout>
              <div className="outerbox">
                <div className="boxes">
                  <h1>Necklas</h1>
                  <p>Worthy thing to wear in a worthy place to make the place more worthy</p>
                  <div className="box two">
                    <Image src={best2} alt="" fill />

                  </div>
                  
                </div>
              </div>
            </Layout>

            <Layout>
              <div className="outerbox">
                <div className="boxes">
                  <div className="box three">
                    <Image src={best3} alt="" fill />
                  </div>
                  <h1>Necklas</h1>
                    <p>Worthy thing to wear in a worthy place to make the place more worthy</p>
                </div>
              </div>
            </Layout>


          </div>
        </div>
      </div>


      {/* testimonial page */}

      <div className="testimonial">
        <div className="innertest">
          <div className="title">
            <h1>Testimonials</h1>
          </div>

          <Layout>
            <div className="boxes">
              {video.map((item,i)=>(
                <div className={item.type} key={i}>
                  <video src={item.video} controls/>
                </div>
              ))}
            </div>
          </Layout>
          
        </div>
      </div>


      {/* newlaunches */}


      <div className="newlaunch">
        <div className="newinner">
          <div className="title">
            NEW LAUNCHES
          </div>
          <div className="boxes">
            {newlaunch.map((item,i)=>(
              
              <div className="box" key={i}>
                <Layout>
                <div className="img"><img src={item.img} alt="" width={200} height={200}/></div>
                <h1>{item.title}</h1>
                <div className="stars">
                  {Array.from({length : item.star}).map((_,j)=>(
                     <FaStar key={j} color="gold"/>
                  ))} 
                  {/* <span>{Array.from({ length: Math.min(item.star, 5) }).map((_, j) => (
              <FaStar key={j} />
            ))}</span> */}
                  <span>
                    {item.star<5 && Array.from({length : 5 - item.star}).map((_,j)=>(
                     <FaStar key={j} color="silver"/>
                  ))} 
                  </span>
                   <span> | {item.reviews}</span>
                  </div>
                  <p>{item.discription}</p>
                  <div className="price">
                    <h1>&#8377; {item.price}</h1></div>
                  <button>Shop Now</button>
                  </Layout>
              </div>
              
            ))}
          </div>
        </div>
      </div>



      {/* Collections */}

      <div className="collectionsec" ref={targetRef}>
        <div className="collection">
          <motion.div  style={{ x }} className="innercollection">
          
          <div className="collection1">
                <div className="inner">
                  <div className="left">
                      <h1>Our Grand <br/> Collections</h1> 
                      <p>The Unique Piece which makes u Unique</p>
                  </div>
                  <div className="right">
                    <div className="boxes">
                      {
                        collection.map((item , i)=>(
                          <div className="box" key={i}>
                            <div className="img">
                              <Image src={item.img} alt="" width={180} height={180}/>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
          </div>

          <div className="collection2">
            <div className="inner">
              <div className="boxes">
                {collection2.map((item,i)=>(
                  <div className="box" key={i}>
                    <Image alt="" src={item.img} width={170} height={170}/>
                  </div>
                ))}
              </div>
            </div>

          </div>

          </motion.div>
          
          
        </div>
      </div>






      {/* Promises */}



      <div className="promises">
        <div className="inner">
          <div className="lists">
            {promise.map((item, i)=>(
              <div className="list" key={i}>
                <div className="img">
                  <Image src={item.logo} alt="" height={30} width={30}/>
                </div>
                <h1>{item.content}</h1>
              </div>
            ))}
            </div>
        </div>
      </div>






      {/* Footer */}

      <div className="footer">
        <div className="inner">
          <div className="lists">
            <div className="list">
              <h4>Download Our App</h4>
              <div className="img">
                <Image src={ playstore } alt="" height={50} width={200}/>
              </div>
              <div className="img">
                <Image src={appstore } alt="" height={50} width={200}/>
              </div>
              
            </div>
            <div className="list">
              <h4>Information</h4>
              <p>Privacy policy</p>
              <p>Contact Us</p>
              <p>Careers</p>
              <p>Blogs</p>
            </div>

            <div className="list">
              <h4>Contact Us</h4>
              <h5><span>Address : </span> 33/13, Vijaya Raghava Rd, Parthasarathi Puram, <br /> T. Nagar, Chennai, Tamil Nadu 600017</h5>
              <h5><span>E mail : </span> info@lalithaajewellery.com</h5>
              <h5><span>Ph No : </span>1234567890</h5>
              <div className="logos">
                <Image src={ youtube } alt="" height={25} width={25}/>
                <Image src={ twitter } alt="" height={25} width={25}/>
                <Image src={ facebook } alt="" height={25} width={25}/>
                <Image src={ instagram } alt="" height={25} width={25}/>
              </div>
            </div>

          </div>
        </div>
      </div>

      

    </div>
  );
}
