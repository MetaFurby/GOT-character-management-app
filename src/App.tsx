import { RouterProvider } from "react-router-dom"
import LoadingScreen from "./components/molecules/LoadingScreen"
import createRouter from "./routing/router"

function App() {

  return (
    <>
		<RouterProvider
			router={createRouter()}
			fallbackElement={<LoadingScreen />}
		/>
    </>
  )
}

export default App
