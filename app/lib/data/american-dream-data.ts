// app/lib/data/american-dream-data.ts

export const AMERICAN_DREAM_DATA = {
  stats: {
    totalSquareFeet: "3,000,000",
    annualVisitors: "40,000,000",
    stores: "450+",
    restaurants: "100+",
    entertainmentPercentage: "55%",
    retailPercentage: "45%",
    jobs: "16,200+",
    ranking: "#2 Largest Mall in USA",
  },

  location: {
    address: "1 American Dream Way, East Rutherford, NJ 07073",
    coordinates: { lat: 40.8119, lng: -74.0722 },
    proximity: {
      nyc: "7 miles west of Midtown Manhattan",
      newark: "10 minutes from Newark Airport",
      metlife: "Adjacent to MetLife Stadium",
    },
    transportation: [
      "I-95 (NJ Turnpike)",
      "Route 3, Route 17, Route 120",
      "NJ Transit Bus Lines",
      "100M+ cars pass annually",
    ],
  },

  demographics: {
    primaryCatchment: {
      radius: "30 miles",
      population: "20+ million",
      description: "NYC Metro, Northern NJ, parts of CT/PA",
    },
    nycMetro: {
      population: "8.6 million residents",
      annualTourists: "65+ million",
    },
    touristProjection: "50% of visitors expected to be tourists",
  },

  attractions: {
    nickelodeonUniverse: {
      name: "Nickelodeon Universe",
      title: "Largest indoor theme park in Western Hemisphere",
      rides: "35+ rides",
      highlights: ["TMNT Shellraiser - steepest drop (121.5°)", "The Shredder - tallest free-spinning coaster"],
    },
    dreamworksWaterPark: {
      name: "DreamWorks Water Park",
      title: "Largest indoor water park in North America",
      highlights: ["Largest indoor wave pool", "Longest hydro-magnetic coaster", "Tallest indoor body slide"],
    },
    bigSnow: {
      name: "Big SNOW",
      title: "First real-snow indoor ski park in North America",
    },
  },

  luxury: {
    name: "The Collections",
    brands: ["Hermès", "Louis Vuitton", "Gucci", "Prada", "Versace", "Saint Laurent", "Tiffany & Co."],
    advantage: "0% sales tax on clothing in New Jersey",
  },

  businessAdvantages: [
    "40M annual visitors (50% tourists)",
    "Adjacent to MetLife Stadium (FIFA 2026)",
    "0% sales tax on clothing",
    "20M+ population in 30-mile radius",
    "100M+ cars pass annually",
  ],
};