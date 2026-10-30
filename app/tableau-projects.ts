import type { Project } from "./projects";

type TableauProject = Project & {
  imageLabel?: string;
  liveUrl?: string;
};

const tableauEmbed = (workbook: string, view: string) =>
  `https://public.tableau.com/views/${workbook}/${view}?:showVizHome=no&:embed=y&:tabs=no&:toolbar=yes&:display_count=n`;

export const indonesiaEarthquakeProject: TableauProject = {
  slug: "indonesia-earthquake-activity",
  index: "17",
  title: "Indonesia Earthquake Activity Analysis",
  category: "Geospatial Analytics · Tableau Dashboard",
  accent: "coral",
  summary:
    "An interactive Tableau Public dashboard of 13,023 earthquakes recorded in and around Indonesia from August 2020 to 2026. It shows where they happen, how activity changes from year to year, how strong and how deep they are, and the strongest events on record.",
  challenge:
    "An earthquake catalogue is a long table of coordinates, magnitudes and depths. Read as a table, it’s hard to see where activity clusters, whether it’s rising or falling, or how often strong events happen. This dashboard turns that table into a few views a reader can take in at a glance.",
  approach:
    "Two linked dashboards. The overview pairs five headline figures with an activity map coloured by magnitude and an annual trend line, all filtered by year. The second dashboard covers the magnitude distribution, the ten strongest events and a magnitude against depth scatter. Buttons move between the two.",
  outcome:
    "Most recorded activity is moderate. Events between magnitude 4.0 and 4.9 make up about 90% of the catalogue, while 1,278 reached magnitude 5 or above and the strongest was 7.8. Across the full years 2021 to 2025, the catalogue recorded between 1,831 and 2,251 earthquakes a year.",
  applications:
    "Briefing material for disaster preparedness and response teams, teaching regional seismic patterns, and a reusable layout for any event catalogue that has a location, a size and a date.",
  tools: [
    "Tableau Public",
    "Geospatial Mapping",
    "Calculated KPIs",
    "Interactive Filters",
    "Dashboard Navigation",
    "Distribution Analysis",
    "Trend Analysis",
    "Data Visualization",
  ],
  limitations:
    "It describes the catalogue; it doesn’t forecast earthquakes or measure risk. 2020 starts on 18 August and 2026 is a partial year, so those totals can’t be compared with full years. Only 38 events below magnitude 4.0 appear, which most likely reflects what the catalogue records rather than a lack of small earthquakes.",
  future:
    "Group aftershocks with their main shock, break activity down by depth class, and refresh the data automatically from the USGS feed.",
  filters: ["Data Analytics", "Dashboards"],
  dataset: "Indonesia Earthquake Dataset, from the USGS Earthquake Catalog via Tableau Public",
  datasetSize: "13,023 earthquakes · 18 August 2020 to 2026 (partial year)",
  datasetSource: "USGS Earthquake Catalog",
  imageLabel: "LIVE TABLEAU DASHBOARD · TWO LINKED VIEWS",
  liveUrl:
    "https://public.tableau.com/app/profile/sam.boateng6354/viz/IndonesiaEarthquakeActivityAnalysis/IndonesiaEarthquakeOverview",
  liveLabel: "Open on Tableau Public ↗",
  embedUrl: tableauEmbed("IndonesiaEarthquakeActivityAnalysis", "IndonesiaEarthquakeOverview"),
  noRepo: true,
  evidence: [
    {
      value: "13,023",
      label: "Earthquakes in the catalogue",
      detail: "Every event from 18 August 2020 to the latest update in 2026, mapped and charted by year, magnitude and depth.",
    },
    {
      value: "1,278",
      label: "Magnitude 5 or above",
      detail: "Events from magnitude 5.0 up, about one in ten of all recorded earthquakes.",
    },
    {
      value: "7.8",
      label: "Strongest recorded event",
      detail: "The largest magnitude in the catalogue, top of the ten strongest events ranked on the second dashboard.",
    },
    {
      value: "About 90%",
      label: "Between magnitude 4.0 and 4.9",
      detail: "11,707 of the 13,023 events, which makes moderate earthquakes the bulk of recorded activity.",
    },
  ],
  validation:
    "The figures agree with each other: the yearly counts add up to the 13,023 total, the magnitude bands add up to the same total, and the bands from 5.0 upward add up to the 1,278 headline figure.",
  metricContext:
    "These are counts of recorded earthquakes, not a measure of risk to any place. Magnitude is shown as recorded in the catalogue.",
};

