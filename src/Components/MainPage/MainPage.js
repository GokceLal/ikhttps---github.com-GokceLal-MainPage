import React from 'react';
import ReactDOM from 'react-dom';
import "./MainPage.css";




function MainPage() {
    return (
    <>
     
        <div class="header">
        
        
            <div class="user">
         <img src="https://picsum.photos/200/300" alt=""/>
         <h3 class="name">Human Recorcues</h3>
         <p class="post">IK</p>
         
     </div>
     
             <nav class="navbar">
            <ul>
                <li>
                   <a href="#Information">Information</a>
                </li>
                <li>
                    <a href="#WorkingStaff">Working Staff</a>
                 </li>
                 <li>
                    <a href="#education">education</a>
                 </li> 
                 <li>
                    <a href="#portfolio">portfolio</a>
                 </li> 
                 <li>
                    <a href="#contact">Contact</a>
                 </li>
            </ul>
        </nav>
       
        <div id="menu" class="fas fa-bars"></div>
        
        

       
        </div>
        
        
        <div>
    <section class="Information" id="Information">
        <h3>Hı there</h3>
        <h1>Information <span>Company</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt voluptates nobis, quibusdam earum maxime rerum exercitationem nulla reiciendis temporibus suscipit molestiae ducimus tenetur voluptatem? Repellat sunt placeat neque illum.
Nemo minus ea rerum dolore quasi modi aliquam nam quas expedita eius. Velit, mollitia dolor, ipsam adipisci esse reiciendis vitae quae exercitationem itaque excepturi pariatur. Debitis rerum laboriosam sint corporis.
Omnis nisi eos explicabo beatae sed alias sunt quisquam. Blanditiis nam qui incidunt magni itaque sed cum aspernatur earum, repudiandae ipsum vitae praesentium soluta distinctio doloremque tempora doloribus possimus labore!
Cupiditate, odit dolorem impedit veritatis quam praesentium debitis magnam laudantium voluptatum non ab rem, accusantium minima numquam sint dignissimos facere dolor. At aliquid eaque amet doloremque, expedita voluptatibus iure! Adipisci.
Laboriosam, aut ipsum! Molestias delectus dolorum accusantium necessitatibus illum eligendi error veritatis, quos aliquam, voluptate fugiat architecto. Eum ab rerum provident, placeat magnam consectetur, accusamus ratione laboriosam adipisci itaque repellat?</p>
<a href="about"><button class="btn">More information<i class="fas fa-user"></i></button></a>
    </section>
    </div>
    <section class="about" id="about">
    <h1 class="heading">
        <span>Working</span> Staff
    </h1>

    <div class="row">
        <div class="info">
            <h3><span> name :  </span> name surname </h3>
            <h3><span> age :  </span> 20 </h3>
            <h3><span> qualification :  </span> BMS </h3>
            <h3><span> post :  </span> front end developer </h3>
            <a href="#"><button class="btn">Aktifleştir <i class="fas fa-download"></i></button></a>
            <a href="#"><button class="btn">Pasifleştir <i class="fas fa-download"></i></button></a>
        </div>

        <div class="counter">
            <div class="box">
                
                <a href="#"><button class="btn">Kişi ekle  <i class="fas fa-download"></i></button></a>
            </div>
            
            <div class="box">
            <a href="#"><button class="btn">Güncelle  <i class="fas fa-download"></i></button></a>
            </div>


            <div class="box">
            <a href="#"><button class="btn">Sil <i class="fas fa-download"></i></button></a>
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
        
        <span>Contact</span> Company
    </h1>

    <div class="row">
        <div class="content">
            <h3 class="title"> contact info</h3>
            <div class="info">
                <h3><i class="fas fa-envelope">humanrecorcues@gmail.com</i> </h3>
                <h3><i class="fas fa-phone">555 444 33 22 </i> </h3>
                <h3><i class="fas fa-phone">123345674433</i> </h3>
                <h3><i class="fas fa-map-marker-alt">Ankara turkey</i> </h3>

            </div>
        </div>
        <form action="">
            <input type="text" placeholder="name and surname" class="box"/>
            <input type="email" placeholder="e-mail" class="box"/>
            <input type="text" placeholder="Topic" class="box"/>
            <textare name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textare>
            
            <button class="submit btn" >send <i class="fas fa-paper-plane"></i></button>
         </form>
    </div>
</section>
        
        
        
        
        </>




        

        


    );
}

export default MainPage