<template>
	<aside class="aside">
		<ul class="aside__list">
			<li class="aside__item" v-for="item in CHARACTERS" :key="item.char_id">
				<router-link class="aside__link" :to="`/character/${item.char_id}`">{{ item.name }}</router-link>
			</li>
		</ul>
	</aside>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: 'AsideLinks',
	computed: {
		...mapGetters(['CHARACTERS'])
	},
	mounted() {
		this.$store.dispatch('GET_CHARACTERS');
	}	
}
</script>

<style lang="scss" scoped>

$main-color: #42b883;

.aside {
	border-right: 2px solid $main-color;
	height: calc(100% - 66px);
	width: 400px;
	overflow-y: auto;

	&__list {
		list-style: none;
		padding-left: 0;
	}

	&__link {
		display: block;
		padding: 15px;
		border-bottom: 2px solid $main-color;
	}
}

</style>