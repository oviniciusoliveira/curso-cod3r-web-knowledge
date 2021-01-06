<template>
    <footer class="footer">
        <span>Desenvolvido por <strong>Vinícius Oliveira</strong> © 2021</span>
    </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #dddddd;
  color: #333333;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
