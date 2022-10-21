import React from "react";

const Home = () => {
  return (
    <div>
      <article itemid='#' itemscope itemtype='http://schema.org/BlogPosting'>
        <div class='grid items-center grid-cols-1 md:grid-cols-2'>
          <div class='order-2 h-64 md:order-1 md:h-full'>
            <img
              src='https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg'
              class='object-cover w-full h-full bg-center'
              alt='Kutty'
            />
          </div>
          <div class='order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0'>
            <p class='mb-3 text-gray-500'>
              <time
                itemprop='datePublished dateModified'
                datetime='2010-08-07 11:11:03-0400'
                pubdate>
                Jan 02 2021
              </time>
            </p>
            <h1
              class='mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl'
              itemprop='headline'
              title='Rise of Tailwind - A Utility First CSS Framework'>
              Rise of Tailwind - A Utility First CSS Framework
            </h1>
            <a class='flex items-center text-gray-700' href='#'></a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
