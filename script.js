document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const startGameButton = document.getElementById('startGame');
    const difficultyRadioButtons = document.querySelectorAll('.radio-input .input');
    const movesCounter = document.getElementById('movesCounter');
    const swipeSound = document.getElementById('swipeSound');
    const winSound = document.getElementById('winSound');
    const playSound = document.getElementById('playSound');
    
    const emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚',
        '😙', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥳', '😏', '😒', '😞', '😔', '😟',
        '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳',
        '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬',
        '🙄', '😯', '😦', '😧', '😮', '😲', '😴', '🤤', '😪', '😵', '🤐', '🥴', '😷', '🤒', '🤕', '🤢',
        '🤮', '🤧', '😇', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '🙁', '😣', '😖', '😫', '🥺', '😭', '😤',
        '😡', '🤬', '🤯', '😳', '😱', '🥶', '😰', '😥', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑'
    ];
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let moves = 0;
    let matchedPairs = 0;
    
    startGameButton.addEventListener('click', startGame);
    startGameButton.addEventListener('click', () => playSound.play());

    function startGame() {
        gameBoard.innerHTML = '';
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        moves = 0;
        matchedPairs = 0;
        updateMovesCounter();

        const difficulty = getSelectedDifficulty();
        const gridSize = getGridSize(difficulty);
        const cardCount = gridSize * gridSize;
        let cardsArray = generateCardsArray(cardCount);

        // Shuffle the cards
        cardsArray.sort(() => 0.5 - Math.random());

        // Create card elements
        cardsArray.forEach(emoji => {
            const card = document.createElement('div');
            card.classList.add('card');
            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner');
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.textContent = emoji;

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);

            card.dataset.emoji = emoji;
            gameBoard.appendChild(card);
        });

        // Attach event listeners after the cards are created
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.addEventListener('click', flipCard));

        // Apply difficulty-specific classes
        gameBoard.className = `game-board ${difficulty}`;
    }

    function getSelectedDifficulty() {
        const selectedRadioButton = document.querySelector('.radio-input .input:checked');
        return selectedRadioButton ? selectedRadioButton.value : 'easy';
    }

    function generateCardsArray(cardCount) {
        let cardsArray = [];
        const emojiCount = emojis.length;

        for (let i = 0; i < cardCount / 2; i++) {
            const emoji = emojis[i % emojiCount];
            cardsArray.push(emoji, emoji);
        }

        return cardsArray;
    }

    function getGridSize(difficulty) {
        switch (difficulty) {
            case 'medium':
                return 8;
            case 'hard':
                return 16;
            case 'easy':
            default:
                return 4;
        }
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');
        swipeSound.play();

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;
        moves++;
        updateMovesCounter();

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        matchedPairs++;
        
        if (matchedPairs === emojis.length / 2) {
            winSound.play();
            console.log('All pairs matched! Playing win sound.');
        }

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function updateMovesCounter() {
        movesCounter.textContent = `Moves: ${moves}`;
    }
});
