# AI Integration Course

This repository contains the frontend code for the AI Integration Course platform, a comprehensive educational resource for learning AI integration strategies.

## Development Requirements

### Node.js Version Requirement
**Important**: This project requires Node.js 18.x for development and building. 

Node.js 20.x and 22.x may cause compatibility issues with this project. Please ensure you're using Node.js 18.x (specifically 18.19.0) before attempting to build or develop.

**Future Migration Note**: Node.js 18.x will be retiring on August 1st, 2025. A migration to Node.js 20.x is planned before that date.

To check your Node.js version:
```bash
node --version
```

To install or switch to Node.js 18.x:
- Using nvm (recommended):
  ```bash
  nvm install 18.19.0
  nvm use 18.19.0
  ```
- Using n:
  ```bash
  npm install -g n
  n 18.19.0
  ```

### Environment Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` with your Firebase configuration

## Vercel Deployment Instructions

When deploying to Vercel, ensure the following settings:

1. **Node.js Version**: Set the Node.js version to 18.x in your Vercel project settings
   - Go to Project Settings > General > Node.js Version
   - Select 18.x from the dropdown

2. **Environment Variables**: Add all required Firebase environment variables
   - REACT_APP_FIREBASE_API_KEY
   - REACT_APP_FIREBASE_AUTH_DOMAIN
   - REACT_APP_FIREBASE_PROJECT_ID
   - REACT_APP_FIREBASE_STORAGE_BUCKET
   - REACT_APP_FIREBASE_MESSAGING_SENDER_ID
   - REACT_APP_FIREBASE_APP_ID

3. **Build Command**: Use the following build command:
   ```
   CI= npm run build
   ```

4. **Output Directory**: Set to `build`

5. **Framework Preset**: Set to "Create React App"

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Project Structure

- `/src`: Source code
  - `/components`: React components
  - `/context`: React context providers
  - `/pages`: Page components
  - `/firebaseService.ts`: Firebase service functions
  - `/firebaseConfig.ts`: Firebase configuration
  - `/mockCourseData.ts`: Mock course data for development

## License

© 2025 AI Integration Course. All rights reserved.
