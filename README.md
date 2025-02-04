# Animal Crossing Wiki School Project

## 📌 About
This is a simple Wikipedia-style page for Animal Crossing that fetches data from the Nookipedia API. It lets you browse, search, sort, and save your favorite villagers, bugs, and fish!

## 🛠 How to Install
1. Clone the repo:
   ```sh
   git clone https://github.com/greenwinther/Nookdle.git
   ```
2. Navigate into the project folder:
   ```sh
   cd your-repo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## 🚀 How to Compile & Run
1. To start the project in development mode, run:
   ```sh
   npm run dev
   ```

## 🗂 Folder Structure
```
📁 your-repo/
├── 📁 src/                # Source code
│   ├── 📁 components/     # UI components
│   ├── 📁 styles/         # SCSS styles
│   ├── 📁 types/          # TypeScript types
│   ├── 📄 main.ts         # Main entry point
│   └── 📄 api.ts          # Functions for fetching data
├── 📁 public/             # Static assets
├── 📄 index.html          # Main HTML file
├── 📄 README.md           # This file!
└── 📄 tsconfig.json       # TypeScript config
```

## 🌐 API Info
- **API:** Nookipedia API
- **URLs:**
  - Villagers: `https://api.nookipedia.com/villagers`  
  - Fish: `https://api.nookipedia.com/nh/fish`  
  - Bugs: `https://api.nookipedia.com/nh/bugs`
- **Authentication:** Requires an API key (stored in `apiKey.ts` file declared as API_KEY, which is not uploaded to github)

## 📚 Technologies Used
- **TypeScript** - For type safety
- **SCSS** - For styling
- **Vite** - For fast development
- **Nookipedia API** - For fetching data

## 🔗 Connect with Me
[LinkedIn Profile](https://www.linkedin.com/in/dennis-gren-winther/)

