# Project Documentation

## Project Overview

This project is a web application that integrates a map interface with drawing capabilities, allowing users to add geometries (points, lines, polygons) to the map. When a geometry is created, its WKT (Well-Known Text) representation is automatically filled in a form. Users can then submit this form to a mock backend. The application uses React, OpenLayers for the map, and Material-UI for the user interface.

## Feature

- Create points, lines, and polygons
- Edit existing geometries
- Delete existing geometries
- Submit geometries to a mock backend
- Display a form with the WKT representation of the geometries

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Steps

1. Clone the Repository

   `git clone https://github.com/jagodabie/openLayers-map-application`
   ` cd openLayers-map-application`

2. Install Dependencies
   `npm install`

3. Start the Development Server
   `npm run dev`
   This will start the application on http://localhost:3000.

4. Setup Mock Backend
   Install json-server globally if not already installed:

   `npm install -g json-server`

Start the mock server:

    `json-server --watch db.json --port 3001`

## Usage

1.  Open the application in your browser at http://localhost:3000.
2.  Use the buttons in the menu to select a drawing tool (Point, Line, Polygon).
3.  Draw on the map. The WKT representation of the geometry will be automatically generated.
4.  Submit the form. The WKT will be sent to the mock backend.
5.  An alert will notify you of the form submission result.

## Dependencies

`react`: ^17.0.2
`react-dom`: ^17.0.2
`@mui/material`: ^5.0.0
`ol`: ^6.5.0 (OpenLayers)
`json-server`: ^0.16.3 (for mock backend)
