<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status // same as status: status
			}
		};
	}
</script>

<script>
	export let message;
	export let status;
</script>

{#if status == 404}
	<!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
	<center>
		<h1>404 Not found</h1>
		<img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width="250" />
	</center>
{:else}
	<img src="https://tenor.com/view/erro-gif-20071624.gif" alt="this slowpoke moves" width="250" />
{/if}
