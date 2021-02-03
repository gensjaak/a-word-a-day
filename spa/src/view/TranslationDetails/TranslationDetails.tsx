import React from "react";
import {useParams} from "react-router-dom";
import {translations} from "../../date";

interface Props {
}

export const TranslationDetails: React.FunctionComponent<Props> = () => {
    const {id} = useParams<{ id: string }>();

    const {en, fr, note, creation_date} = translations.find(item => item.id === id)!

    return <div>
        <div>{en}</div>
        <div>{fr}</div>
        <div>{note}</div>
        <div>{creation_date.format('DD/MM/YYYY')}</div>
    </div>
};
