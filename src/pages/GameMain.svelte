<script>
    import { onMount } from 'svelte';
  
    let grid = [];
    let words = ['HOMER', 'MARGE', 'BART', 'LISA', 'MAGGIE'];
    let foundWords = new Set();
    let selectedCells = [];
    let gridSize = 10;
    let isDragging = false;
  
    const generateGrid = () => {
      grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
      words.forEach(placeWord);
      fillEmptySpaces();
    };
  
    const placeWord = (word) => {
      let placed = false;
      while (!placed) {
        let row = Math.floor(Math.random() * gridSize);
        let col = Math.floor(Math.random() * gridSize);
        let dir = Math.random() > 0.5 ? 'H' : 'V';
        if (canPlaceWord(word, row, col, dir)) {
          for (let i = 0; i < word.length; i++) {
            if (dir === 'H') grid[row][col + i] = word[i];
            else grid[row + i][col] = word[i];
          }
          placed = true;
        }
      }
    };
  
    const canPlaceWord = (word, row, col, dir) => {
      if (dir === 'H' && col + word.length > gridSize) return false;
      if (dir === 'V' && row + word.length > gridSize) return false;
      for (let i = 0; i < word.length; i++) {
        if (dir === 'H' && grid[row][col + i] !== '' && grid[row][col + i] !== word[i]) return false;
        if (dir === 'V' && grid[row + i][col] !== '' && grid[row + i][col] !== word[i]) return false;
      }
      return true;
    };
  
    const fillEmptySpaces = () => {
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          if (grid[row][col] === '') {
            grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          }
        }
      }
    };

    const handleMouseDown = (row, col) => {
      isDragging = true;
      selectedCells = [[row, col]];
    };
  
    const handleMouseEnter = (row, col) => {
      if (isDragging && !selectedCells.some(([r, c]) => r === row && c === col)) {
        selectedCells.push([row, col]);
      }
    };
  
    const handleMouseUp = () => {
      isDragging = false;
      const selectedWord = selectedCells.map(([row, col]) => grid[row][col]).join('');
      if (words.includes(selectedWord)) {
        foundWords.add(selectedWord);
      }
      selectedCells = [];
    };
  
    onMount(() => {
      generateGrid();
    });
  </script>

<div class="game-container" role="application" onpointerup={handleMouseUp}>
    <div class="grid" role="grid">
      {#each grid as row, rowIndex}
        {#each row as cell, colIndex}
          <div
            class="cell {foundWords.has(grid[rowIndex][colIndex]) ? 'found' : selectedCells.some(([r, c]) => r === rowIndex && c === colIndex) ? 'highlight' : ''}"
            role="gridcell"
            onpointerdown={() => handleMouseDown(rowIndex, colIndex)}
            onpointerenter={() => handleMouseEnter(rowIndex, colIndex)}
          >{cell}</div>
        {/each}
      {/each}
    </div>
  
    <div class="word-list">
      <h2>Words to Find</h2>
      {#each words as word}
        <div class="word {foundWords.has(word) ? 'found-word' : ''}">{word}</div>
      {/each}
    </div>
</div>

<style>
    .game-container {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      display: flex;
      gap: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(10, 40px);
      grid-gap: 5px;
      justify-content: center;
    }

    .cell {
      width: 40px;
      height: 40px;
      background: #f9f9f9;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      user-select: none;
    }

    .highlight {
      background: #add8e6;
    }

    .found {
      background: #90ee90;
    }

    .word-list {
      text-align: left;
    }

    .word {
      font-size: 18px;
      margin-bottom: 5px;
    }

    .found-word {
      text-decoration: line-through;
      color: gray;
    }
</style>
