<template>
  <header class="header">
    <h1 class="header__title">ROCK MAN ROCKS</h1>
    <div class="header__frame">
      <img class="header__frame--img" alt="Mega Man in mid air" src="../assets/mega_full.png" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: #000;
  height: 10.4vw;
  overflow: hidden;
  padding: 4vh 0 4vh 0;

  &__title {
    color: #c5e4e8;
    font-size: 9.2vw;
    margin: 0;
    padding-left: 2vw;
    text-align: left;
  }

  &__frame {
    animation: slide-in-desktop 3.4s ease-out;
    background: #000;
    border-bottom-left-radius: 100px;
    border-top-left-radius: 20px;
    text-align: left;
    transform: translate(110%, -8.6vw) scale(1.4);

    &--img {
      height: 7vw;
      width: auto;
    }
  }
}

@keyframes slide-in-desktop {
  0% {
    transform: translate(-10%, -8.6vw) scale(1.4);
  }

  20% {
    transform: translate(-10%, -8.6vw) scale(1.4);
  }

  100% {
    transform: translate(110%, -8.6vw) scale(1.4);
  }
}
</style>
