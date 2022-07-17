import React, { Component } from "react";
import Slider from "react-slick";
import img_apache from './../../../img/slideshow/apach.png'
import img_bootstrap from './../../../img/slideshow/bootstrap.png'
import img_docker from './../../../img/slideshow/docker.png'
import img_htmlcssjs from './../../../img/slideshow/htmlcssjs.png'
import img_laravel from './../../../img/slideshow/laravel.png'
import img_mysql from './../../../img/slideshow/mysql.png'
import img_nginx from './../../../img/slideshow/nginx.png'
import img_node from './../../../img/slideshow/node.png'
import img_npm from './../../../img/slideshow/npm.png'
import img_php from './../../../img/slideshow/php.png'
import img_react from './../../../img/slideshow/react.png'
import img_reacthookform from './../../../img/slideshow/reacthookform.png'
import img_recoil from './../../../img/slideshow/recoil.png'
import img_redux from './../../../img/slideshow/redux.png'
import img_sass from './../../../img/slideshow/sass.png'
import img_tailwindcss from './../../../img/slideshow/tailwindcss.png'
import img_typescript from './../../../img/slideshow/typescript.png'
import img_vite from './../../../img/slideshow/vite.png'
import img_webpack from './../../../img/slideshow/webpack.png'
import img_illustrator from './../../../img/slideshow/illustrator.png'
import img_jquery from './../../../img/slideshow/jquery.png'
import img_photoshop from './../../../img/slideshow/photoshop.png'
import img_wordpress from './../../../img/slideshow/wordpress.png'

export default function SlideShow () {
  const imgBox_1 = [
    { src: img_htmlcssjs, alt: 'html css javascript' },
    { src: img_bootstrap, alt: 'bootstrap' },
    { src: img_react, alt: 'react' },
    { src: img_reacthookform, alt: 'react hook form' },
    { src: img_recoil, alt: 'recoil' },
    { src: img_redux, alt: 'redux' },
    { src: img_sass, alt: 'sass' },
    { src: img_tailwindcss, alt: 'tailwindcss' },
    { src: img_jquery, alt: 'jquery' },
    { src: img_illustrator, alt: 'illustrator' },
    { src: img_photoshop, alt: 'photoshop' },
  ]
  const imgBox_2 = [
    { src: img_apache, alt: 'apache' },
    { src: img_docker, alt: 'docker' },
    { src: img_laravel, alt: 'laravel' },
    { src: img_mysql, alt: 'mysql' },
    { src: img_nginx, alt: 'nginx' },
    { src: img_node, alt: 'node' },
    { src: img_npm, alt: 'npm' },
    { src: img_php, alt: 'php' },
    { src: img_typescript, alt: 'typescript' },
    { src: img_vite, alt: 'vite' },
    { src: img_webpack, alt: 'webpack' },
    { src: img_wordpress, alt: 'wordpress' },
  ]
  const settings_1 = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false
  }
  const settings_2 = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false
  }
  return (
    <div className="pt-20 pb-20">
      <div className="pb-6">
        <Slider {...settings_1}>
          { imgBox_1.map((val, key) => {
            return(
              <div key={ key } className="w-60 h-20">
                <img src={ val.src } alt={ val.alt } className="max-w-full max-h-full mr-auto ml-auto" />
              </div>
            )
          }) }
        </Slider>
      </div>
      <div className="pt-6">
        <Slider {...settings_2}>
          { imgBox_2.map((val, key) => {
            return(
              <div key={ key } className="w-60 h-20">
                <img src={ val.src } alt={ val.alt } className="max-w-full max-h-full mr-auto ml-auto" />
              </div>
            )
          }) }
        </Slider>
      </div>
    </div>

  )
}