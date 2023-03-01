import Image from "next/image";
import React from "react";

type Props = {};

const about = (props: Props) => {
  return (
    <div className="relative top-14  bg-cyan-50 grid grid-cols-1">
      <div className="flex justify-center items-center p-6">
        <Image src="/story.png" alt="story" width="300" height="300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 pb-20 text-center p-5 ">
        <div>
          <h3 className="uppercase font-bold pb-3">Our Journey</h3>
          <p className="text-xs ">
            In 2010, our hospital began as a small clinic with a vision to
            provide quality healthcare to our community. Today, we have grown
            into a state-of-the-art medical center that is renowned for its
            exceptional patient care and cutting-edge technology. Our success
            has been driven by our commitment to putting patients first,
            investing in our people, and embracing innovation. We have received
            several awards and recognitions, and we are proud to have made a
            positive impact on the lives of our patients and their families.
          </p>
        </div>
        <div>
          <h3 className="uppercase font-bold pb-3">
            Our Commitment to Patient Care
          </h3>
          <p className="text-xs ">
            Our Commitment to Patient Care section highlights our hospital's
            unwavering dedication to providing exceptional patient-centered
            care. We prioritize patients' well-being by putting them at the
            center of everything we do. Our hospital provides a positive
            healthcare experience with personalized care, safety, and quality.
            We have accreditation and certification from renowned organizations,
            and we continuously improve our patient care and safety practices.
          </p>
        </div>
        <div>
          <h3 className="uppercase font-bold pb-3">
            Our Vision for the Future
          </h3>
          <p className="text-xs ">
            Our Vision for the Future section outlines our hospital's
            aspirations for continued growth and development in providing
            healthcare services. We aim to expand our reach to serve more
            patients, communities, and areas. Our hospital's future plans
            include upgrading our facilities with state-of-the-art technology
            and advanced medical equipment. We aspire to develop new programs,
            services, and initiatives that cater to the needs of our patients
            and improve healthcare delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
