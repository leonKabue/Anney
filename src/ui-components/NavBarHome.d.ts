/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type NavBarHomeOverridesProps = {
    NavBarHome?: PrimitiveOverrideProps<FlexProps>;
    image38464215?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32138464216"?: PrimitiveOverrideProps<FlexProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    Listings?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32138464219"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    image38464221?: PrimitiveOverrideProps<ImageProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarHomeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHomeOverridesProps | undefined | null;
}>;
export default function NavBarHome(props: NavBarHomeProps): React.ReactElement;
