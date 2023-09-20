# Stock Market Notification System

Description: A stock market notification system implemented using the MERN stack.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Hosted](#hosted)

## Overview
The Stock Market Notification System is a web application that allows users to receive notifications about stock prices. It provides stock data from NSE and BSE stock exchanges and allows users to set alerts for specific stocks.

## Features
- User-friendly interface to view stock prices and set alerts
- Push notifications for price alerts
- Ability to turn off alerts for specific stocks
- Backend API for managing stock and alert data

## Installation
Follow these steps to set up the Stock Market Notification System:

1. Clone the repository: `git clone https://github.com/NikBK/stock-market-notification-system.git`
2. Install dependencies for the server: `cd server && npm install`
3. Install dependencies for the client: `cd ../client && npm install`
4. Configure environment variables:
   - Create a `.env` file in the `server` directory
   - Set the required environment variables (e.g., database connection string, PORT, backend url)
5. Start the server: `cd ../server && npm start`
6. Start the client: `cd ../client && npm start`
7. Access the application in your web browser at `http://localhost:3000`
8. Backend can be accessed at 'http://localhost:5000' or 5500 if PORT is not mentioned in the .env file.

## Usage
- Upon accessing the application, users will be prompted to allow push notifications.
- Users can view stock prices for NSE and BSE stocks in separate columns.
- For each stock, users can see the stock name, price, and an option to set an alert when the current price exceeds the previous price.
- Users can turn off alerts for specific stocks if they are no longer interested.
- Backend updates to stock prices trigger push notifications to subscribed users.

## Technologies
- Backend:
  - Node.js
  - Express.js
  - MongoDB
- Frontend:
  - React.js
  - Tailwind CSS

## Hosted

https://stock-market-notification-system-client.vercel.app/
