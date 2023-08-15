# NodeWeatherApp
Weather App is a Node.js application that allows you to check the weather forecast. This application utilizes the OpenWeather API to fetch updated weather conditions for various locations.

## Description

NodeWeatherApp is a Node.js application that allows you to check the weather forecast. This application utilizes the Weather Forecast API to fetch updated weather conditions for various locations.

![imagen](https://github.com/EvilUser10/NodeWeatherApp/assets/108999274/75d3aadd-78dc-4d3a-bd27-429beb8ae56e)


## Installation

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/your_username/weather-app.git
   ```

2. Navigate to the project directory.
   ```bash
   cd weather-app
   ```

3. Install the dependencies using npm.
   ```bash
   npm install autoprefixer concurrently tailwindcss express ejs
   npm install nodemon --save-dev
   ```

## Usage

1. Run the application in development mode (with automatic restart).
   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

3. Enter the location for which you want to check the weather forecast and press the "Submit" button.

## Configuration

The project configuration can be found in the `package.json` file.

### Scripts

- `start-watch`: Launches the application using nodemon for automatic restart when code changes occur.
- `tailwind:css`: Compiles Tailwind CSS styles and saves them to the output directory.
- `dev`: Runs both `start-watch` and `tailwind:css` concurrently using the `concurrently` package.

### Main Dependencies

- `ejs`: Template engine for generating dynamic HTML views.
- `express`: Node.js web framework for building the application's structure.

### Development Dependencies

- `autoprefixer`: Automatically adds browser prefixes to Tailwind CSS-generated styles.
- `concurrently`: Runs multiple commands concurrently in the same terminal.
- `nodemon`: Monitors file changes and automatically restarts the application.
- `tailwindcss`: Usable and customizable CSS framework.

##Credits


- `OpenWeather API`: https://openweathermap.org/
- `Weather Icons`: https://dribbble.com/shots/2531876-Weather-Icons-sketch


---

Enjoy using the Weather App to stay informed about the weather forecast! If you have any questions or suggestions, feel free to get in touch with us. Thank you for using our application!
