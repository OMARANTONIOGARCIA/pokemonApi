export class pokemonResponse{
    
    abilities?: any[];
	base_experience?: number;
	forms?: any[];
	game_indices?: any[];
	height?: number;
	held_items?: any[];
	id?: number;
	is_default?: any;
	location_area_encounters?: any;
	moves?: any[];
	name?:string;
	order?: string;
	past_types?: any[];
	species?: any;
	sprites?: any;
	stats?: any[];
	types?: any[];
	weight?: number;
}

export class habilidadesReponse{
	effect?:any;
	language?: any;
	short_effect?:string;
}

export class Pokemon{
	name?:string;
}