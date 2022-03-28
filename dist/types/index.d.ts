export declare enum RESPONSE_STATUSES {
    SUCCESS = "success",
    CANCEL = "cancel"
}
export declare enum ENVIRONMENT {
    TEST = "test",
    STAGING = "staging",
    PRODUCTION = "production"
}
export interface IResponse {
    status: RESPONSE_STATUSES;
    data: {
        message?: string;
        loan_amount?: string;
        loan_application_referenceno?: string;
        loan_interest?: string;
        loan_product?: string;
        loan_tenure?: string;
    };
}
export interface AdvanclyProps {
    aggregator_id: number;
    bank_account_number: string | number;
    bank_code: string | number;
    borrower_phone: string;
    bvn_number: string;
    aggregator_loan_ref?: string;
    cac_number?: string;
    city: string;
    company_name?: string;
    customer_type: "1" | "2";
    email: string;
    first_name: string;
    gender: string;
    last_name: string;
    photo_url?: string;
    public_key: string;
    residence_address: string;
    state: string;
    product_id: number;
    product_code: string;
    tenure: number;
    customStyles?: {
        buttonBackgroundColor?: string;
        buttonTextColor?: string;
        acceptButtonBackgroundColor?: string;
        acceptButtonTextColor?: string;
        declineButtonBackgroundColor?: string;
        declineButtonTextColor?: string;
        dropdownTextColor?: string;
        dropdownBackgroundColor?: string;
    };
    onCancel: (response: IResponse) => void;
    onSuccess: (response: IResponse) => void;
    autoStart?: boolean;
    showWidget: boolean;
    environment: ENVIRONMENT;
}
