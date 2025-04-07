## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/geo-marker.git
cd geo-marker
```

### 2. Install Dependencies

```bash
npm install
```

### 2.1 Update the Google Maps API KEY

Change the value of GOOGLE_MAPS_API in src/lib/constants.ts

### 3. Run the Development Server

```bash
npm run dev
```

# The application will be available at

http://localhost:5173.

### 4. Run the tests

```bash
npm test
```

### Main Functionalities

1. The user can add points to the map.
2. The user can see the order in which points were created on the map.
3. The user can see when each point on the map was created.
4. The user can move the points added to the map.
5. The user can remove a specific point from the map.
6. The user can delete all points from the map.
