import { Link } from "react-router-dom"
import { PublicRoutes } from "../../../constants"
import { Character } from "../../../models";
import useCharacters from "../../../stores/useCharacters";
import { useState } from "react";
import { Button, Input, Label } from "../../../components";
import showToast from "../../../utilites/showToast";

export type CharacterItemProps = {
	character: Character;
	editable?: boolean;
};

export default function CharacterItem({ character, editable = false }: CharacterItemProps) {
	const { characters, addCharacter, removeCharacter, updateCharacter } = useCharacters();
	const [editMode, setEditMode] = useState(false);
	const [characterData, setCharacterData] = useState<Character>(character);

	const validateCharacter = () => {
		if(characterData.firstName === '' || characterData.lastName === '' || characterData.family === '' || characterData.title === '')
			return false;
		return true;
	}
	const handleAdd = (e :  React.MouseEvent) => {
		e.preventDefault();
		addCharacter(character);
		showToast({title: "Success", message: "New character added", type: "success"});
	}

	const handleEdit = (e :  React.MouseEvent) => {
		e.preventDefault();
		setEditMode(true);
	}

	const handleSave = (e :  React.MouseEvent) => {
		e.preventDefault();
		if (!validateCharacter()) {
			showToast({title: "Error", message: "Character has empty values", type: "error"});
			return;
		}
		updateCharacter(characterData);
		setEditMode(false);
		showToast({title: "Success", message: "Character updated", type: "success"});
	}

	const handleDelete = (e :  React.MouseEvent) => {
		e.preventDefault();
		removeCharacter(character.id);
		showToast({title: "Success", message: "Character removed", type: "success"});
	}

	const handleInputChange = (e :  React.ChangeEvent<HTMLInputElement>) => {
		const {id, value} = e.target;
		switch (id){
			case 'firstName':
				setCharacterData({...characterData, firstName: value, fullName: `${value} ${characterData.lastName}`});
				break;
			case 'lastName':
				setCharacterData({...characterData, lastName: value, fullName: `${characterData.firstName} ${value}`});
				break;
			case 'title':
				setCharacterData({...characterData, title: value});
				break;
			case 'family':
				setCharacterData({...characterData, family: value});
				break;
		}
	}

	return (
		<Link className="grid grid-cols-4 gap-[20px] border-[1px] border-ashes rounded-[5px] p-[20px]" to={PublicRoutes.CHARACTER_DETAILS.replace(":id", character.id.toString())}>
			<img src={character.imageUrl} alt={character.fullName} className="w-[100px] h-[100px]"/>
			{!editMode && 
				<div className="flex flex-wrap justify-center text-center col-span-2">
					<h3 className="font-bold w-full">{character.fullName}</h3>
					<p className="w-full">{character.title}</p>
					<p className="w-full">{character.family}</p>
				</div>
			}
			{editMode && 
				<div className="flex flex-col gap-[30px] mb-[20px] col-span-2">
					<div>
						<Label htmlFor="firstName" onClick={(e) => e.preventDefault()}>First Name</Label>
						<Input id="firstName" onClick={(e) => e.preventDefault()} onChange={handleInputChange} value={characterData.firstName}/>
					</div>
					<div>
						<Label htmlFor="lastName" onClick={(e) => e.preventDefault()}>Last Name</Label>
						<Input id="lastName" onClick={(e) => e.preventDefault()} onChange={handleInputChange} value={characterData.lastName}/>
					</div>
					<div>
						<Label htmlFor="title" onClick={(e) => e.preventDefault()}>Title</Label>
						<Input id="title" onClick={(e) => e.preventDefault()} onChange={handleInputChange} value={characterData.title}/>
					</div>
					<div>
						<Label htmlFor="family" onClick={(e) => e.preventDefault()}>Family</Label>
						<Input id="family" onClick={(e) => e.preventDefault()} onChange={handleInputChange} value={characterData.family}/>
					</div>
				</div>
			}
			{editable && (
				<div className="flex flex-col justify-center gap-[10px]">
					{!editMode && <Button onClick={handleEdit}>Edit</Button>}
					{editMode && <Button onClick={handleSave}>Save</Button>}
					<Button onClick={handleDelete}>Delete</Button>
				</div>
			)}
			{!editable && (
				<div className="flex gap-[10px]">
					<Button className="w-full" disabled={characters.some((c) => c.id === character.id)} onClick={handleAdd}>Add</Button>
				</div>
			)}
		</Link>
	)
}