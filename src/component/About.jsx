import React, { Component } from "react";
import "./AboutStyles.css";
class About extends Component {
  render() {
    return (
      <>
        <section id="about">
          <div class=" row mt-5 ">
            <div class="col-lg-1 col-md-1 col-sm-1"></div>
            <div class=" col-lg-3 col-md-3 col-sm-11" style={{marginRight:20, marginLeft:20}}>
              <div class=" card card-bg-cl mb-5">
                <img src="1.jpg" alt="" />
                <div class=" card-body text-center">
                  <h2 class="  text-center text-white font-weight-bold mt-3 mb-3">
                    Our Vision
                  </h2>
                  <p class="text-center text-black">
                    Software is a generic term used to refer to
                    applications, scripts and programs that run on a
                    device. It can be thought of as the variable part of a
                    computer, while hardware is the invariable part. The
                    two main categories of software are application
                    software and system software.
                  </p>
                  <a href="/"> Read More</a>
                </div>
              </div>
            </div>
            <div class=" col-lg-3 col-md-3 col-sm-11 " style={{marginRight:20, marginLeft:20}}>
              <div class=" card card-bg-cl  mb-5 ">
                <img src="2.jpg" alt="" />
                <div class=" card-body text-center">
                  <h2 class=" text-center text-white font-weight-bold mt-3 mb-3">
                    Our Mission
                  </h2>
                  <p class="text-center text-black">
                    Software is a generic term used to refer to
                    applications, scripts and programs that run on a
                    device. It can be thought of as the variable part of a
                    computer, while hardware is the invariable part. The
                    two main categories of software are application
                    software and system software.
                  </p>
                  <a href="/"> Read More</a>
                </div>
              </div>
            </div>
            <div class=" col-lg-3 col-md-3  col-sm-11 " style={{marginRight:20, marginLeft:20}}>
              <div class=" card  card-bg-cl mb-5 ">
                <img src="3.jpg" alt="" />
                <div class=" card-body text-center">
                  <h2 class=" text-center text-white font-weight-bold mt-3 mb-3">
                    Our Goals
                  </h2>
                  <p class="text-center text-black">
                    {" "}
                    Software is a generic term used to refer to
                    applications, scripts and programs that run on a
                    device. It can be thought of as the variable part of a
                    computer, while hardware is the invariable part. The
                    two main categories of software are application
                    software and system software.
                  </p>
                  <a href="/"> Read More</a>
                </div>
              </div>
            </div>
          </div>
        
        <div class=" row ">
          <div class=" row mt-5 ">
            <div class="col-lg-1 col-md-1 col-sm-1"></div>

            <div class=" col-lg-10 col-md-10  col-sm-10">
              <div class=" card  card-bg-cl mb-5 ">
                <div className="card-header">
                  <h1 className="card-title text-center">About Us</h1>
                </div>
                <div class=" card-body text-center">
                  <p>
                    As an Android Developer, I am passionate about
                    crafting innovative mobile experiences that seamlessly
                    integrate functionality and aesthetics. With a solid
                    background in software development and a specific
                    focus on Android platforms, I strive to create
                    applications that not only meet but exceed user
                    expectations. My journey into Android development
                    began with a fascination for the versatility and
                    widespread adoption of the Android operating system.
                    Since then, I have honed my skills in Java and Kotlin,
                    mastering the intricacies of Android app development.
                    From designing elegant user interfaces to implementing
                    complex functionalities, I am dedicated to delivering
                    robust and user-friendly applications. In addition to
                    technical proficiency, I prioritize staying updated
                    with the latest trends and best practices in Android
                    development. Whether it's embracing new frameworks,
                    adopting emerging design patterns, or optimizing for
                    performance and security, I am committed to delivering
                    cutting-edge solutions that resonate with modern
                    users.
                  </p>
                  <p>
                    Collaboration is at the core of my approach to
                    development. I thrive in dynamic team environments
                    where ideas are shared, challenges are tackled
                    collectively, and innovation flourishes. By leveraging
                    my communication skills and fostering a collaborative
                    spirit, I contribute to cohesive development cycles
                    that result in exceptional Android applications.
                    Beyond coding, I am passionate about user experience
                    design and user-centric development methodologies. I
                    believe in empathizing with users, understanding their
                    needs and pain points, and crafting solutions that
                    enrich their lives. From conducting usability testing
                    to iterating based on feedback, I am dedicated to
                    creating meaningful experiences that resonate with
                    users on a profound level. In today's fast-paced
                    digital landscape, I recognize the importance of
                    adaptability and continuous learning. I am always
                    eager to explore new technologies, expand my skill
                    set, and embrace challenges that push the boundaries
                    of what's possible in Android development. Ultimately,
                    my goal as an Android Developer is to leverage my
                    expertise and creativity to build impactful
                    applications that enhance the lives of users
                    worldwide. Whether it's through solving complex
                    problems, delivering intuitive user experiences, or
                    pushing the boundaries of innovation, I am committed
                    to making a positive difference in the world of mobile
                    technology.
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-1 col-md-1 col-sm-1"></div> */}
          </div>
        </div>
      </section >
      </>
    );
  }
}

export default About;
