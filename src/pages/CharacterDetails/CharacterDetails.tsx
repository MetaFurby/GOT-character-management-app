import { useParams } from "react-router-dom";
import useCharacters from "../../stores/useCharacters";
import { Card, LoadingScreen } from "../../components";
import { getCharacterById } from "../../services/character.service";
import { useEffect, useState } from "react";
import { Character } from "../../models";

const CharacterDetails = () => {
	const { id } = useParams();
	const { getCharacter } = useCharacters();
	const [character, setCharacter] = useState<Character | undefined>(undefined);
	const [loading, setLoading] = useState(true);
	const [isListed, setIsListed] = useState(false);

	//Due to strict mode, useEffect is called twice in dev mode
	useEffect(() => {
		if (id != null) {
			fetchCharacter(Number(id));
		}
	}, [id])

	const fetchCharacter = async (id: number) => {
		setLoading(true);
		let auxCharacter = getCharacter(Number(id));
		if (!auxCharacter) {
			try {
				auxCharacter = await getCharacterById(id);
				setLoading(false);
			} catch (error) {
				setLoading(false);
			}
		} else {
			setIsListed(true);
			setLoading(false);
		}
		setCharacter(auxCharacter);
	}
	
	if (character == null && !loading) return (
		<>
			<h1 className="mt-[20px] text-primary text-center">Character not found</h1>
		</>
	)
	if (loading) {
		return (<LoadingScreen />)
	}
	return (
		<div className="lex flex-wrap md:flex-nowrap justify-center p-[20px] w-full h-[calc(100vh-100px)]">
			<h1 className="text-primary font-bold">Characters Details</h1>
			<Card className="flex flex-col text-center gap-[20px] mt-[20px] p-[20px]">
				<h1 className="w-full text-black text-center font-bold">{character?.fullName}</h1>
				<img className="mb-[20px] mx-auto sm:w-[400px] sm:h-[400px]" src={character?.imageUrl} alt={character?.fullName} />
				<h3 className="font-bold">Family: <span className="font-medium">{character?.family}</span></h3>
				<h3 className="font-bold">Title: <span className="font-medium">{character?.title}</span></h3>
				<h3 className="font-bold">Is in my list: <span className="font-medium">{isListed? 'yes' : 'no'}</span></h3>
			</Card>
		</div>
	)
}

export default CharacterDetails