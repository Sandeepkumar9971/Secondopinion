"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Button } from "./ui/button";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/navigation'
import ShareIcon from '@mui/icons-material/Share';

const content = [
  {
    id: 1,
    img: "/120124d439d42764bad2d37d5bc7e9a800033017.jpg",
    heading: "How does sleep affect weight loss?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Ms.Geetanjali, Dietitian/Nutritionist",
    like: 3,
    info: "Wondering what sleeping has to do with weight loss? You might follow the best diet and have a great fitness ...",
  },
  {
    id: 2,
    img: "/49babec8e21c7ea4b59e1c2f51109308268b3960.jpg",
    heading: "The Magic of Invisible Braces",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Pamela Bhattacharjee, Dentist",
    like: 35,
    info: "We have been seeing braces on many people since time immemorial and most of us shudder by the thought of ...",
  },
  {
    id: 3,
    img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
    heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Mahesh Shah, Ayurveda",
    like: 31,
    info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
  },
];
const Articles = () => {
  let router = useRouter()
  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className='flex flex-1 justify-between'>
        <div className='flex-2/3'>
          <h2 className='text-3xl '>Read top articles from health experts</h2>
          <h2>Health articles that keep you informed about good health practices and achieve your goals.</h2>
        </div>
        <div className='flex-1/3'>
          <Button className='border border-black bg-transparent text-black hover-none' onClick={() => { router.push('/articles') }}>
            See all articles
          </Button>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:flex-2/3 mb-4 md:mb-0">
            <h2 className="text-3xl mb-2">Read top articles from health experts</h2>
            <p>
              Health articles that keep you informed about good health practices and achieve your goals.
            </p>
          </div>
          <div className="md:flex-1/3">
            <Button
              className="border border-black bg-transparent text-black hover-none"
              onClick={() => alert("hello")}
            >
              See all articles
            </Button>
          </div>
        </div> */}

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pl-4">
          <div className="grid grid-cols-12 md:grid-cols-3 lg:grid-cols-3 gap-4">

            {content.map((article, index) => (
              <div
                key={index}
                className="bg-white p-2 shadow-lg rounded-lg transition transform hover:-translate-y-2"
                onClick={() => { router.push(`/articles/readarticle/${article.id}`) }}
              >
                <img
                  src={article.img}
                  alt={article.heading}
                  className="inline-block shrink-0 rounded-[.35rem] shadow aspect-[6/6] cursor-pointer"
                />
                <h3 className="text-lg font-semibold mb-2">{article.heading}</h3>
                <p className="text-sm text-gray-600 mb-2">{article.docname}</p>
                <p className="text-sm mb-4">{article.info}</p>
                <div className="flex items-center mt-4 gap-5">
                  <FavoriteIcon style={{ color: 'red' }} />
                  <span className="text-sm text-gray-600">{article.like}</span>
                  <ShareIcon className='cursor-pointer text-sm ml-5' />
                </div>
                {/* <Button
                        className="border border-black bg-transparent text-black hover-none"
                        onClick={() => alert("Read more about " + article.heading)}
                      >
                        Read more
                      </Button> */}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;