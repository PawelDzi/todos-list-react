import Input from "../../Input";
import { useQueryParemeter, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

export default () => {
    const query = useQueryParemeter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            >
            </Input>
        </>
    )
}