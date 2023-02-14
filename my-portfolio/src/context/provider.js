import MyContext from "./context";

function Provider({ children }) {
    const obj = {}

    return (
        <MyContext.Provider value={ obj }>
            { children }
        </MyContext.Provider>
    )
}

export default Provider;
