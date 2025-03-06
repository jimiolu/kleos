import React from "react";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    const testimonial = [
        {
          id: 1,
          comment:
            "I very much enjoyed the time with Marc. He offered alot of honest, practical, and actionable advice. He also was careful to make sure he answered all of my questions and was very thorough. It's obvious he really has a heart for truly helping people!",
          name: "Marc Kuti",
        },
        {
          id: 2,
          comment:
            "I very much enjoyed the time with Marc. He offered alot of honest, practical, and actionable advice. He also was careful to make sure he answered all of my questions and was very thorough. It's obvious he really has a heart for truly helping people!",
          name: "John Doe",
        },
        {
          id: 3,
          comment:
            "I very much enjoyed the time with Marc. He offered alot of honest, practical, and actionable advice. He also was careful to make sure he answered all of my questions and was very thorough. It's obvious he really has a heart for truly helping people!",
          name: "Jane Doe",
        },
        {
          id: 4,
          comment:
            "I very much enjoyed the time with Marc. He offered alot of honest, practical, and actionable advice. He also was careful to make sure he answered all of my questions and was very thorough. It's obvious he really has a heart for truly helping people!",
          name: "Seun Ajayi",
        },
      ];

  return (
    <div className="bg-dark px-4 py-10 md:px-6 md:py-10 lg:p-20 my-20">
      <div
        data-aos="fade-up"
        className="flex flex-col lg:flex-row items-center justify-center gap-10"
      >
        <div className="md:mx-auto flex flex-col gap-4 items-center ">
          <h2 className="text-4xl font-medium">
            Hear what Users say about KleosApp
          </h2>
        </div>
        
        <Marquee speed={50} pauseOnHover={true}>
          <div>
            <div className="flex gap-2">
              {testimonial.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2  border-2 text-justify max-w-96 p-5 font-light rounded-3xl mx-2"
                >
                  <span className="text-ellipsis line-clamp-3">{item.comment}</span>
                  <span>~ {item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
