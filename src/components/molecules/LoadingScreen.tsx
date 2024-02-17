import Spinner from "../atoms/Spinner"

const LoadingScreen = () => {
  return (
	<div
		className="grid h-screen place-items-center">
		<div className="flex flex-col items-center">
			<h1 className="mb-6 text-3xl font-bold text-cyan-50">Loading</h1>
			<Spinner/>
		</div>
	</div>
  )
}

export default LoadingScreen