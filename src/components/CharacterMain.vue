<template>
	<main class="main">
		<div class="main-card">
			<div class="main__list" v-for="item in CHARACTERS" :key="item.char_id">
				<div class="main__item" v-show="item.char_id == (id)">
						<img class="main__photo" :src="`${item.img}`" alt="">
						<p class="main__name">Имя: {{ item.name }}</p>
						<p class="main__name">Дата рождения: {{ birthday || '' }}</p>
				</div>
			</div>
			
		</div>
	</main>
	
</template>

<script>
	import {mapGetters} from 'vuex';

export default {

	name: 'CharacterMain',

	data() {
		return {
			id: this.$route.params.id,
		}
	},
	computed: {
		...mapGetters(['CHARACTERS']),
		birthday() {
			const birth = this.CHARACTERS[this.id - 1].birthday.split('-').join('.')
			return birth == 'Unknown' ? 'Неизвестно' : birth || '';
		}
	},
	watch: {
		$route(toRoute) {
			this.id = toRoute.params.id;
		},
	},
	mounted() {
  this.$store.dispatch('GET_CHARACTERS');
	},
}
</script>

<style lang="scss" scoped>

$main-color: #42b883;

.main {
	padding: 30px;
  width: calc(100% - 400px);
	height: calc(100% - 66px);
	overflow-y: auto;
}

.main__photo {
	max-width: 200px;
	width: 100%;
}

</style>