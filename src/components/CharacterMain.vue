<template>
	<main class="main">
		<div class="main-card">
			<pre>
				<h1 style="font-size: 15px">{{ this.$route }}</h1>
			</pre>
			<img class="main-photo" :src="`${currentCharacter.img}`" alt="">
			<p class="main-name">Имя: {{ currentCharacter.name }}</p>
			<p class="main-birthday">Дата рождения: {{ currentCharacterBirthday == 'Unknown' ? 'Неизвестно' : currentCharacterBirthday }}</p>
		</div>
	</main>
	
</template>

<script>

export default {

	name: 'CharacterMain',
	props: {
		mainlist: Array
	},
	data() {
		return {
			id: this.$route.params['id'],
		}
	},
	computed: {
		currentCharacter() {
			return this.mainlist[this.id - 1];
		},
		currentCharacterBirthday() {
			return this.currentCharacter.birthday.replaceAll('-', '.')
		}
	},
	watch: {
		$route(toRoute) {
			this.id = toRoute.params.id
		}
	},
}
</script>

<style lang="scss" scoped>

$main-color: #42b883;

.main {
	padding: 30px;
  width: calc(100% - 400px);
	height: calc(100% - 66px);
	overflow-y: scroll;
}

.main-photo {
	max-width: 200px;
	width: 100%;
}

</style>