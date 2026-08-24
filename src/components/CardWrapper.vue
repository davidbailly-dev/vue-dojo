<template>
    <div class="card">
        <div class="card-header">
            <slot name="header">
                <h3>Sans titre</h3>
            </slot>
        </div>
        <div class="card-body">
            <slot>
                <p>Contenu vide</p>
            </slot>
        </div>
    </div>
</template>