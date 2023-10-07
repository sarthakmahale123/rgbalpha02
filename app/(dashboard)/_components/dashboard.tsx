"use client";

import React,{useEffect} from "react";

const TableauDashboard = () => {
    useEffect(() => {
      const container = document.getElementById("container");
  
      if (container) {
        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        script.async = true;
        script.onload = () => {
          // Set the dashboard container size to 100% width and 100% height of the screen
          container.style.width = "100%";
          container.style.height = "100vh"; // Adjust the height here (e.g., "100vh" for 100% of the viewport height)
  
          const vizElement = container.getElementsByTagName("object")[0];
  
          // Set the dashboard size to 100% width and 100% height of the container
          vizElement.style.width = "100%";
          vizElement.style.height = "100%";
        };
  
        document.body.appendChild(script);
      }
    }, []);
  
    return (
      <div id="container">
        <object
          className="tableauViz"
          style={{ display: "none", width: "100%", height: "100%" }}
        >
          <param name="host_url" value="https://public.tableau.com/" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param
            name="name"
            value="Covid-19IndiaDashboard_16964222819080/Dashboard1"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Co/Covid-19IndiaDashboard_16964222819080/Dashboard1/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    );
  };
  
  export default TableauDashboard;