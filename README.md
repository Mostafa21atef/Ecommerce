# Ecommerce-Website-master
Simple E-commerce website using HTML, CSS and JAVASCRIPT

## UI
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ecommerce Responsive full Website</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap"
      rel="stylesheet"/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
    />
  </head>
  <body>
    <header>
      <a href="#" class="logo"><img src="e-comerce.jpeg" alt="" /></a>
      <ul class="navmenu">
        <li><a href="#">Home</a></li>
        <li><a href="#trending">Shop</a></li>
        <li><a href="#trending">Products</a></li> 
        <li><a href="#reviews">reviews</a></li>
        <li><a href="#Updates">Updates</a></li>
      </ul>
      <div class="nav-icon">
        <a href="#"><i class="bx bx-search"></i></a>
        <a href="registration.html"><i class="bx bx-user"></i></a>
        <a href="#"><i class="bx bx-cart"></i></a>
        <a href="registration.html" class="logout">LogOut</a>
      </div>
    </header>
    <section class="main-home">
      <div class="main-text">
        <h5>Winter Collection</h5>
        <h1>New Winter <br />Collection</h1>
        <p>There's Nothing like Trend</p>
        <a href="#" class="main-btn"
          >Shop Now<i class="bx bx-right-arrow-alt"></i
        ></a>
      </div>
      <div class="down-arrow">
        <a href="#foooter" class="down"
          ><i class="bx bx-down-arrow-alt"></i
        ></a>
      </div>
    </section>
    <section class="trending-product" id="trending">
      <div class="center-text">
        <h2>Our Trending <span>Products</span></h2>
      </div>
      <div class="products">
        <div class="row">
          <img src="./images/1.jpg" alt="" />
          <div class="product-text">
            <h5>Sale</h5>
          </div>
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Half Running Set</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
        <div class="row">
          <img src="./images/2.jpg" alt="" />
          <div class="product-text">
            <h5>New</h5>
          </div>
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Formal Men Lowers</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
        <div class="row">
          <img src="./images/3.jpg" alt="" />
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Half Running Suit</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
        <div class="row">
          <img src="./images/4.jpg" alt="" />
          <div class="product-text">
            <h5>Hot</h5>
          </div>
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Half Fancy Lady Dress</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
        <div class="row">
          <img src="./images/5.jpg" alt="" />
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Flix Flox Jeans</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
        <div class="row">
          <img src="./images/6.jpg" alt="" />
          <div class="product-text">
            <h5>Hot</h5>
          </div>
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Fancy Salwa Suits</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
        <div class="row">
          <img src="./images/7.jpg" alt="" />
          <div class="product-text">
            <h5>Sale</h5>
          </div>
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Printed Straight Kurta</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
        <div class="row">
          <img src="./images/8.jpg" alt="" />
          <div class="product-text">
            <h5>Sale</h5>
          </div>
          <div class="heart-icon">
            <i class="bx bx-heart"></i>
          </div>
          <div class="rating">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          <div class="price">
            <h4>Collot Full Dress</h4>
            <p>$99 - $129</p>
          </div>
          <button class="bttn">add to cart</button>
        </div>
      </div>
    </section>
    <!--Clent-Review-section-->
    <section class="client-reviews" id="reviews">
      <div class="reviews">
        <h3>Client Reviews</h3>
        <img src="./images/team-1.jpg" alt="">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Veniam nihil temporibus <br> eos minima sapiente minus laboriosam quod modi 
           illo accusamus, repellendus <br> possimus optio debitis. Non sunt illum odit? 
           Quos, odit!</p>
           <h2>Mark Jevenue</h2>
           <p>CEO of Addle</p>
      </div>
    </section>
    <!--update-news-section-->
    <section class="update-news">
      <div class="up-center-text">
        <h2>New Updates</h2>
      </div>
      <div class="update-cart">
        <div class="cart">
        <img src="./images/bl-1.png" alt="">
        <h5>23 Jan 2023</h5>
        <h4>Let's Start bring sale on this summer vacation.</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Magni fugiat fugit illum saepe, reprehenderit commodi atque accusantium
           amet veritatis earum accusamus
        </p>
            <h6>Continue Reading..</h6>
          </div>
          <div class="cart">
            <img src="./images/bl-2.png" alt="">
            <h5>23 Jan 2023</h5>
            <h4>Let's Start bring sale on this summer vacation.</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Magni fugiat fugit illum saepe, reprehenderit commodi atque accusantium 
              amet veritatis earum accusamus
            </p>
                <h6>Continue Reading..</h6>
              </div>
              <div class="cart">
                <img src="./images/bl-3.png" alt="">
                <h5>23 Jan 2023</h5>
                <h4>Let's Start bring sales on this summer vacation.</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Magni fugiat fugit illum saepe,reprehenderit commodi atque
                   accusantium amet veritatis earum accusamus
                </p>
                    <h6><b>Continue Reading..</b></h6>
              </div>
      </div>
    </section>
    <!--contact-section-->
    <section class="contact" id="foooter">
      <div class="contact-info">
        <div class="first-info">
          <img src="./images/logo.png" alt="">
          <p>+233 543 02 8885</p>
          <p>User123@gmail.com</p>
          <div class="social-icon">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-youtube'></i></a>
            <a href="#"><i class='bx bxl-linkedin' ></i></a>
          </div>
        </div>
          <div class="second-info">
            <h4>Support</h4>
            <p>Contact us</p>
            <p>About Page</p>
            <p>Site Guide</p>
            <p>Shopping and Returns</p>
            <p>Privacy</p>
          </div>
          <div class="third-info">
            <h4>Shop</h4>
            <p>Men's Shopping</p>
            <p>Women's Shopping</p>
            <p>Kid's Shopping</p>
            <p>Furniture</p>
            <p>Discount</p>
          </div>
          <div class="fourth-info">
            <h4>Company</h4>
            <p>About</p>
            <p>Blog</p>
            <p>Affiliate</p>
            <p>Login</p>
          </div>
          <div class="five">
            <h4>Subscribe</h4>
            <p>Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisi hytre ame dolor Debilis</p>
            <p>Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
          </div>
       </div> 
    </section>
    <section id="c2b" >
      <!-- C2B User Offerings -->
      <div id="c2b-offerings">
          <h2>User Offerings</h2>
      </div>
      <div id="c2b-requests">
          <h2>Business Requests</h2>
      </div>
  </section>
    <div class="end-text">
    <p>Copyright © @2023. All Rights Reserved</p>
    </div> 
    <script src="java.js"></script>
  </body>
</html>

