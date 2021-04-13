import React from "react";
import "../styling/Category.css";
class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <div className="checkbox-item">
          <h2>Store Category</h2>
          <input type="checkbox" id="item1" name="item" value="item" />
          <label>Fashion</label>
          <br />
          <hr />
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="item2" name="item" value="item" />
          <label>Food & Dinning</label>
          <br />
          <hr />
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="item1" name="item" value="item" />
          <label>Mobile & Tablet</label>
          <br />
          <hr />
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="item1" name="item" value="item" />
          &nbsp;
          <label>Travel</label>
          <br />
          <hr />
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="item1" name="item" value="item" />
          <label>Beauty & Health</label>
        </div>
      </div>
    );
  }
}
export default Category;
