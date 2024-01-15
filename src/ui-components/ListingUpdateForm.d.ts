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
export declare type ListingUpdateFormInputValues = {
    Location?: string;
    HouseInfo?: string;
    DurationRequired?: string;
    Pictures?: string;
    Price?: number;
};
export declare type ListingUpdateFormValidationValues = {
    Location?: ValidationFunction<string>;
    HouseInfo?: ValidationFunction<string>;
    DurationRequired?: ValidationFunction<string>;
    Pictures?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingUpdateFormOverridesProps = {
    ListingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    HouseInfo?: PrimitiveOverrideProps<TextFieldProps>;
    DurationRequired?: PrimitiveOverrideProps<TextFieldProps>;
    Pictures?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ListingUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    listing?: any;
    onSubmit?: (fields: ListingUpdateFormInputValues) => ListingUpdateFormInputValues;
    onSuccess?: (fields: ListingUpdateFormInputValues) => void;
    onError?: (fields: ListingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListingUpdateFormInputValues) => ListingUpdateFormInputValues;
    onValidate?: ListingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListingUpdateForm(props: ListingUpdateFormProps): React.ReactElement;
