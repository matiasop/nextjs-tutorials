import { useRouter } from 'next/router'

function Document() {
	// This is a "catch all route"
	// That means we can put whatever we want in the url after /docs/
	// Example: /docs/feature1, /docs/feature1/concept1/
	const router = useRouter();

	// params is an array with the route
	const { params = [] } = router.query;
	console.log(params);

	if (params.length === 2) {
		return (
			<h1>Viewsing docs for feature {params[0]} and concept {params[1]}</h1>
		)
	} else if (params.length === 1) {
		return (
			<h1>Viewing docs for feature {params[0]}</h1>
		)
	}

	return (
		<h1>Docs Home Page</h1>
	)
}

export default Document;