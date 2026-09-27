import React, { useState } from "react";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = ["React", "NodeJs", "MongoDB", "Express", "Angular", "VueJs"];

  // Lọc danh sách theo giá trị tìm kiếm (không phân biệt hoa/thường)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ fontSize: "18px", marginRight: "5px" }}>Search: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontSize: "16px", padding: "2px 5px" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          fontSize: "20px",
        }}
      >
        {filteredItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter;
