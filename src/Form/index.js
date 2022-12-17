import "./style.css";

const Form = () => (
    <form className="form">
        <label>
            <input className="form__input" type="text" placeholder="Co jest do zrobienia?" autofocus />
        </label>
        <label>
            <button className="form__button ">Dodaj zadanie</button>
        </label>
    </form>
);

export default Form;