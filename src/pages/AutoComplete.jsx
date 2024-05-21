import TextInput from "react-autocomplete-input";
import 'react-autocomplete-input/dist/bundle.css';
import LOCATIONS from "@/assets/LOCATIONS.json";
import style from "@/styles/autocomplete-field.module.css";

export const SearchAutoCompletePage = () => {

    return (
        <div className={style.container}>
            <h1>Search Auto Complete</h1>
            <p>This is a search auto complete. Yes, looks awful but it works!</p>
            <TextInput className={style.autocomplete} trigger={""} placeholder="Search locations" options={LOCATIONS} />
        </div>
    )
}