/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, ImageProps, RatingProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ProductDetailOverridesProps = {
    ProductDetail?: PrimitiveOverrideProps<FlexProps>;
    "Frame 404"?: PrimitiveOverrideProps<FlexProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    "Frame 2738464673"?: PrimitiveOverrideProps<FlexProps>;
    Ratings?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    reviews?: PrimitiveOverrideProps<TextProps>;
    "Frame 2738464676"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 738464634"?: PrimitiveOverrideProps<FlexProps>;
    "About the place"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat."?: PrimitiveOverrideProps<TextProps>;
    Divider38535165?: PrimitiveOverrideProps<DividerProps>;
    "Frame 738464638"?: PrimitiveOverrideProps<FlexProps>;
    "House Features"?: PrimitiveOverrideProps<TextProps>;
    "Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton"?: PrimitiveOverrideProps<TextProps>;
    Divider38535210?: PrimitiveOverrideProps<DividerProps>;
    "Frame 738464642"?: PrimitiveOverrideProps<FlexProps>;
    "House Rules"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProductDetailProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductDetailOverridesProps | undefined | null;
}>;
export default function ProductDetail(props: ProductDetailProps): React.ReactElement;
