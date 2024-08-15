# Flip Card Memory Game

## Overview

This project is a memory game built using Flask and vanilla JavaScript. The objective of the game is to match pairs of emoji cards by flipping them over. It features different difficulty levels and sounds to enhance the gameplay experience.

## Project Structure

- `app.py`: The Flask application that serves the game.
- `index.html`: The HTML file that provides the structure of the game board.
- `script.js`: The JavaScript file that handles the game logic and user interactions.
- `styles.css`: The CSS file for styling the game board and cards.
- `audio/`: Directory containing sound files for game interactions.

## Getting Started

### Prerequisites

Make sure you have Python installed on your machine. You will also need to install the required Python packages.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sayahn1610/card_memory.git
   cd card_memory
   ```

2. **Set up a virtual environment (optional but recommended):**

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages:**

   ```bash
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Flask server:**

   ```bash
   python app.py
   ```

2. **Open your web browser and go to:**

   ```
   http://localhost:8080
   ```

   You should see the Flip Card Memory Game interface.

## Gameplay

- **Difficulty Levels**: Choose between easy, medium, and hard difficulty levels using the radio buttons. Each level adjusts the grid size of the game board.
- **Start Game**: Click the "Start Game" button to begin. The game will shuffle and display the cards face down.
- **Matching Cards**: Click on two cards to flip them. If they match, they stay face up; if not, they flip back over after a short delay.
- **Moves Counter**: The number of moves you have made is displayed at the top of the game board.

## File Descriptions

- **`app.py`**: Contains the Flask app which serves the HTML, CSS, JavaScript, and audio files.
- **`index.html`**: HTML structure for the memory game.
- **`script.js`**: JavaScript code managing game logic and interactions.
- **`styles.css`**: CSS styles for the game board and cards.
- **`audio/`**: Contains audio files for swipe, win, and play sounds.

## Contributing

Feel free to open issues or submit pull requests if you have improvements or fixes. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, please reach out to [sayahn1610](https://github.com/sayahn1610).

Enjoy playing the Flip Card Memory Game!
