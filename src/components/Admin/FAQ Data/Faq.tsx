import React from 'react';
const faqItems = [
    {
      question: 'What is a SAAS platform?',
      answer: 'SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
    },
    {
      question: 'How does billing work?',
      answer: 'We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.',
    },
    {
      question: 'Can I get a refund for my subscription?',
      answer: 'We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.',
    },
    {
      question: 'Can I try this platform for free?',
      answer: 'We offers a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.',
    },
    {
      question: 'How do I access documentation?',
      answer: 'Documentation is available on the company\'s website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the platform, as well as code examples and other resources.',
    },
    {
      question: 'How do I contact support?',
      answer: 'If you need help with the platform or have any other questions, you can contact the company\'s support team by submitting a support request through the website or by emailing support@We.com.',
    },
    {
      question: 'Do you offer any discounts or promotions?',
      answer: 'We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company\'s newsletter or follow it on social media.',
    },
    {
      question: 'How do we compare to other similar services?',
      answer: 'This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.',
    },
  ];
const FAQ = () => {
  return (
<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
<div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
      <div className="flex justify-end">
        <button
          className="rounded-lg bg-cyan-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Add Question
        </button>
      </div>
    </div>


    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
      <div className="flex flex-col ">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">
          FAQ
        </h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequently asked questions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full mx-auto mt-8">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="py-5 px-3">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {item.answer}
                </p>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};



export default FAQ;
