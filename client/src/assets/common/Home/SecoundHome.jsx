import React from "react";

const SecoundHome = () => {
  return (
    <div className='mt-20 '>
      <div className='text-center text-green-600 font-bold pb-1'>
        Crispy, Every Bite Taste
      </div>
      <div className='text-center text-4xl font-bold'> Visit Our Store</div>
      <div className='flex flex-wrap lg:flex-row justify-center items-center  align-middle py-4 pt-8 '>
        <div className='flex jusity-center lg:w-1/3 md:w-2/3 rounded-2xl m-2 border-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <div className='w-1/2  h-44 py-8 items-center flex justify-center'>
            <img
              className='h-full w-full pl-4 lg:pl-0 ml-12   '
              src='https://t4.ftcdn.net/jpg/05/61/82/83/360_F_561828375_KCtTuNdpQTjHrMqDrcoCpoLaYhLrZQdI.jpg'
              alt=''
            />
          </div>
          <div className='justify-end'>
            <div className='pl-20 text-2xl pt-6 pb-1 font-bold '>Ham Burger</div>
            <div className='pl-20 text-lg w-4/5 text-gray-600 font-semibold cursor-pointer'>
              Savor the juiciest, most flavorful burger in town. Made fresh,
              just for you. 
            </div>
          </div>
        </div>
        <div className='flex jusity-center lg:w-1/3 md:w-2/3  rounded-2xl m-2 border-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <div className='w-1/2 h-44 py-8 items-center flex justify-center'>
            <img
              className='h-full w-full pl-4 lg:pl-0 ml-12   '
              src='https://thumbs.dreamstime.com/b/pizza-delicious-isolated-white-transparent-background-png-file-ready-to-use-pizza-delicious-isolated-white-transparent-293224138.jpg'
              alt=''
            />
          </div>
          <div>
            <div className='pl-20 text-2xl pt-6 pb-2 font-bold '>Pep Pizza</div>
            <div className='pl-20 text-lg w-4/5 text-gray-600 font-semibold cursor-pointer'>
            Savor the delicious, freshly made pizza. Perfect for any time.
            </div>
          </div>
        </div>
        <div className='flex jusity-center lg:w-1/3 md:w-2/3 rounded-2xl m-2 border-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <div className='w-1/2 h-44 py-8 items-center flex justify-center'>
            <img
              className='h-full w-full pl-4 lg:pl-0 ml-12   '
              src='https://t4.ftcdn.net/jpg/05/61/82/83/360_F_561828375_KCtTuNdpQTjHrMqDrcoCpoLaYhLrZQdI.jpg'
              alt=''
            />
          </div>
          <div>
            <div className='pl-20 text-2xl pt-6 pb-2 font-bold '>Chicken Nuggets</div>
            <div className='pl-20 text-lg w-4/5 text-gray-600 font-semibold cursor-pointer'>
            Enjoy the crispy and juicy chicken nuggets, made to perfection.
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecoundHome;
