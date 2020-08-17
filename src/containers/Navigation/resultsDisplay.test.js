import { ResultsDisplay } from "./ResultsDisplay";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DisplayItem from "../../components/DisplayItem/DisplayItem";

configure({ adapter: new Adapter() });

import { createLocation } from "history";
const mat = {
  url: "http://localhost:3000/category/nail",
};

const location = createLocation(mat.url);

describe("<ResultsDisplay>", () => {
  it("Should render <DisplayItem/> when recieving items", () => {
    let wrapper = shallow(
      <ResultsDisplay
        location={location}
        items={[
          {
            _id: "5ea2e2db17e32828c8de0731",
            imageUrls: [
              "images\fa4513f9_2589_41e9_ac9b_dc1fd915cd80_download (1).jpg",
              "images\bbcc1763_0d95_48cf_bed6_a4a4fe1ad7e9_download (2).jpg",
              "imagescae3e964_dc13_4328_ba74_167d43565bfd_download.jpg",
            ],
            title: "Fashion 1",
            category: "Fashion",
            subCategory: "Watches",
            condition: "New",
            description: "sdad",
            sellingArea: "Europe",
            price: 12,
            shippingFee: 2,
            quantity: 50,
            userId: "5e89116d64547e20500fba3a",
            __v: 0,
          },
        ]}
      />
    );

    expect(wrapper.find(DisplayItem)).toHaveLength(1);
  });
});
