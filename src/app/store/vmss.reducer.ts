import { createReducer, on } from "@ngrx/store";
import * as VmssActions from "./vmss.actions";

const initialState: Record<string, string> = {};

export const vmssReducer = createReducer(
    initialState,
    on(VmssActions.getVmssVmStatusSuccess, (state, action) => { 
        return action.status
    }),
    on(VmssActions.testKeyVaultAccessSuccess, (state, action) => { 
        return action.status
    }),
)