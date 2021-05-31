import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import brochersbanner from "../assets/images/brochers-banner.png";
import locationmarker from "../assets/images/location-marker.png";
import pdf from "../assets/images/pdf.png";
import video1 from "../assets/images/vid-1.jpg";
import video2 from "../assets/images/vid-2.jpg";
import video3 from "../assets/images/vid-3.jpg";
import video4 from "../assets/images/vid-4.jpg";
import play from "../assets/images/play.png";
import ChangeLocation from "../ChangeLocation/ChangeLocation";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import Carousel from 'react-bootstrap/Carousel';

const ResourceArizona = () => {
   const [pdfitems, setPdfItems] = useState(
      [
         {
            id: 'A',
            name:"Brochure (real estate transaction) w Example Contract",
            pdfname: pdf,
            pdfs: [{
               id: 'A1',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/FullbrochureAZrealtor-AHW.pdf",
            },
            {
               id: 'A2',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/Acclaimed-Home-Warranty-Price-Options-Realtors-AZ.pdf",
            },
            {
               id: 'A3',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            },
            {
               id: 'A4',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            }],
         },
          {
            id: 'B',
            name:"Realtors Price & Options",
            pdfname: pdf,
            pdfs: [{
               id: 'B1',
               pdflink: "https://image.shutterstock.com/image-photo/brown-dear-laying-on-grass-260nw-1763529434.jpg",
            },
            {
               id: 'B2',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/Acclaimed-Home-Warranty-Price-Options-Realtors-AZ.pdf",
            },
            {
               id: 'B3',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            },
            {
               id: 'B4',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            }],
         },
            {
            id: 'C',
            name:"Understanding Your Home Warranty",
            pdfname: pdf,
            pdfs: [{
               id: 'C1',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            },
            {
               id: 'C2',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/Acclaimed-Home-Warranty-Price-Options-Realtors-AZ.pdf",
            },
            {
               id: 'C3',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            },
            {
               id: 'C4',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/Acclaimed-Home-Warranty-Price-Guide-Consumer-AZ.pdf",
            }],
         },
         {
            id: 'D',
            name:"Homeowner Price & Options",
            pdfname: pdf,
            pdfs: [{
               id: 'D1',
               pdflink: "https://devsite.BcclBimedhw.com/wp-content/uploads/2020/03/FullbrochureAZrealtor-AHW.pdf",
            },
            {
               id: 'D2',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            },
            {
               id: 'D3',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf",
            },
            {
               id: 'D4',
               pdflink: "https://devsite.acclaimedhw.com/wp-content/uploads/2020/03/Acclaimed-Home-Warranty-Price-Guide-Consumer-AZ.pdf",
            }],
         }
      ]
   )
   console.log(pdfitems);
   const [isActive, setActive] = useState(false);
   const toggleClass = () => {
      setActive(true);
   };

   // pdf
   const [isPdf, setIsPdf] = useState(false);
   const showpdf = () => {
      setIsPdf(true);
   }

   const handleOk = () => {
      setIsPdf(false);
   };
   const handleCancel = () => {
      setIsPdf(false);
   };
   // Modal
   const [isModalVisible, setisModalVisible] = useState(false);
   const showModal = () => {
      setisModalVisible(true);
   };
   const handleOk1 = () => {
      setisModalVisible(false);
   };
   const handleCancel1 = () => {
      setisModalVisible(false);
   };
   // Modal2
   const [isModalVisible2, setIsModalVisible2] = useState(false);
   const showModal2 = () => {
      setIsModalVisible2(true);
   };
   const handleOk2 = () => {
      setIsModalVisible2(false);
   };
   const handleCancel2 = () => {
      setIsModalVisible2(false);
   };
   // Modal3
   const [isModalVisible3, setIsModalVisible3] = useState(false);
   const showModal3 = () => {
      setIsModalVisible3(true);
   };
   const handleOk3 = () => {
      setIsModalVisible3(false);
   };
   const handleCancel3 = () => {
      setIsModalVisible3(false);
   };

   // Modal4
   const [isModalVisible4, setIsModalVisible4] = useState(false);
   const showModal4 = () => {
      setIsModalVisible4(true);
   };
   const handleOk4 = () => {
      setIsModalVisible4(false);
   };
   const handleCancel4 = () => {
      setIsModalVisible4(false);
   };

   return (
      <>
         <Helmet>
            <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
            <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
         </Helmet>
         <div className="home_page broshure-pg">
            <div onMouseLeave={() => setActive(false)}>
               {isActive ? <ChangeLocation /> : null}
            </div>
            <div className="top_img">
               <img src={brochersbanner} alt=" brochers-banner" />
            </div>
            <div className="brochures-text">
               <h1>Brochures</h1>
            </div>
            <section className="change-location-header">
               <div className="inner">
                  <span className="big-upper">Arizona Resources</span>
                  <span className="location" onClick={toggleClass}>
                     Change Location
               <img src={locationmarker} alt=" brochers-banner" className="locationmarker" /></span>
               </div>
            </section>
            <section className="documents-light-back">
               <div className="container">
                  <h2>Documents</h2>
                  <div className="doc-cont">
                     {
                        pdfitems.map((item) => {
                           return (
                              <div className="doc" key={item.id}>
                                 <i className="achi-pdf">
                                    <img src={item.pdfname} alt="pdf" className="pdf_img" onClick={showpdf} /></i>
                                 <p className="name">{item.name}</p>
                                 <Modal style={{ width: "680px", height: "400px" }} onOk={handleOk} visible={isPdf}
                                    onCancel={handleCancel}
                                    okButtonProps={{ disabled: true }}
                                    cancelButtonProps={{ disabled: true }}>
                                    <Carousel fade={true} interval={null}>
                                       {item.pdfs.map((items) => {
                                          return (
                                             <Carousel.Item key={items.id}>
                                                <iframe className="pdf_iframe" src={items.pdflink}></iframe>
                                             </Carousel.Item>
                                          );
                                       })}
                                    </Carousel>
                                 </Modal>
                              </div>
                           );
                        })}
                  </div>
               </div>
            </section>
            <section className="videos-light-back">
               <div className="container">
                  <h2>videos</h2>
                  <div className="vid-cont">
                     <div className="video">
                        <div className="img-cont">
                           <img src={video1} alt="video1" className="video1" />
                           <img src={play} alt="play" className="play" onClick={showModal}
                              data-toggle="modal"
                              data-target="#largeModal"/>
                           <Modal style={{ width: "680px", height: "400px" }} visible={isModalVisible} onOk={handleOk1}
                              onCancel={handleCancel1}
                              okButtonProps={{ disabled: true }}
                              cancelButtonProps={{ disabled: true }}>
                              <Carousel fade={true} interval={null}>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe data-interval="false" style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://www.youtube.com/embed/1mzkbJSIMHc"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://youtube.com/embed/q7-GQn3-ZLs"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://youtube.com/embed/iG5o3j7P7I4"></iframe>
                                    </div>
                                 </Carousel.Item>
                              </Carousel>
                           </Modal>
                           <p className="name">Why Choose Acclaimed?</p>
                        </div>
                     </div>
                     {/* <div className="video">
                        <div className="img-cont">
                           <img src={video2} alt="video2" />
                           <img src={play} alt="play" className="play" onClick={showModal2} />
                           <Modal style={{ width: "680px", height: "400px" }} visible={isModalVisible2} onOk={handleOk2}
                              onCancel={handleCancel2}
                              okButtonProps={{ disabled: true }}
                              cancelButtonProps={{ disabled: true }}>
                              <Carousel fade={true} interval={null}>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://www.youtube.com/embed/QsmndywTysA"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://www.youtube.com/embed/1mzkbJSIMHc"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://youtube.com/embed/iG5o3j7P7I4"></iframe>
                                    </div>
                                 </Carousel.Item>
                              </Carousel>
                           </Modal>
                           <p className="name">How To Use Our New Website</p>
                        </div>
                     </div> */}
                     {/* <div className="video">
                        <div className="img-cont">
                           <img src={video3} alt="video3" />
                           <img src={play} alt="play" className="play" onClick={showModal3} />
                           <Modal style={{ width: "680px", height: "400px" }} visible={isModalVisible3} onOk={handleOk3}
                              onCancel={handleCancel3}
                              okButtonProps={{ disabled: true }}
                              cancelButtonProps={{ disabled: true }}>
                              <Carousel fade={true} interval={null}>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://www.youtube.com/embed/q7-GQn3-ZLs"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://www.youtube.com/embed/1mzkbJSIMHc"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://youtube.com/embed/iG5o3j7P7I4"></iframe>
                                    </div>
                                 </Carousel.Item>
                              </Carousel>
                           </Modal>
                           <p className="name">Donating to Family Promise</p>
                        </div>
                     </div> */}
                     {/* <div className="video">
                        <div className="img-cont">
                           <img src={video4} alt="video1" className="video4" />
                           <img src={play} alt="play" className="play" onClick={showModal4} />
                           <Modal style={{ width: "680px", height: "400px" }} visible={isModalVisible4} onOk={handleOk4}
                              onCancel={handleCancel4}
                              okButtonProps={{ disabled: true }}
                              cancelButtonProps={{ disabled: true }}>
                              <Carousel fade={true} interval={null}>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://www.youtube.com/embed/iG5o3j7P7I4"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://www.youtube.com/embed/1mzkbJSIMHc"></iframe>
                                    </div>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <div className="content">
                                       <iframe style={{ width: "680px", height: "400px", border: "none", background: "black" }} src="https://youtube.com/embed/iG5o3j7P7I4"></iframe>
                                    </div>
                                 </Carousel.Item>
                              </Carousel>
                           </Modal>
                           <p className="name">Live you Life ... Don't Fix It! </p>
                        </div>
                     </div> */}
                  </div>
               </div>
            </section>
         </div>
      </>
   )
};
export default ResourceArizona;