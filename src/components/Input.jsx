function Input({value, handleChange}) {

    return(
        <label htmlFor="list-item">
            Elément à ajouter
        <input value={value} onChange={handleChange} type="text" name="list-item" id="list-item" />
        </label>
    )
}

export default Input;