import React from "react";

function AboutPage(): JSX.Element {
  return (
    <div className="bg-slate-800 text-gray-50 md:p-20 p-10  mx-auto ">
      <h1 className="text-4xl font-bold mb-8">About Panavarse DAO</h1>
      <p className="text-xl mb-4">
        Panavarse DAO is a decentralized autonomous organization (DAO) focused
        on supporting blockchain education, research, and development. Our
        mission is to create a vibrant and inclusive community of blockchain
        enthusiasts and developers, and to promote the adoption of decentralized
        technologies worldwide.
      </p>
      <p className="text-xl mb-4">
        At Panavarse DAO, we believe that blockchain technology has the
        potential to transform many aspects of society, from finance and
        governance to supply chain management and social networks. We are
        committed to exploring this potential and developing innovative
        solutions that can make a positive impact on people's lives.
      </p>
      <p className="text-xl mb-4">
        We are a community-driven organization that values transparency,
        openness, and collaboration. Our members come from all over the world
        and have diverse backgrounds and expertise. We welcome anyone who shares
        our vision and wants to contribute to the development of the blockchain
        ecosystem.
      </p>
      <p className="text-xl mb-4">
        Join us today and become a part of the Panavarse DAO community.
        Together, we can build a better future for everyone.
      </p>
    </div>
  );
}

export default AboutPage;
