import React from "react";
import TableContent from "./components/TableContent";
import Looing from "./components/Looing";

const PageDetail = () => {
  const tables = [
    {
      id: 1,
      name: "Exploring the Interim CFO Advantage for Startups",
      children: [
        { id: 2, name: "Scalability and Cost Management" },
        { id: 3, name: "Expertise on Demand" },
      ],
    },
    { id: 4, name: "The Strategic Role of Interim CFOs in Startup Growth" },
    { id: 5, name: "Selecting Your Startup’s Interim CFO" },
  ];
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const renderCategory = (category) => {
    return (
      <li key={category.id} className="text-left">
        <button onClick={() => handleClick(category.id)} className="text-left">
          {category.name}
        </button>
        {category.children && (
          <ul>
            {category.children.map((child) => (
              <li key={child.id} className="list-disc ml-10">
                <button onClick={() => handleClick(child.id)}>
                  {child.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-[60px] text-[#000] text-center mb-8">
        Top Reasons to Hire Interim CFO for Startups
      </h1>
      <div className="lg:flex items-center lg:justify-between mb-5 px-20 md:flex-col lg:flex-row md:block">
        <div className="lg:flex items-center md:block">
          <div className="font-semibold mr-[160px]">
            <span className="text-[#0000004d]">Last updated</span>
            <p>April 22, 2024</p>
          </div>
          <div className="font-semibold">
            <span className="text-[#0000004d]">Categories</span>
            <p>Business</p>
          </div>
        </div>
        <div className="font-semibold lg:mr-[200px] md:m-0">
          <span className="text-[#0000004d]">Read time</span>
          <p>11 min</p>
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 gap-10 md:grid-cols-1">
        <div className=" col-span-2 px-20">
          <div>
            <h1 className="text-[24px] font-medium pt-[10px] pb-[18px]">
              Table of Contents
            </h1>
            <ul className="text-left">
              {tables.map((category) => renderCategory(category))}
            </ul>
          </div>
          <div id="1">
            <img
              src="https://passionates.com/wp-content/uploads/2024/04/Hire-Interim-CFO-for-Startups.png"
              alt=""
              className="w-full my-3"
            />
            <h1 className="text-[32px] font-medium pt-[10px] pb-[18px]">
              Exploring the Interim CFO Advantage for Startups
            </h1>
            <p>
              An interim CFO, also known as a chief financial officer, can be
              likened to a Swiss Army Knife – versatile, practical, and
              instantly accessible when needed. These financial wizards offer
              startups: immediate access to experienced financial expertise the
              ability to focus on core business operations immense flexibility,
              allowing you to ‘test drive’ their performance without committing
              to a long-term contract. Moreover, they are cost-effective,
              eliminating the need for a full-time salary and associated
              benefits. Consider a scenario where your startup is in a critical
              phase requiring immediate financial leadership. This is when an
              interim CFO comes into play. They provide stability, leadership,
              and financial expertise during such critical phases. They bring an
              unbiased perspective to identify financial challenges and develop
              actionable solutions. Most importantly, they are instrumental in
              establishing key financial structures, including accounting
              systems and managerial reporting systems, which are vital for
              startups.
            </p>
            <div id="2">
              <h1 className="text-[24px] font-medium pt-[10px] pb-[18px]">
                Scalability and Cost Management
              </h1>
              <p>
                The advantage of an interim CFO lies in: Having professional
                financial expertise available exactly when you need it Providing
                startups with access to knowledgeable financial expertise
                without requiring a long-term employment commitment Offering
                independent insights, leveraging their extensive experience and
                understanding of market conditions. They bring a comprehensive
                background in accounting best practices, systems, and financial
                regulations to the table, making them valuable assets to any
                startup.
              </p>
            </div>
            <div id="3">
              <h1 className="text-[24px] font-medium pt-[10px] pb-[18px]">
                Expertise on Demand
              </h1>
              <p>
                Scalability is crucial in a startup’s dynamic environment.
                Interim CFOs allow startups to scale financial oversight up or
                down as needed. They also offer a cost-effective solution by
                providing financial leadership without the sustained expense of
                a full-time CFO’s salary. Essentially, they serve as a strategic
                stop-gap solution, providing essential financial services while
                giving the startup time to find the right full-time CFO for
                long-term growth.
              </p>
            </div>
          </div>
          <div id="4">
            <img
              src="https://cdn-eipmp.nitrocdn.com/ZmvUXPcuuBpGedMIxvrrPiwxyewyyhAp/assets/images/optimized/rev-f47fc51/passionates.com/wp-content/uploads/2024/04/Interim-CFO-analyzing-financial-data-1-1536x878.png"
              alt=""
              className="w-full my-3"
            />
            <h1 className="text-[32px] font-medium pt-[10px] pb-[18px]">
              The Strategic Role of Interim CFOs in Startup Growth
            </h1>
            <p>
              An interim CFO acts like a skilled navigator, steering a startup
              through the turbulent seas of strategic expansion. They play a
              critical role in strategic planning, working with startups to:
              Manage finances Draw from a diverse range of experiences and
              industry contacts Introduce best practices and insights Help
              navigate market trends Apply successful strategies They ensure the
              maintenance of a robust finance function, partnering with CEOs as
              a financial executive to guide the company towards sustainable
              growth.
            </p>
            <div id="4">
              <h1>Crafting Financial Models</h1>
              <p>
                Just as a roadmap is vital for any journey, it is equally
                significant for a startup’s financial voyage. Interim CFOs play
                a key role in designing a financial roadmap for startups by
                leveraging their expertise to: Forecast financial outcomes Build
                and maintain intricate financial models Predict cash flows
                Formulate business strategies Refining a company’s forecasting
                abilities and delivering robust cash flow forecasting models
                strengthen liquidity management and ensure startups make
                knowledgeable, strategic decisions for future growth through
                financial modeling.
              </p>
            </div>
          </div>
          <div id="5">
            <h1 className="text-[32px] font-medium pt-[10px] pb-[18px]">
              Selecting Your Startup’s Interim CFO
            </h1>
            <p>
              The process of selecting the right interim CFO is crucial and
              should be approached with careful consideration of the candidate’s
              qualifications and compatibility with the startup’s needs. When
              hiring an interim CFO, it is crucial to consider their qualities
              and previous track record to ensure they can handle the financial
              leadership role. Industry experience is a key element when
              selecting an experienced financial professional as an interim CFO,
              as it can significantly influence their ability to contribute to
              the startup’s economic strategy and growth.
            </p>
          </div>
        </div>
        <div className="md:hidden lg:block">
          <Looing />
          <TableContent tables={tables} />
        </div>
      </div>
    </div>
  );
};

export default PageDetail;
