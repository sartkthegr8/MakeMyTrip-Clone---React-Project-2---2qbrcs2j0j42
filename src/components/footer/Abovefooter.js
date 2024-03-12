import React from "react";

function LinkList({ title, links }) {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-6">
      <p className="text-lg font-bold">{title}</p>
      <div className="flex flex-wrap">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-blue-600 hover:text-blue-800 mr-4 mb-2"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function AboveFooter() {
  const productOfferingLinks = [
    "Flights",
    "International Flights",
    "Charter Flights",
    "Hotels",
    "International Hotels",
    "Homestays and Villas",
    "Activities",
    "Holidays In India",
    "International Holidays",
    "Book Hotels From UAE",
    "myBiz for Corporate Travel",
    "Book Online Cabs",
    "Book Bus Tickets",
    "Book Train Tickets",
    "Cheap Tickets to India",
    "Book Flights From US",
    "Book Flights From UAE",
    "Trip Planner",
    "Gift Cards",
    "Trip Money",
    "Trip Ideas",
    "Travel Blog",
    "PNR Status",
    "One Way Cab"
  ];

  const makeMyTripLinks = [
    "About Us",
    "Investor Relations",
    "Careers",
    "MMT Foundation",
    "CSR Policy",
    "myPartner - Travel Agent Portal",
    "Foreign Exchange",
    "List your hotel",
    "Partners- Redbus",
    "Partners- Goibibo",
    "Partners- BookMyForex"
  ];

  const aboutTheSiteLinks = [
    "Customer Support",
    "Payment Security",
    "Privacy Policy",
    "User Agreement",
    "Terms of Service",
    "More Offices",
    "Make A Payment",
    "Work From Home"
  ];

  const importantLinks = [
    "Villas In Lonavala",
    "Villas In Goa",
    "Villas In Igatpuri",
    "Villas In Bangalore",
    "Villas In Hyderabad",
    "Villas In Alibaug",
    "Villas In Noida",
    "Villas In Karjat",
    "Villas In Chennai",
    "Villas In Jaipur",
    "Villas In Mahabaleshwar",
    "Villas In Gurgaon",
    "Villas In Delhi",
    "Villas In Mumbai",
    "Villas In Pune",
    "Villas In Pondicherry",
    "Villas In Lucknow",
    "Villas In Thiruvananthapuram",
    "Villas In Kolkata",
    "Villas In Nashik",
    "Villas In Ahmedabad",
    "Villas In Matheran",
    "Villas In Daman",
    "Villas In Kasauli",
    "Villas In Ooty",
    "Villas In Dehradun"
  ];

  const quickLinks = [
    "Houseboats In Alleppey",
    "Homestays In Chikmagalur",
    "Camps In Rishikesh",
    "Homestays In Coorg",
    "Homestays In Sakleshpur",
    "Hostels In Goa",
    "Homestays In Goa",
    "Hostels In Delhi",
    "Cottages In Ooty",
    "Farm Houses In Lonavala",
    "Houseboats In Kumarakom",
    "Cottages In Kodaikanal",
    "Homestays In Ooty",
    "Farm Houses In Noida",
    "Hostels In Mumbai",
    "Camps In Jaisalmer",
    "Homestays In Wayanad",
    "Homestays In Darjeeling",
    "Homestays In Munnar",
    "Homestays In Pondicherry",
    "Hostels In Jaipur",
    "Hostels In Hyderabad",
    "Hostels In Pune",
    "Apartments In Chennai",
    "Cottages In Manali",
    "Homestays In Kodaikanal",
    "Homestays In Mysore"
  ];

  const topProperties = [
    "W Goa",
    "The Leela Goa",
    "The Tamara Coorg",
    "Evolve Back Coorg",
    "Grand Hyatt Goa",
    "Taj Lake Palace Udaipur"
  ];

  return (
    <div className="bg-gray-100 py-6">
      <LinkList title="PRODUCT OFFERING" links={productOfferingLinks} />
      <LinkList title="MAKEMYTRIP" links={makeMyTripLinks} />
      <LinkList title="ABOUT THE SITE" links={aboutTheSiteLinks} />
      <LinkList title="IMPORTANT LINKS" links={importantLinks} />
      <LinkList title="QUICK LINKS" links={quickLinks} />
      <LinkList title="TOP PROPERTIES" links={topProperties} />
    </div>
  );
}

export default AboveFooter;
