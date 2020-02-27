import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
function World() {
  return (
    <div>
      <Navbar />
      <div className="world--container">
        <h2>Climate</h2>
        <h4>Advancing transformative climate solutions</h4>
        <div className="container">
          <div className="world-image">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.wri.org/blog/2020/02/greenhouse-gas-emissions-by-country-sector"
            >
              <h3 className="world-title">
                4 Charts Explain Greenhouse Gas Emissions by Countries and
                Sectors
              </h3>
            </a>
            <p className="caption">
              Data shows that the energy sector produces 73% of global
              greenhouse gas emissions, and 10 countries account for more than
              two-thirds of annual emissions.
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.wri.org/blog/2020/02/greenhouse-gas-emissions-by-country-sector"
            >
              <button className="btn--black">Read more</button>
            </a>
          </div>
          <p className="content">Climate change is an urgent threat to humanity that demands swift, decisive action.

Fires. Droughts. Floods. Hurricanes. Rising seas. Climate impacts are being felt all around the world and on track to get much worse. Every year of delay and every tenth of a degree matters. The next few years is the last window we have to steer the world in a better and safer direction.

Addressing climate change requires dramatic changes to how we power our homes and factories and build our cities to how we feed our families and move around. Yet countries, businesses, states and cities have yet to make the deep structural economic and societal shifts that are required.

There isn’t a silver bullet or a single pressure point to addressing the climate challenge. It will require an army of actors, a menu of options and an array of interventions in the right places, tailored to the unique opportunities at hand. That’s where World Resources Institute comes in.

WRI’s role is to help businesses, policymakers and civil society at the local, national and international levels advance the deep structural shifts necessary to address climate change. We focus on ensuring near-term decisions align with our long-term temperature goals so all people can benefit from a safer world and thriving economies.

Our International Climate Action Initiative uses analysis, innovation and partnerships to achieve effective national policies and implement the Paris Agreement on climate change. Our offices around the world work at all levels of government and with businesses to advance cost-effective solutions to reduce its emissions in the short- and long-term. Climate Watch offers open data, visualizations and analysis to help policymakers, researchers and other stakeholders gather insights on countries' climate progress. Through Science Based Targets, WRI and partners help hundreds of the world’s largest companies set ambitious climate targets. And the Greenhouse Gas Protocol helps companies, cities and countries measure, manage, and report their greenhouse gas emissions.
</p>
        </div>
      </div>
    </div>
  );
}

export default World;
