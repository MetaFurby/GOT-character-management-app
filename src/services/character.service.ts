import axios from "axios";
import { APIUrls } from "../constants";
import { Character } from "../models";

const baseUrl = import.meta.env.VITE_BASE_URL;
const characterUrl = baseUrl + APIUrls.CHARACTERS;

export const getAllCharacters = () => {
	return axios.get<Character[]>(characterUrl).then((response) => response.data);
};

export const getCharacterById = (id: number) => {
	return axios.get<Character>(`${characterUrl}/${id}`).then((response) => response.data);
};

//The API doesn't support query params using the firstName or lastName, therefore the filtering is made at the response level
export const getCharactersByName = (name: string) => {
	return axios.get<Character[]>(characterUrl).then((response) => response.data.filter(item => item.fullName.toLowerCase().includes(name.toLowerCase())));
};