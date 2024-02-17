import { useState } from "react"
import { Button, Card, Input, Label, Spinner } from "../../components"
import { CharacterItem } from "./components"
import { getAllCharacters, getCharactersByName } from "../../services/character.service"
import { Character } from "../../models"
import useCharacters from "../../stores/useCharacters"
import showToast from "../../utilites/showToast"

const Home = () => {
	const [nameQuery, setNameQuery] = useState("")
	const [searchedCharacters, setSearchedCharacters] = useState<Character[]>([]);
	const [loadingCharacters, setLoadingCharacters] = useState(false);
	const { characters : myCharacters } = useCharacters();

	const handleSearch = async () => {
		setLoadingCharacters(true);
		try{
			let characters = []
			if (nameQuery === '')
				characters = await getAllCharacters();
			else
				characters = await getCharactersByName(nameQuery);
			setSearchedCharacters(characters);
			if (characters.length === 0) {
				showToast({
					message: "No characters match the search",
					type: "warning",
				})
			}
			setLoadingCharacters(false);
		}catch(error){
			setLoadingCharacters(false);
			showToast({
				title: "Error",
				message: "Failed fetching characters",
				type: "error",
			});
		}
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if(event.key === 'Enter'){
			handleSearch();
		}
	}

	return (
		<div className="flex flex-wrap md:flex-nowrap justify-center w-full p-[20px] gap-[20px] h-[calc(100vh-100px)]">
			<div className="flex flex-col w-full md:w-1/2">
				<h1 className="text-primary font-bold">Search Characters</h1>
				<Card className="grid grid-cols-3 h-[80px] gap-[20px] mt-[20px]">
					<div className="col-span-2 flex items-center gap-[10px]">
						<Label>Name: </Label>
						<Input value={nameQuery} onKeyDown={handleKeyPress} onChange={(e) => setNameQuery(e.target.value)} />
					</div>
					<Button onClick={handleSearch}>Search</Button>
				</Card>
				<Card className="relative mt-[20px] overflow-scroll h-[100%] flex flex-col gap-[15px]">
					{loadingCharacters && <Spinner className="absolute top-[20px] right-[50%]"/>}
					{searchedCharacters.map((character) => (
						<CharacterItem key={character.id} character={character} />
					))}
				</Card>
			</div>
			<div className="flex flex-col w-full md:w-1/2">
				<h1 className="text-primary font-bold">My Characters</h1>
				<Card className="mt-[20px] overflow-scroll h-[100%] flex flex-col gap-[15px]">
					{myCharacters.length === 0 && <p className="text-center mt-20px">No characters selected</p>}
					{myCharacters.map((character) => (
						<CharacterItem key={character.id} character={character} editable={true} />
					))}
				</Card>
			</div>
		</div>
	)
}

export default Home
