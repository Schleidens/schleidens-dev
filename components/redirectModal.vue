<template>
  <div
    v-if="isVisible"
    class="modal-overlay"
  >
    <div class="modal-content">
      <h2>🚀 New Version Available!</h2>
      <p>
        I've launched V2 of my portfolio. 🎉 Would you like to check it out?
      </p>
      <div class="modal-actions">
        <button
          @click="stayHere"
          class="btn-secondary"
        >
          ✋ Stay on Current Version
        </button>
        <button
          @click="goToV2"
          class="btn-primary"
        >
          👉 Go to V2
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isVisible = ref(true);

  function goToV2() {
    window.location.href = 'https://schleidens.dev';
  }

  function stayHere() {
    isVisible.value = false;
  }
</script>

<style scoped scss>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgb(0 0 0 / 64%);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
  }

  .modal-content {
    background: rgb(252 186 40 / 1);
    color: rgb(35 31 32 / 1);

    padding: 20px;

    text-align: center;
    font-size: 1.25rem;

    max-width: 500px;
    width: 90%;

    box-shadow: 4px 4px 0px 1px rgb(46, 42, 42);
    -webkit-box-shadow: 4px 4px 0px 1px rgb(46, 42, 42);
  }

  .modal-actions {
    margin-top: 20px;

    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }

  .btn-primary {
    padding: 10px 20px;

    background-color: rgb(35 31 32 / 1);
    color: white;

    border: none;

    cursor: pointer;

    box-shadow: 4px 4px 0px 1px rgb(46, 42, 42);
    -webkit-box-shadow: 4px 4px 0px 1px rgb(46, 42, 42);
  }

  .btn-secondary {
    padding: 10px 20px;

    background-color: #6c757da3;
    color: white;

    border: none;

    cursor: pointer;

    box-shadow: 4px 4px 0px 1px rgb(108 117 125 / 32%);
    -webkit-box-shadow: 4px 4px 0px 1px rgb(108 117 125 / 32%);
  }
</style>
