<template>
    <div class="backdrop">
        <div class="modal">Modal content</div>
    </div>
</template>
<style>
    .backdrop {
        top: 0%;
        left: 0%;
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .modal {
        width: 400px;
        margin: 100px auto;
        padding: 20px;
        border-radius: 10px;
        background: wheat;
    }
</style>