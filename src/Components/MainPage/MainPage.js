import React from 'react';
import ReactDOM from 'react-dom';
import "./MainPage.css";




function MainPage() {
    return (
    <>
     
        <div class="header">
        
        
            <div class="user">
         <img src="https://picsum.photos/200/300" alt=""/>
         <h3 class="name">asdfg</h3>
         <p class="post">front end developer</p>
         
     </div>
     
             <nav class="navbar">
            <ul>
                <li>
                   <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">about</a>
                 </li>
                 <li>
                    <a href="#education">education</a>
                 </li> 
                 <li>
                    <a href="#portfolio">portfolio</a>
                 </li> 
                 <li>
                    <a href="#contact">contact</a>
                 </li>
            </ul>
        </nav>
       
        <div id="menu" class="fas fa-bars"></div>
        
        

       
        </div>
        
        
        <div>
    <section class="home" id="home">
        <h3>Hı there</h3>
        <h1>I am <span>Gökçe lal</span></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta tempore minus dolore rem impedit officiis adipisci blanditiis, maxime repellendus?</p>
<a href="about"><button class="btn">about me<i class="fas fa-user"></i></button></a>
    </section>
    </div>
    <section class="about" id="about">
    <h1 class="heading">
        <span>about</span> me
    </h1>

    <div class="row">
        <div class="info">
            <h3><span> name :  </span> name surname </h3>
            <h3><span> age :  </span> 20 </h3>
            <h3><span> qualification :  </span> BMS </h3>
            <h3><span> post :  </span> front end developer </h3>
            <a href="#"><button class="btn">download CV <i class="fas fa-download"></i></button></a>
        </div>

        <div class="counter">
            <div class="box">
                <span> 2+ </span>
                <h3>years of experience</h3>
            </div>

            <div class="box">
                <span> 100+ </span>
                <h3>porject completed</h3>
            </div>


            <div class="box">
                <span> 430+ </span>
                <h3>happy clients</h3>
            </div>


        </div>
    </div>

</section>



<section class="education">
    <h1 class="heading">my<span> education</span></h1>
    <div class="box-container">
        <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2016</span>
        <h3>front end</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellat vero tempora pariatur dolorum odit earum eaque tempore laborum quas. Officia impedit aperiam qui corrupti laboriosam natus, repudiandae praesentium nostrum?</p>
        </div>

        <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2017</span>
            <h3>front end</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellat vero tempora pariatur dolorum odit earum eaque tempore laborum quas. Officia impedit aperiam qui corrupti laboriosam natus, repudiandae praesentium nostrum?</p>
            </div>


            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2018</span>
                <h3>front end</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellat vero tempora pariatur dolorum odit earum eaque tempore laborum quas. Officia impedit aperiam qui corrupti laboriosam natus, repudiandae praesentium nostrum?</p>
                </div>
    </div>
</section>                                  

<section class="contact" id="contacy">
    <h1 class="heading">
        <span>contact</span> me
    </h1>

    <div class="row">
        <div class="content">
            <h3 class="title"> contact info</h3>
            <div class="info">
                <h3><i class="fas fa-envelope">gokce@gmail.com</i> </h3>
                <h3><i class="fas fa-phone">555 444 33 22 </i> </h3>
                <h3><i class="fas fa-phone">123345674433</i> </h3>
                <h3><i class="fas fa-map-marker-alt">Ankara turkey</i> </h3>

            </div>
        </div>
        <form action="">
            <input type="text" placeholder="name" class="box"/>
            <input type="email" placeholder="email" class="box"/>
            <input type="text" placeholder="project" class="box"/>
            <textare name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textare>
            <button class="submit btn" >send <i class="fas fa-paper-plane"></i></button>
         </form>
    </div>
</section>
        
        
        
        
        </>




        

        


    );
}

export default MainPage