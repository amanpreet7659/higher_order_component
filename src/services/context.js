import { createContext } from "react";

const MyContext = createContext()
const Provider = MyContext.Provider
const Consumer = MyContext.Consumer
export { MyContext, Provider, Consumer }