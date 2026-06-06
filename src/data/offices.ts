export interface OfficeLocation {
  city: string;
  officeType: string;
  addressLines: string[];
  email: string;
  phone?: string;
  directionsPlaceholder: string;
}

export const officeLocations: OfficeLocation[] = [
  {
    city: "Anantapur",
    officeType: "Head Office",
    addressLines: [
      "A.G.V Reddy's Falcon Crest",
      "80 Feet Road",
      "Sangamesh Nagar",
      "Anantapur",
      "Andhra Pradesh - 515001"
    ],
    email: "info@agvreddy.com",
    directionsPlaceholder: "Directions (Coming Soon)"
  },
  {
    city: "Tirupati",
    officeType: "Branch Office",
    addressLines: [
      "No. 104",
      "Sneha Apartments",
      "Shanthi Nagar",
      "Khadi Colony",
      "Tirupati",
      "Andhra Pradesh - 517501"
    ],
    email: "info@agvreddy.com",
    directionsPlaceholder: "Directions (Coming Soon)"
  },
  {
    city: "Bengaluru",
    officeType: "Branch Office",
    addressLines: [
      "39",
      "III Floor",
      "Padam Complex",
      "SDM Lane",
      "Manavarthipet",
      "Bengaluru",
      "Karnataka - 560063"
    ],
    email: "info@agvreddy.com",
    directionsPlaceholder: "Directions (Coming Soon)"
  }
];
