<script>
    import { isMenuOpen, toggleMenu } from "../js/store";
    import Nav from "./Nav.svelte";
    let navHeight = 0;
  </script>
  
  <header class="header">
    <div class="header-container">
      <!-- 로고 섹션 -->
      <div class="logo">
        <span class="small">The</span>
        <div class="word-row">
          <span class="large">Word</span>
          <span class="highlight">Search</span>
        </div>
      </div>
  
      <!-- 메뉴 버튼 -->
      <button class="menu-btn" on:click={() => {
        toggleMenu();
        console.log("Menu state:", $isMenuOpen);  // 상태 로그 확인
        navHeight = $isMenuOpen ? 200 : 0;
      }}>
        Menu
      </button>
  
      <Nav />
    </div>
  </header>
  
  <style>
  /* 공통 스타일 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .header {
    width: 100%;
    padding: 1rem 2rem;
  }
  
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #028080;
  }
  
  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #028080;
  }
  
  .small {
    font-size: 2rem;
    margin-bottom: -0.3rem;
    color: #028080;
  }
  
  .word-row {
    display: flex;
    align-items: center;
  }
  
  .large {
    font-size: 4rem;
    margin-right: 0.5rem;
  }
  
  .highlight {
    font-size: 4rem;
    font-weight: bold;
    color: #028080;
    padding: 0 0.5rem;
    margin-left: -15px;
  }
  
  /* 메뉴 버튼 기본 스타일 */
.menu-btn {
    display: none; /* 기본값: 숨기기 */
    height: 50px;
    width: 100px;
    font-size: 1.5rem;
    background-color: #028080;
    color: white;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    }
  
  /* 컨테이너 스타일 */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 2rem auto;
    gap: 2rem;
    padding: 2rem;
    transition: margin-top 0.5s ease-in-out;
  }
  
  img {
    width: 50%;
    height: auto;
    border: 3px solid #028080;
    border-radius: 8px;
  }
    
  /* 반응형 설정 */
  @media (max-width: 768px) {
    .menu-btn {
    display: block; /* 모바일에서 보이기 */
    }
    .container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    img {
      width: 90%;
      margin-bottom: 1.5rem;
    }
  
    .description-box {
      width: 90%;
    }
  }
  </style>
  