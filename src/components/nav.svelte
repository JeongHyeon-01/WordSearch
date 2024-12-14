<script>
    import { isMenuOpen, toggleMenu } from "../js/store";
  </script>
  
  
  <!-- 내비게이션 메뉴 -->
  <nav class="nav" class:open={$isMenuOpen} class:close={!$isMenuOpen}>
    <a href="/" class="nav-item" class:item-open={$isMenuOpen}>Home</a>
    <a href="/maker" class="nav-item" class:item-open={$isMenuOpen}>Games</a>
    <a href="/about" class="nav-item" class:item-open={$isMenuOpen}>About</a>
    <a href="/contact" class="nav-item" class:item-open={$isMenuOpen}>Contact</a>
  </nav>
  
  <style>
  /* 내비게이션 기본 스타일 */
  .nav {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-item {
    font-size: 1.2rem;
    color: black;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }
  
  .nav-item:hover {
    background-color: #028080;
    color: white;
  }
  
  /* 모바일 메뉴 스타일 */
  @media (max-width: 768px) {
    .nav {
      display: none; /* 기본적으로 숨기기 */
    }
  
    .nav.open {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      position: absolute;
      top: 110px;
      left: 90px;
      width: 500px;
      height: 200px;
      border: 1px solid #028080;
      border-top: none;
    }
  
    .nav.close {
      display: none;
    }
  
    .nav-item.item-open {
      padding-bottom: 5px;
      border-bottom: 1px solid #028080;
    }
  }
  </style>
  