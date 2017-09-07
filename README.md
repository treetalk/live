# Tree Talk Live!

Treetalk /live is the most recent version of the Tree Talk web app.

# Goals
Tree Talk addresses three primary motivations:
- **Exploration** ("how do I find out more?")
- **Discovery** ("what's happening around my area?")
- **Contribution** ("how can I get involved?") 

### Actions
These motivations are grouped into three areas, the Tree Talk core actions - **Connect**, **Create**, and **Conserve**:
- **Connect** facilitates exploration, discovery, and contribution to locally sourced environmental science and data
- **Create** facilitates exploration, discovery, and contribution to creative calls-to-action and events
- **Conserve** facilitates exploration, discovery, and contribution to a library of ways to personally track behavior change and contribute to a more vibrant, verdant community

### Principles
We'll design and develop the app following four principles:
- **Based** **in** **place**: grounded in physical space and local communities, focused on geospatial awareness
- **Diverse** **by** **nature**: inspired by nature, designed for inclusion, accessible to everyone
- **Real**, **simple**: actively meet users where they are, highlight everyday actions 
- **Connected**, **relevant**: support pre-existing community networks and goals, integrate proven standards and metrics

### Views
The web app will have four primary views - **Details**, **Map**, **Mosaic**, and **Social**:
- The **Details** view provides functionality for creating, reading, updating, and removing items within each of the core actions (Connect, Create, and Conserve)
- The **Map** view provides a way to access items based on their location. Selecting an item through the Map view brings up the item's Detail view.
- The **Mosaic** view provides a way to access items based on a sortable and filterable grid of thumbnail images for all items within the filter. Selecting an item through the Mosaic view brings up the item's Detail view.
- The **Social** view displays a Twitter embed filtered on the #treetalk hashtag, combined with core-action modifiers, e.g., "#treetalk #connect", "#treetalk #create", or "#treetalk #conserve" 

### Development
We'll focus app development and tool selection on the modern web and its evolving options, tools, and processes, e.g., React + friends, TDD. For mapping, we'll use Mapbox or a similar WebGL-powered tool (ArcGIS Online, Leaflet, OpenLayers) for awesome mobile-friendly map experiences. 

Starting out, **Connect** data will draw primarily from the iNaturalist API and **Create** data will draw primarily from the Meetup API. We'll use Open Street Map for storing relevant spatial data. We'll develop the project in the open here on GitHub using the opensource.guides for best practices.
