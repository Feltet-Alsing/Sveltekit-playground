<script lang="ts">
	import { goto } from '$app/navigation';

	let value = $state('');

	function add(n: number) {
		if (value.length < 6) {
			value += n;
		}
	}

	$effect(() => {
		if (value.length === 6) {
			returnKey(Number(value));
			value = '';
		}
	});

	function returnKey(n: number) {
		fetch('/pass', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ passKey: n })
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					goto('./main');
				} else {
					value = '';
				}
			});
	}
</script>

<div class="parent p-4">
	<input
		placeholder="Insert pin"
		readonly
		class="input btn1"
		bind:value
		type="number"
		onkeydown={(e) => {
			if (e.key === '1') add(1);
			if (e.key === '2') add(2);
			if (e.key === '3') add(3);
			if (e.key === '4') add(4);
			if (e.key === '5') add(5);
			if (e.key === '6') add(6);
			if (e.key === '7') add(7);
			if (e.key === '8') add(8);
			if (e.key === '9') add(9);
			if (e.key === '0') add(0);
			if (e.key === 'Enter') confirm();
		}}
	/>
	<button onclick={() => add(1)} class="key btn2">1</button>
	<button onclick={() => add(2)} class="key btn3">2</button>
	<button onclick={() => add(3)} class="key btn4">3</button>
	<button onclick={() => add(4)} class="key btn5">4</button>
	<button onclick={() => add(5)} class="key btn6">5</button>
	<button onclick={() => add(6)} class="key btn7">6</button>
	<button onclick={() => add(7)} class="key btn8">7</button>
	<button onclick={() => add(8)} class="key btn9">8</button>
	<button onclick={() => add(9)} class="key btn10">9</button>
	<button onclick={() => (value = '')} class="key btn12">Clear</button>
	<button
		onclick={() => {
			returnKey(Number(value));
		}}
		class="key btn11">Submit</button
	>
	<button onclick={() => add(0)} class="key btn13">0</button>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: 8px;
		box-shadow:
			rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
			rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		border-radius: 5px;
	}

	.input {
		text-align: center;
		font-size: xx-large;
		background-color: #ededed;
		border-radius: 12px;
	}

	.key {
		width: 140px;
		height: 100px;
		background-color: rgb(103, 137, 137);
		color: white;
		border-radius: 10px;
	}

	.btn1 {
		grid-column: span 3 / span 3;
	}

	.btn2 {
		grid-row-start: 2;
	}

	.btn3 {
		grid-row-start: 2;
	}

	.btn4 {
		grid-row-start: 2;
	}

	.btn5 {
		grid-row-start: 3;
	}

	.btn6 {
		grid-row-start: 3;
	}

	.btn7 {
		grid-row-start: 3;
	}

	.btn8 {
		grid-row-start: 4;
	}

	.btn9 {
		grid-row-start: 4;
	}

	.btn10 {
		grid-row-start: 4;
	}

	.btn12 {
		grid-row-start: 5;
	}

	.btn13 {
		grid-row-start: 5;
	}
</style>
