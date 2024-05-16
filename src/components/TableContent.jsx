import React from "react";

const TableContent = ({ tables }) => {
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
    <div className="border bg-slate-100 px-10 py-6 mt-10">
      <h1 className="text-[24px] font-medium pt-[10px] pb-[18px]">
        Table of Contents
      </h1>
      <ul className="text-left">
        {tables.map((category) => renderCategory(category))}
      </ul>
    </div>
  );
};

export default TableContent;
