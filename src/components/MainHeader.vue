<template>
	<header class="header">Breaking Bad</header>
</template>

<script>
export default {
	name: 'MainHeader'
}
</script>

<style lang="scss" scoped>

$main-color: #42b883;

.header {
	text-align: center;
	color: $main-color;
	border-bottom: 2px solid $main-color;
	padding: 20px 15px;
	grid-row: auto;
	width: 100%;
}

</style>