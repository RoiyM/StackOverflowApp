# Stack Overflow Mobile App

This is a mobile application built using React Native and Expo, providing a user-friendly interface to access the Stack Overflow platform on mobile devices.

## 🚀 How to use

1. Clone the repository:

```sh
git clone https://github.com/RoiyM/StackOverflowApp.git
```

2. Navigate to the project directory:

```sh
cd StackOverflow
```

3. Install the dependencies:

```sh
npm install
```

4. Start the Expo development server:

```sh
npm start
```

## Configuration

To configure the app, you need to provide your own stepzen Api key.

1. Go to stepzen website and create an account to obtain an API key.

2. Once you have the API key, create a new file called .env in the project's root directory.

3. Inside the .env file, add the following line:

```env
API_KEY=your-api-key-goes-here
```

4. Replace your-api-key-goes-here with your actual key.

## Technologies Used

- React Native - A framework for building mobile applications using JavaScript and React.
- Expo - A platform for developing and deploying React Native applications.
- Expo Navigation - A routing and navigation library for React Native Expo applications.
- Stack Exchange API - An API provided by Stack Overflow for accessing their platform's data.
- GraphQL - A flexible query language and runtime for efficient data fetching, improving development speed and performance by enabling clients to request specific data.
- Stepzen - A powerful API composition platform that simplifies the process of integrating and accessing multiple APIs into a single, unified GraphQL API.
