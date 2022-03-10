import React from "react";
import { Link } from "react-router-dom";

function NavsocialIcon() {
  return (
    <div>
    
        <div className="container  ">
          <div className="col">
            <div className="col d-flex justify-content-center  fs-5  ">
              <Link
                to="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525806192%7Ce%7Cfb%20login%7C&placement=&creative=550525806192&keyword=fb%20login&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-320262102914%26loc_physical_ms%3D1007760%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KEDvlnPt1Jy7tWR8zBcpdxFIOwuBUYMOmqpXw6Y1QU0i6L9y-0RWrsaAjcLEALw_wcB"
                className="m-1  "
              >
                <i className="bi bi-facebook text-light"></i>
              </Link>
              <Link to="/" className="m-1 ">
                <i className="bi bi-youtube  " style={{ color: "red" }}></i>
              </Link>
              <Link
                to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                className="m-1"
              >
                <i className="bi bi-twitter text-light"></i>
              </Link>
              <Link
                to="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|547419127652|e|instagram%20login|&placement=&creative=547419127652&keyword=instagram%20login&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-35100690670%26loc_physical_ms%3D1007760%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KHfvSi7_EP5WFPy9jqEzkGhieBI2wkRgm-kKw7I9AH0nYckAXLpWWMaAsIGEALw_wcB"
                className="m-1"
                style={{ color: "#8a3ab9" }}
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                to="https://in.pinterest.com/login/"
                className="m-1"
                style={{ color: "red" }}
              >
                <i className="bi bi-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default NavsocialIcon;
