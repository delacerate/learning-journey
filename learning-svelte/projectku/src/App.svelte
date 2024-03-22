<script>
	let people = [
		// { name: "yoshi", beltColour: "black", age: 25, id: 1 },
		// { name: "akbar", beltColour: "yellow", age: 21, id: 2 },
		// { name: "rossi", beltColour: "white", age: 22, id: 3 },
	];
</script>

<main>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			<p>{person.age} years old, the belt is {person.beltColour}</p>
		</div>
	{:else}<p>there are no people to show</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
