# Color Changer Web App

# https://colorchangerplayer2002002.netlify.app/
https://codepen.io/player2002002/pen/PoLyzMN

## Overview

The Color Changer web app allows users to change the background color of the page by clicking on buttons. Users can choose from three preset colors (Red, Green, Blue), select a random color, or enter a custom color.

## Features

- **Preset Color Buttons**: Click on either the Red, Green, or Blue button to change the background color accordingly.
- **Random Color Button**: Generates a random color and applies it to the background.
- **Custom Color Input**: Allows users to enter any color of their choice through a prompt and applies it as the background color.

## How to Use

1. **Change to a Preset Color**: Click on one of the color buttons at the top to change the background to Red, Green, or Blue.
2. **Get a Random Color**: Click on the "Random" button to apply a randomly generated color to the background.
3. **Enter a Custom Color**: Click on the "Enter your own" button, input your desired color in the prompt that appears, and the background will change to your custom color.

## Implementation Details

The web app is built with simple HTML, CSS, and JavaScript. The JavaScript file `main.js` contains the logic for changing the background color based on user interaction.

### HTML

- The body contains buttons for each color change action.
- Each button has an `onclick` event that triggers the corresponding function to change the background color.

### CSS

- Buttons are styled for visual appeal.
- Colors are applied to buttons to indicate their action.

### JavaScript

- The `setColor` function changes the background color to a specified color.
- The `randomColor` function generates a random color and applies it to the background as well as the "Random" button itself.

## Source Code

The source code consists of an HTML file that includes inline CSS for styling and JavaScript for functionality. For simplicity and ease of use, all code is contained within a single HTML file, with the JavaScript logic directly embedded.

## Customization

Users can easily customize the app by adding more preset color options or modifying the CSS for a different look and feel.
