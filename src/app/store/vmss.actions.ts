import { createAction, props } from "@ngrx/store";

export const getVmssVmStatus = createAction(
    '[VMSS] Get VMSS VM Status'
);

export const getVmssVmStatusSuccess = createAction(
    '[VMSS] Get VMSS VM Status Success', 
    props<{status: Record<string, string>}>()
);

export const getVmssVmStatusFailure = createAction(
    '[VMSS] Get VMSS VM Status Failure', 
    props<{message: string}>()
);

export const testKeyVaultAccess = createAction(
    '[VMSS] Test Azure Key Vault Access'
);

export const testKeyVaultAccessSuccess = createAction(
    '[VMSS] Test Azure Key Vault Access Success', 
    props<{status: Record<string, string>}>()
);

export const testKeyVaultAccessFailure = createAction(
    '[VMSS] Test Azure Key Vault Access Failure', 
    props<{message: string}>()
);