export const onlineRetailProject: TableauProject = {
  slug: "online-retail-sales-returns",
  index: "18",
  title: "Online Retail Sales and Returns Analysis",
  category: "Retail Analytics · Tableau Dashboard",
  accent: "yellow",
  summary:
    "An interactive Tableau Public dashboard of a UK online retailer’s transactions from December 2009 to December 2011: £20.81M in sales across 41,943 orders and 5,881 customers, with views of the monthly trend, international markets, best sellers and returns.",
  challenge:
    "More than a million transaction lines don’t tell a manager much on their own. The useful questions are simpler: how sales move through the year, which markets and products matter most, and what customers send back.",
  approach:
    "An executive dashboard with six headline figures (sales, orders, customers, average order value, units sold and return rate), a monthly sales trend, the top international markets and the ten best selling products, filtered by year and country. A second dashboard ranks the ten most returned products. Buttons move between the two.",
  outcome:
    "Sales climb every autumn and peak in November in both 2010 and 2011. Outside the UK, Ireland (EIRE in the data) is the largest market, and the best selling product is a cakestand at about £345K in sales. The overall return rate is 4.13%, and two products, a paper craft item and a medium ceramic storage jar, account for 80,995 and 74,494 returned units.",
  applications:
    "Monthly sales reviews, stock planning ahead of the autumn peak, deciding which international markets to prioritise, and following up on the products customers return most.",
  tools: [
    "Tableau Public",
    "Calculated KPIs",
    "Interactive Filters",
    "Dashboard Navigation",
    "Time Series Analysis",
    "Product Ranking",
    "Returns Analysis",
    "Data Visualization",
  ],
  limitations:
    "The data stops on 9 December 2011, so the sharp drop in the final month is a partial month, not a collapse in sales. The two most returned products are far ahead of every other product, which looks more like a few very large cancelled orders than a pattern; the dashboard doesn’t separate those out yet. It covers one retailer, so the figures don’t describe UK retail in general.",
  future:
    "Add customer level analysis such as RFM segmentation and repeat purchase rates, and separate one off bulk cancellations from everyday returns.",
  filters: ["Data Analytics", "Dashboards"],
  dataset: "Online Retail II, UCI Machine Learning Repository",
  datasetSize: "1,067,371 transaction lines · 1 December 2009 to 9 December 2011",
  datasetSource: "UCI Machine Learning Repository · CC BY 4.0",
  datasetUrl: "https://doi.org/10.24432/C5CG6D",
  imageLabel: "LIVE TABLEAU DASHBOARD · TWO LINKED VIEWS",
  liveUrl:
    "https://public.tableau.com/app/profile/sam.boateng6354/viz/OnlineRetailSalesandReturnsAnalysis/Dashboard1",
  liveLabel: "Open on Tableau Public ↗",
  embedUrl: tableauEmbed("OnlineRetailSalesandReturnsAnalysis", "Dashboard1"),
  noRepo: true,
  evidence: [
    {
      value: "£20.81M",
      label: "Total sales",
      detail: "Across December 2009 to December 2011, with a monthly trend that peaks every November.",
    },
    {
      value: "41,943",
      label: "Orders",
      detail: "Placed by 5,881 customers, for 11,672,569 units sold.",
    },
    {
      value: "£496.24",
      label: "Average order value",
      detail: "Total sales divided by orders, shown as one of six headline figures.",
    },
    {
      value: "4.13%",
      label: "Return rate",
      detail: "Shown on the executive dashboard, with the ten most returned products ranked on the second.",
    },
  ],
  validation:
    "The headline figures agree with each other: £20.81M in sales over 41,943 orders gives the £496.24 average order value shown on the dashboard.",
  metricContext:
    "Sales are in pounds sterling as recorded by the retailer. Returns are counted in units, so one large cancelled order can move a product to the top of the returns ranking.",
};
