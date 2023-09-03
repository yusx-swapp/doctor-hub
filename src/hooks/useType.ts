import types from "../data/types";
export interface Type {
  id: number;
  name: string;
}

const useType = () => ({ data: types, isLoading: false, error: null })

export default useType;