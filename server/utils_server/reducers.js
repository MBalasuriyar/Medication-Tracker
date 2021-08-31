
import { ADD_DRUG, CHANGE_Drug, STOP_Drug } from '../utils/actions';



const randomNum = () => Math.floor(Math.random() * 20000);


const initalState = {
  cars: [
    {
      id: randomNum(),
      brandName: 'Welbutrin',
      drugType: 'antidepressant',
      datePerscribed: '2-6-14',
      isRunning: false,
    },
    {
      id: randomNum(),
      brandName: 'Prozac',
      drugType: 'antidepressant',
      datePerscribed: '3-7-14',
      isRunning: false,
    },
  ]
}
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_DRUG: {
      const newDrugId = state.Drugs[state.Drugs.length - 1].id + 1;
      const newDrug = { ...action.payload, id: newDrugId };

      return {
        ...state,
        Drugs: [...state.Drugs, newDrug],
      };
    }
    case CHANGE_Drug: {
      const DrugIndex = state.Drugs.findIndex((Drug) => Drug.id === action.payload);
      const updatedDrug = { ...state.Drugs[DrugIndex], isRunning: true };

      const DrugsCopy = [...state.Drugs];
      DrugsCopy[DrugIndex] = updatedDrug;

      return {
        ...state,
        Drugs: DrugsCopy,
      };
    }
    case STOP_Drug: {
      const DrugIndex = state.Drugs.findIndex((Drug) => Drug.id === action.payload);
      const updatedDrug = { ...state.Drugs[DrugIndex], isRunning: false };

      const DrugsCopy = [...state.Drugs];
      DrugsCopy[DrugIndex] = updatedDrug;

      return {
        ...state,
        Drugs: DrugsCopy,
      };
    }
    default: {
      return state;
    }
  }
}