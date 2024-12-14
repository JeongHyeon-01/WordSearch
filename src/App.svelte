<script>
  import Router from 'svelte-spa-router';
  import Main from './pages/Main.svelte';
  import Maker from './pages/Maker.svelte';
  import GameMain from './pages/GameMain.svelte';
  import "./css/style.css";
  import { toggleMenu } from './js/store';

  const routes = {
    "/": Main,
    "/maker": Maker,
    "/game": GameMain,
    "*": () => {
      window.location.hash = "/";
    },
  };
</script>

<Router {routes} />
