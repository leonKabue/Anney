/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ListingCreateFormInputValues = {
    Location?: string;
    HouseInfo?: string;
    DurationRequired?: string;
    Pictures?: string;
    Price?: number;
};
export declare type ListingCreateFormValidationValues = {
    Location?: ValidationFunction<string>;
    HouseInfo?: ValidationFunction<string>;
    DurationRequired?: ValidationFunction<string>;
    Pictures?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingCreateFormOverridesProps = {
    ListingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    HouseInfo?: PrimitiveOverrideProps<TextFieldProps>;
    DurationRequired?: PrimitiveOverrideProps<TextFieldProps>;
    Pictures?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ListingCreateFormProps = React.PropsWithChildren<{
    overrides?: ListingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ListingCreateFormInputValues) => ListingCreateFormInputValues;
    onSuccess?: (fields: ListingCreateFormInputValues) => void;
    onError?: (fields: ListingCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ListingCreateFormInputValues) => ListingCreateFormInputValues;
    onValidate?: ListingCreateFormValidationValues;
} & React.CSSProperties>;
export default function ListingCreateForm(props: ListingCreateFormProps): React.ReactElement;
