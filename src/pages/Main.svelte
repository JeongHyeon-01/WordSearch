<script>
    import Header from "../components/header.svelte";
    import { isMenuOpen, navHeight } from "../js/store";

  </script>
  
  <Header />
  <div class="container" style="margin-top: {$navHeight}px;">
    <img src="./img/word-search-puzzle-main.png" alt="puzzle" />
    <div class="description-box">
      <div class="inner-box">
        <h1 class="title">Word Search</h1>
        <p>안녕하세요 Word Search 게임입니다.</p>
        <p>
          놀기에도 재미있을 뿐만 아니라 교육적이기도 하여 실제로 많은 교사들이 활용하고 있습니다.
        </p>
        <p>
          퍼즐은 데스크톱 PC, Mac, 모바일 및 태블릿에서 100% 무료로 플레이 할 수 있습니다.
        </p>
      </div>
    </div>
  </div>
  
  <style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 1rem auto;
    gap: 0.5rem;
    padding: 1rem;
  }
  
  img {
    width: 50%;
    height: auto;
    border: 3px solid #028080;
    border-radius: 8px;
  }
  
  /* 설명 박스 */
  .description-box {
    border: 2px solid #028080;
    background: #f8f8f8;
    font-size: 17px;
    width: 40%;
    height: 323px;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* 텍스트 박스 */
  .inner-box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #028080;
  }
  
  /* 반응형 설정 */
  @media (max-width: 768px) {
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
  