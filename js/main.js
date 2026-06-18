(function (ns) {
  function boot() {
    var renderer = ns.ui.createRenderer();
    var arena = ns.battle.createArena({
      canvas: document.getElementById("battleCanvas")
    });
    var game = ns.core.createGame({
      renderer: renderer,
      arena: arena
    });

    game.start();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window.ArchonEngine);
