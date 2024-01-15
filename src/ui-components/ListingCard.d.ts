/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ListingCardOverridesProps = {
    ListingCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Location?: PrimitiveOverrideProps<TextProps>;
    Space?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    Owner?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ListingCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    listing?: any;
} & {
    overrides?: ListingCardOverridesProps | undefined | null;
}>;
export default function ListingCard(props: ListingCardProps): React.ReactElement;
