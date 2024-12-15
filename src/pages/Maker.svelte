<script>
    import Header from "../components/header.svelte";
    import { isMenuOpen, navHeight } from "../js/store"
  </script>
  
  <Header/>
  <div class="container" style="margin-top: {$navHeight}px;">
      <div class="description">
          10~30단어를 제공하기만 하면 원하는 주제에 대해 나만의 단어 검색 게임을 만들 수 있습니다.
          제출하면 게임이 생성됩니다 메인 화면으로 가서 주제별 게임을 선택해주세요
      </div>
      <form action="">
          <div class="input_group">
              <label for="title">타이틀</label>
              <input type="text" name="title" id="title" placeholder="게임 타이틀 입력">
          </div>
          <div class="input_group">
              <label for="description">설명</label>
              <input type="text" name="description" id="description" placeholder="게임 설명 입력">
          </div>
          <div class="input_group word_list">
              <label>Word List</label>
              {#each Array(10) as _, index}
                <input type="text" name="word" placeholder={`단어 ${index + 1}`}>
              {/each}
          </div>
          <button type="submit" class="submit_btn">게임 생성</button>
      </form>
  </div>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  
    .description {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  
    form {
      width: 100%;
    }
  
    .input_group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
  
    label {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #333;
    }
  
    input[type="text"] {
      padding: 0.8rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .word_list input[type="text"] {
      margin-top: 0.5rem;
    }
  
    .submit_btn {
      width: 100%;
      padding: 0.8rem;
      font-size: 1rem;
      color: white;
      background: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
    }
  
    .submit_btn:hover {
      background: #0056b3;
    }
  </style>
  