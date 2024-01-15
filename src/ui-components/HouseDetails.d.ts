/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ProductDetailProps } from "./ProductDetail";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HouseDetailsOverridesProps = {
    HouseDetails?: PrimitiveOverrideProps<FlexProps>;
    HouseDetails38464738?: ProductDetailProps;
} & EscapeHatchProps;
export declare type HouseDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: HouseDetailsOverridesProps | undefined | null;
}>;
export default function HouseDetails(props: HouseDetailsProps): React.ReactElement;