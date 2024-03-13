function Input({value, handleChange}) {

    return(
        <label htmlFor="list-item">
            Elément à ajouter
        <input onChange={handleChange} type="text" name="list-item" id="list-item" />
        </label>
    )
}

export default Input;