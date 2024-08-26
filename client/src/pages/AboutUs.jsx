import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center mb-12  space-y-8">
     
      <div 
        className="w-full h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold" 
        style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/05/24/20/07/to-old-lantern-1413132_1280.jpg")` }}
      >
        Our Restaurant
      </div>

       
      <div className="max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="text-lg">
          Founded in [Year], our restaurant has been serving the community with delicious, handcrafted meals made from the freshest ingredients. Our journey began with a passion for culinary excellence and a commitment to providing a memorable dining experience for all our guests.
        </p>
      </div>

      
      <div className="max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <p className="text-lg">
          We believe in sustainability, quality, and community. Our ingredients are locally sourced, and we strive to minimize our environmental footprint. We are committed to offering exceptional service and creating a welcoming atmosphere for everyone.
        </p>
      </div>

      
      <div className="max-w-4xl text-center space-y-8">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <TeamMember name="John Doe" position="Head Chef" image="https://cdn.pixabay.com/photo/2020/02/23/10/49/cooking-4872956_640.jpg" />
          <TeamMember name="Jane Smith" position="Manager" image="https://cdn.pixabay.com/photo/2023/05/26/22/53/james-tahhan-8020408_640.jpg" />
        </div>
      </div>

      
      <div className="max-w-4xl text-center space-y-8 px-8 lg:px-0 md:px-4">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg" alt="Gallery 1" className="w-full rounded-lg" />
          <img src="https://cdn.pixabay.com/photo/2015/05/31/11/23/table-791167_640.jpg" alt="Gallery 2" className="w-full rounded-lg" />
        </div>
      </div>

       
      <div className="max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <p className="text-lg italic">"The best dining experience I've ever had!" - Happy Customer</p>
        <p className="text-lg italic">"Delicious food and fantastic service." - Satisfied Patron</p>
      </div>

       
      <div className="max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Visit Us</h2>
        <p className="text-lg">
          Come and enjoy a meal at our restaurant. We look forward to serving you!
        </p>
        <button className="px-6 py-3 -12 font-semibold bg-red-500 text-white rounded-full hover:bg-red-700 ">
          Get Directions
        </button>
      </div>
    </div>
  );
};

const TeamMember = ({ name, position, image }) => (
  <div className="text-center space-y-2">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-lg text-gray-500">{position}</p>
  </div>
);

export default AboutUs;
