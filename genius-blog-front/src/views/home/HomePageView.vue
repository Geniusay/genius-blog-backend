<template>
  <div class="container">
    <div class="loader">
      <div class="loader-imgs">
        <div class="img">
          <img src="@/assets/images/img1.jpg" alt="" />
        </div>
        <div class="img">
          <img src="@/assets/images/img2.jpg" alt="" />
        </div>
        <div class="img">
          <img src="@/assets/images/img3.jpg" alt="" />
        </div>
        <div class="img" id="loader-logo">
          <img src="@/assets/images/logo2.png" alt="" />
        </div>
        <div class="img">
          <img src="@/assets/images/img4.jpg" alt="" />
        </div>
        <div class="img">
          <img src="@/assets/images/img5.jpg" alt="" />
        </div>
        <div class="img">
          <img src="@/assets/images/img6.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="website-content">
      <nav>
        <div class="nav-item">
          <a href="#">( menu )</a>
        </div>
        <div class="nav-item" id="logo">
          <a href="#">Genius Blog</a>
        </div>
        <div class="nav-item">
          <a href="#">( work* )</a>
        </div>
      </nav>

      <div class="hero">
        <div class="h1">
          <h1>Welcome</h1>
        </div>
        <div class="h1">
          <h1>To</h1>
        </div>
        <div class="h1">
          <h1><span>Genius Blog</span></h1>
        </div>
      </div>

      <footer>
        <div class="item">
          <img src="@/assets/images/img7.jpg" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/img8.jpg" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/img9.jpg" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/img10.jpg" alt="" />
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/style/view/home/_homepageview.scss");
</style>

<script setup lang="ts">
import { gsap } from "gsap";

onMounted(() => {
  gsap.set(".img", { y: 500 });
  gsap.set(".loader-imgs", { x: 500 });
  gsap.set(".nav-item", { y: 25, opacity: 0 });
  gsap.set("h1, .item, footer", { y: 200 });

  const tl = gsap.timeline({ delay: 1 });

  tl.to(".img", {
    y: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power3.inOut",
  })
    .to(
      ".loader-imgs",
      {
        x: 0,
        duration: 3,
        ease: "power3.inOut",
      },
      "-=2.5"
    )
    .to(
      ".img:not(#loader-logo)",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .to(
      ".loader",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    )
    .to(
      ".nav-item, h1, footer, .item",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    );
});
</script>
