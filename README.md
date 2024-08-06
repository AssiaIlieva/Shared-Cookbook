# Shared Cookbook

**Shared Cookbook** is a personal final project for the SoftUni ReactJS June 2024 course. It is a web application where users can share and explore recipes, cooking tips, and hacks.

## 📋 Table of Contents

- [Shared Cookbook](#shared-cookbook)
  - [📋 Table of Contents](#-table-of-contents)
  - [📖 Overview](#-overview)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [🚀 Installation and Setup](#-installation-and-setup)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install Dependencies](#2-install-dependencies)
    - [3. Start the Application](#3-start-the-application)
      - [1. Terminal 1: Start the Client](#1-terminal-1-start-the-client)
      - [2. Terminal 2: Start the Server](#2-terminal-2-start-the-server)
  - [🌐 Visit the App](#-visit-the-app)
  - [💡 Usage](#-usage)
  - [📝 Features](#-features)
  - [📸 Screenshots](#-screenshots)
    - [🏠 Home Page](#-home-page)
    - [🍲 Recipes Page](#-recipes-page)
    - [📋 Recipe Details Page](#-recipe-details-page)
    - [💡 Tips Page](#-tips-page)
    - [📝 Tips Details Page](#-tips-details-page)
  - [📜 License](#-license)

## 📖 Overview

**Shared Cook-book** is a comprehensive platform that allows users to:

- Share and discover recipes.
- Share and explore cooking tips and hacks.

The application provides an engaging and interactive experience for users who are passionate about cooking and want to expand their culinary knowledge.

## 🛠️ Technologies Used

This project utilizes the following technologies and libraries:

- **React.js**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime for running the server-side code.
- **SoftUni Practice Server**: Backend server used for managing data and authentication. For more details, visit the [SoftUni Practice Server GitHub repository](https://github.com/softuni-practice-server/softuni-practice-server).
- **Vite**: A modern build tool used to set up and bundle the React client application.
- **React Router DOM**: A library for handling routing in the React application.
- **Free CSS Templates**: UI assets sourced from [Free CSS](https://www.free-css.com/free-css-templates/page190/html-14) for a polished design.

## 🚀 Installation and Setup

To get started with **Shared Cook-book**, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine. You will need Node.js and npm installed globally on your machine.

```bash
https://github.com/AssiaIlieva/Shared-Cookbook
```

Alternatively, you can download the project as a ZIP file from [here](https://github.com/AssiaIlieva/Shared-Cookbook/archive/refs/heads/main.zip).

### 2. Install Dependencies

Install the dependencies for the client application:

```bash
cd client
npm install
```

### 3. Start the Application

You need to use two terminal windows to start the application:

#### 1. Terminal 1: Start the Client

```bash
cd client
npm run dev
```

#### 2. Terminal 2: Start the Server

```bash
cd server
node server.js
```

## 🌐 Visit the App

Open your browser and go to the following URL to access the application:
http://localhost:5173/

## 💡 Usage

- **Explore Recipes and Tips:** Browse through a variety of recipes and cooking tips. Non-logged-in users can explore content but have limited interactions.
- **Search Functionality:** Search for recipes and tips by type.
- **Share Recipes and Tips:** Registered users can contribute their own recipes and cooking tips.
- **Interact with Content:**
  - **For Non-Logged-In Users:** Can browse, search, but cannot like, comment, or manage content.
  - **For Logged-In Users:**
    - Can comment on recipes multiple times.
    - Can like otherusers' tips once.
    - Can comment on their own recipes.
    - Can edit and delete their own recipes.
    - Cannot like their own tips, but can edit or delete them.
- **Home Page Highlights:** The home page displays the three most recently added recipes and the three most recently added cooking tips.

## 📝 Features

- **Recipe Sharing:** Users can share their own recipes and explore others' recipes.
- **Cooking Tips:** Browse and contribute cooking tips and hacks.
- **Search Functionality:** Search for recipes and tips based on type.
- **User Authentication:** Secure login and registration for users to manage their contributions.
- **Content Management for Logged-In Users:**
  - Comment on and manage own recipes.
  - Edit and delete own recipes and tips.
- **Content Viewing for Non-Logged-In Users:** Browse and search recipes and tips without account access.
- **Home Page Preview:** View the latest three recipes and tips directly on the home page.

## 📸 Screenshots

### 🏠 Home Page

Here's a screenshot of the Home Page:

![Home Page](https://github.com/AssiaIlieva/Shared-Cookbook/blob/main/client/public/images/home-page.PNG)

### 🍲 Recipes Page

Here's a screenshot of the Recipes Page:

![Recipes Page](https://github.com/AssiaIlieva/Shared-Cookbook/blob/main/client/public/images/recipes-page.PNG)

### 📋 Recipe Details Page

Here's a screenshot of the Recipe Details Page:

![Recipe Details Page](https://github.com/AssiaIlieva/Shared-Cookbook/blob/main/client/public/images/recipes-details-page.PNG)

### 💡 Tips Page

Here's a screenshot of the Tips Page:

![Tips Page](https://github.com/AssiaIlieva/Shared-Cookbook/blob/main/client/public/images/tips-page.PNG)

### 📝 Tips Details Page

Here's a screenshot of the Tips Details Page:

![Tips Details Page](https://github.com/AssiaIlieva/Shared-Cookbook/blob/main/client/public/images/tips-details-page.PNG)

## 📜 License

For information about the license, please see the [LICENSE](https://github.com/AssiaIlieva/Shared-Cookbook/blob/main/LICENCE.md)file.
