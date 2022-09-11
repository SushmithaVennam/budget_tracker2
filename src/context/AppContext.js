import React,{createContext,useReducer} from 'react';

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 50 },
    ],
};

function AppReducer(state,action){
    console.log('dispatched state',state, " dispatched action",action);
    if(action.type==='ADD_EXPENSE'){
        console.log('state.expense is ',state.expenses);
        console.log('action.payload is ',action.payload);

        return {...state,expenses:[...state.expenses,action.payload]}
        
    } else if(action.type==='DELETE_EXPENSE'){
        const expenses=state.expenses.filter((expense)=>action.payload!==expense.id)
        return {...state,expenses:expenses}
    }
    else {
        return state;
    }

    }


export const AppContext = createContext();

export const Appprovider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

//globalState contains budget,expenses,disptach

