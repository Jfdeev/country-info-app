# Country Info

This project is a Full-Stack application that displays information about countries, using a backend built with Node.js (Nest.js or Express.js) and a frontend developed with React (Next.js optional). The application consumes external APIs to provide country data, including borders, population, and flag images.

## 🚀 Technologies Used

### Backend:
- Node.js (Nest.js or Express.js)
- TypeScript

### Frontend:
- React.js
- TypeScript
- Next.js (optional)

## 📌 Features

### Backend (API)
- **Get available countries**: Endpoint that returns a list of available countries.
- **Get detailed information about a specific country**:
  - List of bordering countries.
  - Historical population data.
  - Country flag image URL.

### Frontend
- **Country List Page**:
  - Displays the list of available countries.
  - Each country is clickable and navigates to the details page.
- **Country Information Page**:
  - Displays the country name, flag, neighboring countries, and a population graph.
  - Neighboring countries are clickable and navigate to their respective pages.
  - Population graph representing growth over time.

## 📂 Project Structure
```
root/
│── backend/   # Backend code
│── frontend/  # Frontend code
│── README.md  # Project documentation
```

## ⚙️ Environment Setup

### Prerequisites
- Installed Node.js (recommended version: 18+)
- npm or yarn package manager

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   BASE_URL_NAGER=https://date.nager.at/api/v3
   BASE_URL_COUNTRIESNOW=https://countriesnow.space/api/v0.1
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the variable:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## 🛠 Code Quality
- ESLint and Prettier configured to maintain code quality.
- Code is automatically formatted before commits.

## 📜 API Documentation
- **Country List API**: [Nager.Date API Documentation](https://date.nager.at/swagger/index.html)
- **Country Info API**: [Postman Country Info API Documentation](https://documenter.getpostman.com/view/1134062/T1LJjU52)

## 🎯 Testing the Application
After starting the frontend and backend servers, visit `http://localhost:3000` in your browser to view the application.

## 📄 License
This project is licensed under the MIT License.

