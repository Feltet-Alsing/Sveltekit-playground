<script lang="ts">
	import { goto } from '$app/navigation';

	function logout() {
		fetch('/pass', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify('logout')
		});

		goto('/');
	}
</script>

<div class="container">Security breached!</div>
<button class="logout" aria-label="Logout" onclick={logout}>Logout</button>

<style>
	.logout {
		background-color: black;
		padding: 12px;
		color: white;
		position: fixed;
		top: 20px;
		right: 20px;
		border-radius: 10px;
		cursor: pointer;
	}

	.logout:hover {
		background-color: rgb(36, 35, 35);
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
		margin: auto;
		font-size: xx-large;
	}
</style>
